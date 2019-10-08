//variable declarations
const table = document.getElementById("pixel_canvas");
const colorPicker = document.getElementById("colorPicker");
let gridHeight, gridWidth;

//draw the grid when Submit is clicked or Enter/Return key is pressed
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
});


function makeGrid() {

  //clear the existing table rows
  pixelCanvas.innerHTML = '';

  //get the user input values for grid height and grid width
  gridHeight = document.getElementById("inputHeight").value;
  gridWidth = document.getElementById("inputWidth").value;

  //draw table grid and add event listener for each cell
  for (let i = 0; i < gridHeight; i++) {
    let row = pixelCanvas.insertRow(i);
    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);

      //to change background color when user clicks
      cell.addEventListener("click", function(event) {
        cell.style.backgroundColor = colorPicker.value;
      });

      //to remove the existing color when user double clicks
      cell.addEventListener("dblclick", function(event){
      	cell.style.backgroundColor = "";
      });
    }
  }
}




/* function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    // loop over each row
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        // loop for each cell
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    // add grid into table element
    table.innerHTML = grid;

    // Add click event to grid cells once the table grid has been created
    addClickEventToCells();
}

// gets values for height and width from form and uses them to call makrGrid()
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

// add click events to all cells
function addClickEventToCells() {
    // on color selection return color:
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}



// on submit of form #sizePicker:
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};
 */

