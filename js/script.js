const characters = {
   "a-z": {
      'a': { t: 100, b: 100, w: 180, h: 300 },
      'b': { t: 0, b: 100, w: 180, h: 300 },
      'c': { t: 100, b: 100, w: 160, h: 300 },
      'd': { t: 0, b: 100, w: 180, h: 300 },
      'e': { t: 100, b: 100, w: 160, h: 300 },
      'f': { t: 0, b: 100, w: 140, h: 300 },
      'g': { t: 100, b: 40, w: 180, h: 300 },
      'h': { t: 0, b: 100, w: 180, h: 300 },
      'i': { t: 40, b: 100, w: 80, h: 300 },
      'j': { t: 40, b: 100, w: 100, h: 300 },
      'k': { t: 0, b: 100, w: 160, h: 300 },
      'l': { t: 0, b: 100, w: 80, h: 300 },
      'm': { t: 100, b: 100, w: 240, h: 300 },
      'n': { t: 100, b: 100, w: 180, h: 300 },
      'o': { t: 100, b: 100, w: 180, h: 300 },
      'p': { t: 100, b: 0, w: 180, h: 300 },
      'q': { t: 100, b: 0, w: 180, h: 300 },
      'r': { t: 100, b: 100, w: 140, h: 300 },
      's': { t: 100, b: 100, w: 160, h: 300 },
      't': { t: 50, b: 100, w: 140, h: 300 },
      'u': { t: 100, b: 100, w: 180, h: 300 },
      'v': { t: 100, b: 100, w: 180, h: 300 },
      'w': { t: 100, b: 100, w: 240, h: 300 },
      'x': { t: 100, b: 100, w: 180, h: 300 },
      'y': { t: 100, b: 0, w: 180, h: 300 },
      'z': { t: 100, b: 100, w: 160, h: 300 }
   },
   "A-Z": {
      'A': { t: 0, b: 100, w: 200, h: 300 },
      'B': { t: 0, b: 100, w: 200, h: 300 },
      'C': { t: 0, b: 100, w: 200, h: 300 },
      'D': { t: 0, b: 100, w: 200, h: 300 },
      'E': { t: 0, b: 100, w: 180, h: 300 },
      'F': { t: 0, b: 100, w: 180, h: 300 },
      'G': { t: 0, b: 100, w: 220, h: 300 },
      'H': { t: 0, b: 100, w: 200, h: 300 },
      'I': { t: 0, b: 100, w: 100, h: 300 },
      'J': { t: 0, b: 100, w: 160, h: 300 },
      'K': { t: 0, b: 100, w: 200, h: 300 },
      'L': { t: 0, b: 100, w: 180, h: 300 },
      'M': { t: 0, b: 100, w: 240, h: 300 },
      'N': { t: 0, b: 100, w: 200, h: 300 },
      'O': { t: 0, b: 100, w: 220, h: 300 },
      'P': { t: 0, b: 100, w: 200, h: 300 },
      'Q': { t: 0, b: 100, w: 220, h: 320 },
      'R': { t: 0, b: 100, w: 200, h: 300 },
      'S': { t: 0, b: 100, w: 180, h: 300 },
      'T': { t: 0, b: 100, w: 180, h: 300 },
      'U': { t: 0, b: 100, w: 200, h: 300 },
      'V': { t: 0, b: 100, w: 200, h: 300 },
      'W': { t: 0, b: 100, w: 260, h: 300 },
      'X': { t: 0, b: 100, w: 200, h: 300 },
      'Y': { t: 0, b: 100, w: 200, h: 300 },
      'Z': { t: 0, b: 100, w: 180, h: 300 }
   },
   "0-9": {
      '0': { t: 0, b: 100, w: 180, h: 300 },
      '1': { t: 0, b: 100, w: 120, h: 300 },
      '2': { t: 0, b: 100, w: 180, h: 300 },
      '3': { t: 0, b: 100, w: 180, h: 300 },
      '4': { t: 0, b: 100, w: 180, h: 300 },
      '5': { t: 0, b: 100, w: 180, h: 300 },
      '6': { t: 0, b: 100, w: 180, h: 300 },
      '7': { t: 0, b: 100, w: 180, h: 300 },
      '8': { t: 0, b: 100, w: 180, h: 300 },
      '9': { t: 0, b: 100, w: 180, h: 300 }
   },
   "SYMBOLS": {
      '!': { t: 0, b: 100, w: 80, h: 300 },
      '@': { t: 0, b: 100, w: 300, h: 300 },
      '#': { t: 0, b: 100, w: 240, h: 300 },
      '$': { t: 0, b: 100, w: 180, h: 300 },
      '%': { t: 0, b: 100, w: 240, h: 300 },
      '^': { t: 0, b: 200, w: 160, h: 300 },
      '&': { t: 0, b: 100, w: 220, h: 300 },
      '*': { t: 0, b: 200, w: 140, h: 300 },
      '(': { t: 0, b: 0, w: 100, h: 300 },
      ')': { t: 0, b: 0, w: 100, h: 300 },
      '-': { t: 120, b: 120, w: 140, h: 300 },
      '_': { t: 260, b: 0, w: 160, h: 300 },
      '+': { t: 80, b: 80, w: 160, h: 300 },
      '=': { t: 80, b: 80, w: 160, h: 300 },
      '{': { t: 0, b: 0, w: 120, h: 300 },
      '}': { t: 0, b: 0, w: 120, h: 300 },
      '[': { t: 0, b: 0, w: 100, h: 300 },
      ']': { t: 0, b: 0, w: 100, h: 300 },
      '|': { t: 0, b: 0, w: 60, h: 300 },
      ':': { t: 0, b: 100, w: 80, h: 300 },
      ';': { t: 0, b: 100, w: 80, h: 300 },
      '<': { t: 80, b: 80, w: 160, h: 300 },
      '>': { t: 80, b: 80, w: 160, h: 300 },
      ',': { t: 220, b: 0, w: 80, h: 300 },
      '.': { t: 260, b: 0, w: 80, h: 300 },
      '?': { t: 40, b: 60, w: 160, h: 300 },
      '/': { t: 40, b: 40, w: 140, h: 300 },
      "'": { t: 0, b: 220, w: 60, h: 300 },
      '"': { t: 0, b: 220, w: 120, h: 300 },
      '×': { t: 100, b: 100, w: 160, h: 300 },
      'π': { t: 100, b: 100, w: 180, h: 300 },
      '√': { t: 0, b: 0, w: 180, h: 300 },
      '∑': { t: 0, b: 0, w: 180, h: 300 },
      '∪': { t: 0, b: 0, w: 180, h: 300 },
      '∩': { t: 0, b: 0, w: 180, h: 300 },
      '∅': { t: 100, b: 100, w: 200, h: 300 },
      '∞': { t: 100, b: 100, w: 240, h: 300 },
      '≡': { t: 60, b: 60, w: 160, h: 300 },
      '≠': { t: 60, b: 60, w: 180, h: 300 },
      '≈': { t: 80, b: 80, w: 180, h: 300 },
      '≥': { t: 80, b: 80, w: 180, h: 300 },
      '≤': { t: 80, b: 80, w: 180, h: 300 },
      '∏': { t: 0, b: 0, w: 180, h: 300 },
      '∫': { t: 0, b: 0, w: 140, h: 300 },
      'γ': { t: 0, b: 0, w: 160, h: 300 },
      'φ': { t: 40, b: 40, w: 180, h: 300 },
      'μ': { t: 100, b: 50, w: 180, h: 300 },
      '`': { t: 0, b: 240, w: 100, h: 300 }
    }
};

