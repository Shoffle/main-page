// hyp-tac-toe.js

// Number of layers and grid size
const layers = 3;
const gridSize = 9; // 9x9 grids
let currentPlayer = "X";  // Start with player X

// Create the layers and grids dynamically
window.onload = function () {
    for (let layer = 1; layer <= layers; layer++) {
        const layerElement = document.getElementById(`layer${layer}`);
        
        for (let i = 0; i < gridSize; i++) {
            const grid = document.createElement("div");
            grid.className = "grid";

            // Create the cells for the 9x9 grid
            for (let j = 0; j < gridSize * gridSize; j++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                cell.id = `layer${layer}-grid${i}-cell${j}`;
                cell.addEventListener('click', () => handleCellClick(layer, i, j, cell));
                grid.appendChild(cell);
            }

            layerElement.appendChild(grid);
        }
    }
};

// Function to handle a cell click
function handleCellClick(layer, gridIndex, cellIndex, cell) {
    if (cell.innerText === "") {
        cell.innerText = currentPlayer;  // Set the current player's symbol in the cell
        togglePlayer();  // Switch to the next player
    }
}

// Function to switch between players and update the display
function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";  // Toggle between X and O
    document.getElementById("turnDisplay").innerText = `Player ${currentPlayer}'s turn`;  // Update the display
}
