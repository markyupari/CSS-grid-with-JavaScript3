let position = 1; // The starting position of the grid
const gridSize = 100; // The total number of the grid cells

function createGrid() {
  // Should create a new Div based on the gridSize variable value and append these divs to the element with id "target"
  for (let i = 1; i < (gridSize + 1); i++) {
    const element = document.createElement('div');
    element.setAttribute('id', `s${i}`);
    element.textContent = i;
    const container = document.getElementById('target');
    container.appendChild(element);
  }
  
}

function move() {
  // Should increment the position variable by 1 each 100ms taking into consideration the gridSize variable value
  // This function should make use of the toggle function below to change the CSS class on a specific div element
  setTimeout(() => {
    toggle(position);
    toggle(position - 1);
    position++;
    move();
  }, 100);
}

function toggle(position) {
  // Takes a position parameter referencing a grid cell and sets the class name of that cell (or div) to the class 'on'
  // The CSS class "on" is defined in the styles.css file
  // If a position of less than 1 is passed into the function, return 0 as the grid positions only go from 1 to 100
  if (position > 100) return;
  if (position < 1) return;
  const element = document.getElementById(`s${position}`);
  element.classList.toggle('on');
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { createGrid, move, toggle };
}