const drawingCanvas = document.getElementById("drawingCanvas");
drawingCanvas.width = drawingCanvas.clientWidth;
drawingCanvas.height = drawingCanvas.clientHeight;

const characterTypeButtons = document.getElementById("characterTypeButtons");
const allCharacters = document.getElementById("allCharacters");
const selectedChar = document.getElementById("selectedChar");
const selectedAllChars = document.getElementById("selectedAllChars");

const strokeSize = document.getElementById("strokeSize");
const showStrokeSize = document.getElementById("showStrokeSize");
const clearButton = document.getElementById("clearButton");
const undoButton = document.getElementById("undoButton");
const redoButton = document.getElementById("redoButton");
const saveButton = document.getElementById("saveCharacter");

// Track the currently selected character
let currentSelectedCharacter = null;

// Initialize drawing
const draw = new Draw({
    canvas: drawingCanvas,
    characters: { ...characters["a-z"], ...characters["A-Z"], ...characters["0-9"], ...characters["SYMBOLS"] },
});

// Event listeners for controls
strokeSize.addEventListener("input", (e) => {
    const size = e.target.value;
    showStrokeSize.textContent = size;
    draw.setStrokeSize(size);
});
clearButton.addEventListener("click", () => draw.clear());
undoButton.addEventListener("click", () => draw.undo());
redoButton.addEventListener("click", () => draw.redo());

