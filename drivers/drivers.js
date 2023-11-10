import { footer, navbar } from "../utils/componentes.js";
import { foundLoged, getLocalStorage } from "../utils/funcs.js";
import { drivers } from "../utils/funcs.js";
import { findUser } from "../utils/funcs.js";

navbar(foundLoged());
console.log(foundLoged)

let arr = null


//Check empty localStorage of drivers
if(getLocalStorage("drivers")){

  arr = getLocalStorage("drivers")
}else{
  arr = drivers()
}


generateTable(arr);

function generateTable(arr) {
  const tbl = document.getElementById("table");

  let color = getLocalStorage("color")
  if(color=="white"){
    let tema = "table table-striped text-center"
    tbl.setAttribute("class", tema)
  }else if(color=="dark" || color == null){
    let tema = "table table-striped table-dark text-center"
    tbl.setAttribute("class", tema)
  }
  
  const tblBody = document.getElementById("tbody");

  for (let i = 0; i < arr.length; i++) {
    const row = document.createElement("tr");
    
    let key = ["img", "id", "name", "points" ,"nacionality", "owner", "rol" ] 

    let j = 0
    while(j<key.length) {
      
      const cell = document.createElement("td");
      cell.setAttribute("scope", "row");
      cell.setAttribute("style", "vertical-align: middle; font-size:22px ")

      if (key[j] == "owner") {
        if(i==6){
          console.log(arr[i][key[j]])
        }
        if (arr[i][key[j]]) {
            insertCell(arr[i][key[j]], cell, row);
        } else {
          insertCell("Available", cell, row);
        }
      } else {
        if (key[j] == "img") {
          let image = document.createElement("img");
          image.src = arr[i][key[j]];
          image.setAttribute("class", "shadow-lg rounded")
          cell.appendChild(image);
          row.appendChild(cell);
        } else {
          insertCell(arr[i][key[j]], cell, row);
        }
      }
      j++
    }

    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
}

function insertCell(value, cell, row) {
  let cellText = document.createTextNode(value);
  cell.appendChild(cellText);
  row.appendChild(cell);
}

footer()