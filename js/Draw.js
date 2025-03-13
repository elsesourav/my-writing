class Draw {
    constructor({ canvas, characters, lineWidth=10, margin=20 }) {
        this.canvas = canvas;
        this.characters = characters;
        this.lineWidth = lineWidth;
        this.margin = margin;
        this.ctx = canvas.getContext("2d");
        this.isDrawing = false;
        this.points = [];
        this.currentStroke = [];
        this.strokeHistory = [];
        this.redoStack = [];

        // Initialize event listeners
        this.initializeEventListeners();

        // Set default drawing style
        this.ctx.lineCap = "round";
        this.ctx.lineJoin = "round";
        this.ctx.strokeStyle = "#000";
        this.ctx.lineWidth = this.lineWidth;
    }

    initializeEventListeners() {
        // Mouse events
        this.canvas.addEventListener("mousedown", this.startDrawing.bind(this));
        this.canvas.addEventListener("mousemove", this.draw.bind(this));
        this.canvas.addEventListener("mouseup", this.stopDrawing.bind(this));
        this.canvas.addEventListener("mouseout", this.stopDrawing.bind(this));

        // Touch events
        this.canvas.addEventListener("touchstart", this.handleTouch.bind(this));
        this.canvas.addEventListener("touchmove", this.handleTouch.bind(this));
        this.canvas.addEventListener("touchend", this.stopDrawing.bind(this));
    }

    handleTouch(event) {
        event.preventDefault();
        const touch = event.touches[0];
        const mouseEvent = new MouseEvent(event.type === "touchstart" ? "mousedown" : "mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        this.canvas.dispatchEvent(mouseEvent);
    }

    startDrawing(event) {
        this.isDrawing = true;
        this.currentStroke = [];
        const point = this.getPoint(event);
        this.currentStroke.push(point);
        this.ctx.beginPath();
        this.ctx.moveTo(point.x, point.y);
    }

    draw(event) {
        if (!this.isDrawing) return;

        const point = this.getPoint(event);
        this.currentStroke.push(point);
        this.ctx.lineTo(point.x, point.y);
        this.ctx.stroke();
    }

    stopDrawing() {
        if (!this.isDrawing) return;

        this.isDrawing = false;
        if (this.currentStroke.length > 0) {
            this.strokeHistory.push([...this.currentStroke]);
            this.points.push({
                points: [...this.currentStroke],
                strokeWidth: this.ctx.lineWidth,
                strokeColor: this.ctx.strokeStyle
            });
            this.redoStack = [];
        }
    }

    getPoint(event) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    setStrokeSize(size) {
        this.ctx.lineWidth = size;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.points = [];
        this.strokeHistory = [];
        this.redoStack = [];
    }

    undo() {
        if (this.strokeHistory.length === 0) return;

        this.redoStack.push(this.points.pop());
        this.strokeHistory.pop();
        this.redrawCanvas();
    }

    redo() {
        if (this.redoStack.length === 0) return;

        const stroke = this.redoStack.pop();
        this.points.push(stroke);
        this.strokeHistory.push(stroke.points);
        this.redrawCanvas();
    }

    normalizePoints(char) {
        if (this.points.length === 0) return;
        const { t, b, w, h } = this.characters[char];
        
        

        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;

        for (const stroke of this.points) {
            for (const point of stroke.points) {
                minX = Math.min(minX, point.x);
                minY = Math.min(minY, point.y);
                maxX = Math.max(maxX, point.x);
                maxY = Math.max(maxY, point.y);
            }
        }

        // Calculate the current drawing dimensions
        const drawingWidth = maxX - minX;
        const drawingHeight = maxY - minY;

        // first check x scale big or y scale big
        let scaleX = 1;
        let scaleY = 1;

        if (w / h > drawingWidth / drawingHeight) {
            scaleX = (w - (t + b)) / drawingWidth;
            scaleY = h / drawingHeight;
        } else {
            scaleX = w / drawingWidth;
            scaleY = (h - (t + b)) / drawingHeight;
        }

        console.log(`top: ${t}, bottom: ${b}, width: ${w}, height: ${h}`);
        console.log(`scaleX: ${scaleX}, scaleY: ${scaleY}`);
        
        
        for (const stroke of this.points) {
            for (const point of stroke.points) {
                // First normalize to origin (0,0)
                const normalizedX = point.x - minX;
                const normalizedY = point.y - minY;
                
                // Then scale to fit the character width
                point.x = normalizedX * scaleX + this.margin;
                point.y = normalizedY * scaleY + this.margin;
            }
        }
    }

    serializeDrawing() {
        if (this.points.length === 0) return null;
        
        return this.points.map(stroke => ({
            points: stroke.points,
            strokeWidth: this.lineWidth,
        }));
    }
    
    // Get default margins if needed
    getDefaultMargins() {
        return {
            t: 10,
            b: 10,
            l: 10,
            r: 10
        };
    }

    getMargins(char) {
        const { t, b, l, r } = characters["a-z"][char] || characters["A-Z"][char] || characters["0-9"][char] || characters["SYMBOLS"][char] || this.getDefaultMargins();
        return {
            t: t,
            b: b,
            l: l,
            r: r
        };
    }
    
    // Save the current drawing to localStorage for a specific characters
    saveDrawing(char) {
        if (this.points.length === 0) return false;
        
        this.normalizePoints(char);
        // console.log(this.points);
        
        
        // Get the serialized drawing data
        const drawingData = this.serializeDrawing();
        if (!drawingData) return false;
        
        // Find the predefined margins for this character from the characters object
        let margins = this.getMargins(char);
        
        // Get existing drawings from localStorage
        let savedDrawings = {};
        const savedData = localStorage.getItem("savedDrawings");
        if (savedData) {
            try {
                savedDrawings = JSON.parse(savedData);
            } catch (e) {
                console.error("Error parsing saved drawings:", e);
            }
        }
        
        if (!savedDrawings[char]) {
            savedDrawings[char] = [];
        }
        
        // Add margins to the drawing data
        const drawingWithMargins = {
            strokes: drawingData,
            margins: margins
        };
        
        savedDrawings[char].push(drawingWithMargins);
        localStorage.setItem("savedDrawings", JSON.stringify(savedDrawings));
        return true;
    }
    
    loadDrawing(char, styleIndex = 0) {
        const savedData = localStorage.getItem("savedDrawings");
        if (!savedData) return false;
        
        try {
            const savedDrawings = JSON.parse(savedData);
            
            if (!savedDrawings[char] || !savedDrawings[char][styleIndex]) return false;

            const drawingData = savedDrawings[char][styleIndex];
            this.clear();
            this.points = drawingData;
            this.strokeHistory = drawingData.map(stroke => stroke.points);
            this.redrawCanvas();
            
            return true;
        } catch (e) {
            console.error("Error loading drawing:", e);
            return false;
        }
    }
    
    deleteDrawing(char, styleIndex) {
        const savedData = localStorage.getItem("savedDrawings");
        if (!savedData) return false;
        
        try {
            const savedDrawings = JSON.parse(savedData);
            
            if (!savedDrawings[char] || !savedDrawings[char][styleIndex]) return false;
            
            // Remove the specified drawing
            savedDrawings[char].splice(styleIndex, 1);
            
            // If there are no more drawings for this character, remove the character entry
            if (savedDrawings[char].length === 0) {
                delete savedDrawings[char];
            }
            
            // Save the updated drawings back to localStorage
            localStorage.setItem("savedDrawings", JSON.stringify(savedDrawings));
            return true;
        } catch (e) {
            console.error("Error deleting drawing:", e);
            return false;
        }
    }
    
    getSavedDrawings() {
        const savedData = localStorage.getItem("savedDrawings");
        if (!savedData) return {};
        
        try {
            return JSON.parse(savedData);
        } catch (e) {
            console.error("Error getting saved drawings:", e);
            return {};
        }
    }

    redrawCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (const stroke of this.points) {
            this.ctx.lineWidth = stroke.strokeWidth;
            this.ctx.strokeStyle = stroke.strokeColor;
            
            this.ctx.beginPath();
            const firstPoint = stroke.points[0];
            this.ctx.moveTo(firstPoint.x, firstPoint.y);
            
            for (const point of stroke.points) {
                this.ctx.lineTo(point.x, point.y);
            }
            this.ctx.stroke();
        }
    }
}