saveButton.addEventListener("click", () => {
    if (!currentSelectedCharacter) {
        alert("Please select a character first");
        return;
    }

    const saved = draw.saveDrawing(currentSelectedCharacter);

    draw.clear();
    
    if (saved) {
        alert(`Drawing saved for character '${currentSelectedCharacter}'`);
    } else {
        alert("Nothing to save. Please draw something first.");
    }
});

function setupCharactersButtons() {
    characterTypeButtons.innerHTML = "";
    const elements = [];
    for (const key in characters) {
        const element = document.createElement("button");
        element.name = key;
        element.innerText = key;
        elements.push(element);
        characterTypeButtons.append(element);
    }
    elements.forEach((element) => {
        element.addEventListener("click", (e) => {
            elements.forEach(e => e.classList = []);
            element.classList.add("active");
            openCharacters(e);
        })
    })
}
setupCharactersButtons()


function openCharacters(e) {
    const type = e.target.name;
    const chars = characters[type];
    const savedDrawings = draw.getSavedDrawings();
    allCharacters.innerHTML = "";

    const elements = [];
    for (const char in chars) {
        const button = document.createElement("button");
        button.innerText = char;
        const isMatch = savedDrawings[char] && savedDrawings[char].length > 0;
    
        if (isMatch) button.classList.add("present");
    
        button.addEventListener("click", () => {
            elements.forEach(e => e.classList.remove("active"));
            button.classList.add("active");
            selectToDrawCharacter(char);
        });
        elements.push(button); 
    }

    allCharacters.append(...elements);
}

