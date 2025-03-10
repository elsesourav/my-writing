document.addEventListener('DOMContentLoaded', () => {
    const drawingCanvas = document.getElementById('drawingCanvas');
    const previewCanvas = document.getElementById('previewCanvas');
    const characterSelect = document.getElementById('characterSelect');
    const clearButton = document.getElementById('clearButton');
    const saveCharacterButton = document.getElementById('saveCharacter');
    const undoButton = document.getElementById('undoButton');
    const redoButton = document.getElementById('redoButton');
    const textInput = document.getElementById('textInput');
    const characterGrid = document.getElementById('characterGrid');
    const strokeSizeInput = document.getElementById('strokeSize');

    const drawingCtx = drawingCanvas.getContext('2d');
    const previewCtx = previewCanvas.getContext('2d');

    // Initialize drawing settings
    drawingCtx.strokeStyle = '#000';
    drawingCtx.lineWidth = 2;
    drawingCtx.lineCap = 'round';
    drawingCtx.lineJoin = 'round';

    // Store drawn characters and history
    let characters = {};
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let drawingHistory = [];
    let currentHistoryIndex = -1;

    function saveToHistory() {
        if (currentHistoryIndex < drawingHistory.length - 1) {
            drawingHistory = drawingHistory.slice(0, currentHistoryIndex + 1);
        }
        
        drawingHistory.push([...currentCharacterStrokes]);
        currentHistoryIndex++;
        
        updateUndoRedoButtons();
    }

    function updateUndoRedoButtons() {
        undoButton.disabled = currentHistoryIndex < 0;
        redoButton.disabled = currentHistoryIndex >= drawingHistory.length - 1;
    }

    undoButton.addEventListener('click', () => {
        if (currentHistoryIndex > 0) {
            currentHistoryIndex--;
            currentCharacterStrokes = [...drawingHistory[currentHistoryIndex]];
            redrawCanvas();
            updateUndoRedoButtons();
        }
    });

    redoButton.addEventListener('click', () => {
        if (currentHistoryIndex < drawingHistory.length - 1) {
            currentHistoryIndex++;
            currentCharacterStrokes = [...drawingHistory[currentHistoryIndex]];
            redrawCanvas();
            updateUndoRedoButtons();
        }
    });

    function redrawCanvas() {
        drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
        for (const stroke of currentCharacterStrokes) {
            drawingCtx.lineWidth = stroke.strokeSize;
            drawingCtx.beginPath();
            const points = stroke.points;
            if (points.length > 0) {
                drawingCtx.moveTo(points[0].x, points[0].y);
                for (let i = 1; i < points.length; i++) {
                    drawingCtx.lineTo(points[i].x, points[i].y);
                }
                drawingCtx.stroke();
            }
        }
    }

    // Load characters from local storage
    const loadCharacters = () => {
        const savedCharacters = localStorage.getItem('characters');
        if (savedCharacters) {
            characters = JSON.parse(savedCharacters);
            updateCharacterGrid();
            updatePreview();
        }
    };

    // Save characters to local storage
    const saveToLocalStorage = () => {
        localStorage.setItem('characters', JSON.stringify(characters));
    };

    // Set up character input validation
    characterSelect.addEventListener('input', (e) => {
        if (e.target.value.length > 1) {
            e.target.value = e.target.value.charAt(0);
        }
    });

    // Update stroke size
    strokeSizeInput.addEventListener('input', (e) => {
        drawingCtx.lineWidth = e.target.value;
    });

    // Drawing event listeners
    drawingCanvas.addEventListener('mousedown', startDrawing);
    drawingCanvas.addEventListener('mousemove', draw);
    drawingCanvas.addEventListener('mouseup', stopDrawing);
    drawingCanvas.addEventListener('mouseout', stopDrawing);

    // Drawing event listeners for touch
    drawingCanvas.addEventListener('touchstart', handleTouchStart);
    drawingCanvas.addEventListener('touchmove', handleTouchMove);
    drawingCanvas.addEventListener('touchend', stopDrawing);
    drawingCanvas.addEventListener('touchcancel', stopDrawing);

    function handleTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = drawingCanvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        startDrawing({ offsetX: x, offsetY: y });
    }

    function handleTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = drawingCanvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        draw({ offsetX: x, offsetY: y });
    }

    let currentStroke = [];
    let currentCharacterStrokes = [];

    function startDrawing(e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
        currentStroke = [{x: lastX, y: lastY}];
    }

    function draw(e) {
        if (!isDrawing) return;

        drawingCtx.beginPath();
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(e.offsetX, e.offsetY);
        drawingCtx.stroke();

        currentStroke.push({x: e.offsetX, y: e.offsetY});
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    function stopDrawing() {
        if (isDrawing) {
            isDrawing = false;
            if (currentStroke.length > 1) {
                currentCharacterStrokes.push({
                    points: currentStroke,
                    strokeSize: drawingCtx.lineWidth
                });
            }
            currentStroke = [];
            saveToHistory();
        }
    }

    clearButton.addEventListener('click', () => {
        drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
        currentCharacterStrokes = [];
        saveToHistory();
    });

    saveCharacterButton.addEventListener('click', () => {
        const selectedChar = characterSelect.value;
        if (!selectedChar) {
            alert('Please select a character first!');
            return;
        }

        characters[selectedChar] = {
            strokes: currentCharacterStrokes,
            strokeSize: drawingCtx.lineWidth
        };

        saveToLocalStorage();
        updateCharacterGrid();
        updatePreview();
        drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
        currentCharacterStrokes = [];
    });

    // Undo last drawing action
    undoButton.addEventListener('click', () => {
        if (currentHistoryIndex > 0) {
            currentHistoryIndex--;
            const img = new Image();
            img.src = drawingHistory[currentHistoryIndex];
            img.onload = () => {
                drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
                drawingCtx.drawImage(img, 0, 0);
                updateUndoRedoButtons();
            };
        }
    });

    // Redo last undone action
    redoButton.addEventListener('click', () => {
        if (currentHistoryIndex < drawingHistory.length - 1) {
            currentHistoryIndex++;
            const img = new Image();
            img.src = drawingHistory[currentHistoryIndex];
            img.onload = () => {
                drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
                drawingCtx.drawImage(img, 0, 0);
                updateUndoRedoButtons();
            };
        }
    });

    // Save character
    saveCharacterButton.addEventListener('click', () => {
        const selectedChar = characterSelect.value;
        if (!selectedChar) {
            alert('Please select a character first!');
            return;
        }

        characters[selectedChar] = {
            imageData: drawingCanvas.toDataURL(),
            strokeSize: drawingCtx.lineWidth
        };

        console.log(characters);
        
        
        saveToLocalStorage();
        updateCharacterGrid();
        updatePreview();
        drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
    });

    // Update character grid
    function updateCharacterGrid() {
        characterGrid.innerHTML = '';
        Object.entries(characters).forEach(([char, data]) => {
            const preview = document.createElement('div');
            preview.className = 'character-preview';
            preview.innerHTML = `
                <img src="${data.imageData}" alt="${char}" style="max-width: 100%; max-height: 100%;">
                <div style="position: absolute; bottom: 2px; right: 2px; font-size: 10px;">${char}</div>
                <div style="position: absolute; top: 2px; right: 2px; font-size: 8px;">Size: ${data.strokeSize}</div>
            `;
            preview.style.position = 'relative';
            characterGrid.appendChild(preview);
        });
    }

    // Update preview when text input changes
    textInput.addEventListener('input', updatePreview);

    function updatePreview() {
        const text = textInput.value;
        const lineHeight = 60;
        const maxWidth = previewCanvas.width - 20;
        const lines = [];
        let currentLine = [];
        let currentLineWidth = 0;

        text.split('').forEach(char => {
            const charWidth = characters[char] ? 45 : previewCtx.measureText(char).width + 5;
            if (currentLineWidth + charWidth > maxWidth) {
                lines.push(currentLine);
                currentLine = [char];
                currentLineWidth = charWidth;
            } else {
                currentLine.push(char);
                currentLineWidth += charWidth;
            }
        });
        if (currentLine.length > 0) {
            lines.push(currentLine);
        }

        const totalHeight = lines.length * lineHeight + 20;
        previewCanvas.height = totalHeight;
        previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

        lines.forEach((line, lineIndex) => {
            let currentX = 10;
            const baselineY = lineHeight * (lineIndex + 1);

            line.forEach(char => {
                if (characters[char]) {
                    const img = new Image();
                    img.src = characters[char].imageData;
                    img.onload = () => {
                        previewCtx.drawImage(img, currentX, baselineY - 40, 40, 40);
                    };
                    currentX += 45;
                } else {
                    previewCtx.font = '40px Arial';
                    previewCtx.fillText(char, currentX, baselineY);
                    currentX += previewCtx.measureText(char).width + 5;
                }
            });
        });
    }
    

    // Load saved characters when the page loads
    loadCharacters();
});