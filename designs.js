// Select color input
// Select size input

var form = document.querySelector("#sizePicker");
var table = document.querySelector("#pixelCanvas");
var h = document.querySelector("#inputHeight");
var w = document.querySelector("#inputWidth");
var colorPicker = document.querySelector("#colorPicker");





// When size is submitted by the user, call makeGrid()
form.addEventListener("submit", function (event){
  event.preventDefault();
  makeGrid();
})

function makeGrid(){
//clears the table
  table.innerHTML = " ";

  for(var row = 0; row < w.value; row++){
    var r = document.createElement("tr");
    table.appendChild(r)

    for (var col = 0; col < h.value; col++){
      var c = document.createElement("td");
      r.appendChild(c)
    }
  }
}
//color the cells
table.addEventListener("click", function(event){
  if (event.target.nodeName=== "TD"){
    event.target.style.backgroundColor = colorPicker.value;}})
