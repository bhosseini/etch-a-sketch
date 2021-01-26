const grid = document.querySelector('.grid-container');
const button = document.querySelector('#reset-button');

button.addEventListener('click', () => {
    let newGridSize = window.prompt("What should the size of the new grid be?",
        "example: 10, 15, 20, etc...");
    grid.innerHTML = '';

    if (newGridSize > 100) {
        newGridSize = 100;
    };
    createGrid(newGridSize,newGridSize);
});

function createGrid(rows, columns) {
    grid.style.gridTemplateColumns = `repeat(${columns},1fr)`;
    grid.style.gridTemplateRows = `repeat(${columns},1fr)`;

    for (let i = 0; i < rows * columns; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        grid.appendChild(div);
    };
    paintBoxes(`rgb(105, 102, 102)`);
};

function paintBoxes(color) {
    let boxes = document.querySelectorAll('.grid-item');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = color;
        })
    });
};

createGrid(16,16);

