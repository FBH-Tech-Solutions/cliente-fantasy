import { navbar } from "../uax/componentes.js";
import { getLocalStorage } from "../uax/funcs.js";
import { drivers } from "../uax/funcs.js";
import { findUser } from "../uax/funcs.js";

navbar();

let arr = drivers();

generateTable(arr);


function generateTable(arr) {
  const tbl = document.getElementById("table");
  const tblBody = document.getElementById("tbody");

  for (let i = 0; i < arr.length; i++) {
    const row = document.createElement("tr");

    for (let key in arr[i]) {
      const cell = document.createElement("td");
      cell.setAttribute("scope", "row");

      if (key == "owner") {
        if (findUser(arr[i][key])) {
          insertCell(arr[i][key], cell, row);
        } else {
          insertCell("Available", cell, row);
        }
      } else {
        if (key == "img") {
          let image = document.createElement("img");
          image.src = arr[i][key];
          cell.appendChild(image);
          row.appendChild(cell);
        } else {
          insertCell(arr[i][key], cell, row);
        }
      }
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