function selectToDrawCharacter(char){
    currentSelectedCharacter = char;
    selectedChar.innerText = char;
    
    const savedDrawings = draw.getSavedDrawings();
    if (savedDrawings[char] && savedDrawings[char].length > 0) {
        selectedAllChars.innerHTML = "";
        savedDrawings[char].forEach((drawingWithMargins, index) => {
            const div = document.createElement("div");
            const canvas = document.createElement("canvas");
            const deleteBtn = document.createElement("button");
            deleteBtn.className = "delete-btn";
            deleteBtn.innerHTML = "×";
            deleteBtn.onclick = () => {
                if (draw.deleteDrawing(char, index)) {
                    div.remove();
                    if (savedDrawings[char].length === 0) {
                        const charBtn = Array.from(allCharacters.children).find(btn => btn.innerText === char);
                        if (charBtn) charBtn.classList.remove("present");
                    }
                }
            };
            canvas.width = 200;
            canvas.height = 200;
            
            const ctx = canvas.getContext("2d");
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.strokeStyle = "#000";
            
            // Get the drawing data and margins
            const drawingData = drawingWithMargins.strokes || drawingWithMargins; // Handle both new and old format
            
            // Find the predefined margins for this character from the characters object
            let margins = drawingWithMargins.margins;
            
            // If margins aren't available in the saved drawing, look them up in the characters object
            if (!margins) {
                // Find the character in the characters object
                for (const type in characters) {
                    const charObj = characters[type].find(c => c.char === char);
                    if (charObj) {
                        margins = {
                            t: charObj.t,
                            b: charObj.b,
                            l: charObj.l,
                            r: charObj.r
                        };
                        break;
                    }
                }
                
                // If still not found, use default margins
                if (!margins) {
                    margins = {
                        t: 10,
                        b: 10,
                        l: 10,
                        r: 10
                    };
                }
            }
            
            // Calculate bounding box
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            drawingData.forEach(stroke => {
                stroke.points.forEach(point => {
                    minX = Math.min(minX, point.x);
                    minY = Math.min(minY, point.y);
                    maxX = Math.max(maxX, point.x);
                    maxY = Math.max(maxY, point.y);
                });
            });
            
            // Calculate scale factor to fit drawing in canvas
            const drawingWidth = maxX - minX;
            const drawingHeight = maxY - minY;
            const scaleX = (canvas.width - 40) / drawingWidth;
            const scaleY = (canvas.height - 40) / drawingHeight;
            const scale = Math.min(scaleX, scaleY);
            
            // Calculate translation to center the drawing
            const translateX = (canvas.width - drawingWidth * scale) / 2 - minX * scale;
            const translateY = (canvas.height - drawingHeight * scale) / 2 - minY * scale;
            
            // Apply transformation with character-specific margins
            // Apply different vertical positioning based on character type
            const verticalOffset = /[a-z]/.test(char) ? (margins.t - margins.b) / 2 : 0;
            
            ctx.translate(translateX, translateY + verticalOffset * scale);
            ctx.scale(scale, scale);
            
            drawingData.forEach(stroke => {
                ctx.beginPath();
                ctx.lineWidth = stroke.strokeWidth;
                const points = stroke.points;
                if (points.length > 0) {
                    ctx.moveTo(points[0].x, points[0].y);
                    points.forEach(point => ctx.lineTo(point.x, point.y));
                    ctx.stroke();
                }
            });
            
            // Reset transformation
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            div.appendChild(canvas);
            div.appendChild(deleteBtn);
            selectedAllChars.appendChild(div);
        });
    } else {
        selectedAllChars.innerHTML = "";
    }
}



// Initialize the preview canvas
const textInput = document.getElementById("textInput");
const previewCanvas = document.getElementById("previewCanvas");
previewCanvas.width = previewCanvas.clientWidth;
previewCanvas.height = 200; // Set a fixed height for the preview canvas
const previewCtx = previewCanvas.getContext("2d");
const charSize = document.getElementById("charSize");
const showCharSize = document.getElementById("showCharSize");

// Event listener for character size input
charSize.addEventListener("input", (e) => {
    const size = e.target.value;
    showCharSize.textContent = size;
    renderPreviewText(); // Re-render text with new size
});

// Add event listener for text input to update preview in real-time
textInput.addEventListener("input", () => {
    renderPreviewText(); // Re-render text when user types
});

// Function to render text on preview canvas
function renderPreviewText() {
    const text = textInput.value;
    if (!text) {
        // Clear the canvas if there's no text
        previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
        return;
    }
    
    // Clear the canvas before drawing new text
    previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
    
    const savedDrawings = draw.getSavedDrawings();
    let xPosition = 20; // Starting x position with margin
    let yPosition = 60; // Starting y position with margin
    const characterSize = parseInt(charSize.value); // Get character size from slider
    const lineHeight = characterSize * 1.5; // Adjust line height based on character size
    
    // Process each character in the text
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        // Handle line breaks
        if (char === '\n') {
            xPosition = 20; // Reset x position to the start
            yPosition += lineHeight; // Move to the next line
            continue;
        }
        
        // Skip rendering for space characters, just add space
        if (char === " ") {
            xPosition += characterSize * 0.75; // Scale space width based on character size
            continue;
        }
        
        // Check if we have saved drawings for this character
        if (savedDrawings[char] && savedDrawings[char].length > 0) {
            // Randomly select one of the saved styles for this character
            const randomStyleIndex = Math.floor(Math.random() * savedDrawings[char].length);
            const drawingWithMargins = savedDrawings[char][randomStyleIndex];
            
            // Get the drawing data and margins
            const drawingData = drawingWithMargins.strokes || drawingWithMargins; // Handle both new and old format
            
            // Find the predefined margins for this character from the characters object
            let margins = drawingWithMargins.margins;
            
            // If margins aren't available in the saved drawing, look them up in the characters object
            if (!margins) {
                // Find the character in the characters object
                for (const type in characters) {
                    const charObj = characters[type].find(c => c.char === char);
                    if (charObj) {
                        margins = {
                            t: charObj.t,
                            b: charObj.b,
                            l: charObj.l,
                            r: charObj.r
                        };
                        break;
                    }
                }
                
                // If still not found, use default margins
                if (!margins) {
                    margins = {
                        t: 10,
                        b: 10,
                        l: 10,
                        r: 10
                    };
                }
            }
            
            // Calculate bounding box for proper scaling
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            drawingData.forEach(stroke => {
                stroke.points.forEach(point => {
                    minX = Math.min(minX, point.x);
                    minY = Math.min(minY, point.y);
                    maxX = Math.max(maxX, point.x);
                    maxY = Math.max(maxY, point.y);
                });
            });
            
            // Calculate dimensions and scale
            const drawingWidth = maxX - minX;
            const drawingHeight = maxY - minY;
            const scale = Math.min(characterSize / drawingWidth, characterSize / drawingHeight); // Use character size for scaling
            
            // Save the current context state
            previewCtx.save();
            
            // Apply transformations with character-specific margins
            // Apply different vertical positioning based on character type
            const verticalOffset = /[a-z]/.test(char) ? (margins.t - margins.b) / 2 : 0;
            
            previewCtx.translate(xPosition, yPosition + verticalOffset * scale);
            previewCtx.scale(scale, scale);
            previewCtx.translate(-minX, -minY - drawingHeight/2); // Center vertically
            
            // Draw the character
            previewCtx.lineCap = "round";
            previewCtx.lineJoin = "round";
            previewCtx.strokeStyle = "#000";
            
            drawingData.forEach(stroke => {
                previewCtx.beginPath();
                previewCtx.lineWidth = stroke.strokeWidth;
                const points = stroke.points;
                if (points.length > 0) {
                    previewCtx.moveTo(points[0].x, points[0].y);
                    points.forEach(point => previewCtx.lineTo(point.x, point.y));
                    previewCtx.stroke();
                }
            });
            
            // Restore the context state
            previewCtx.restore();
            
            // Move x position for next character (with spacing)
            xPosition += (drawingWidth * scale) + (characterSize * 0.25); // Scale spacing based on character size
            
            // Check if we need to wrap to the next line (if approaching canvas edge)
            if (xPosition > previewCanvas.width - characterSize) {
                xPosition = 20; // Reset x position
                yPosition += lineHeight; // Move to next line
            }
        } else {
            // If no drawing exists for this character, draw a placeholder
            previewCtx.save();
            previewCtx.font = `${characterSize/2}px sans-serif`; // Scale font size based on character size
            previewCtx.fillText(char, xPosition, yPosition);
            previewCtx.restore();
            xPosition += characterSize/2; // Scale placeholder width based on character size
            
            // Check if we need to wrap to the next line
            if (xPosition > previewCanvas.width - characterSize) {
                xPosition = 20; // Reset x position
                yPosition += lineHeight; // Move to next line
            }
        }
    }
    
    // Adjust canvas height if needed to fit all lines
    if (yPosition + lineHeight > previewCanvas.height) {
        previewCanvas.height = yPosition + lineHeight;
    }
}

// Initial render in case there's default text
renderPreviewText();

// Make the textarea accept line breaks properly
textInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        // Don't submit the form if it's in a form
        e.preventDefault();
        
        // Insert a newline character at the cursor position
        const start = this.selectionStart;
        const end = this.selectionEnd;
        const value = this.value;
        this.value = value.substring(0, start) + '\n' + value.substring(end);
        
        // Move the cursor after the inserted newline
        this.selectionStart = this.selectionEnd = start + 1;
        
        // Render the updated text
        renderPreviewText();
    }
});


