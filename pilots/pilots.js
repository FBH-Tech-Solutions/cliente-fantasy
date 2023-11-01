import { navbar } from "../uax/componentes.js";
import { getLocalStorage } from "../uax/funcs.js";
import { drivers } from "../uax/funcs.js";

navbar();
let arr = drivers();

generateTable(arr);

// console.log(drivers())

function generateTable(arr) {
  
    const tbl = document.getElementById("table");
    const tblBody = document.getElementById("tbody");
  
    for (let i = 0; i < arr.length; i++) {
      const row = document.createElement("tr");
  
      for (let key in arr[i]) {
        const cell = document.createElement("td");
        cell.setAttribute("scope", "row")
        if(key == "img"){
            let image = document.createElement("img")
            image.src = arr[i][key]
            console.log(image)
            cell.appendChild(image)
            row.appendChild(cell);
        }else{
            let cellText = document.createTextNode(arr[i][key]); // Accede a la propiedad correcta
            cell.appendChild(cellText);
            row.appendChild(cell);
        }


      }

      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    // document.body.appendChild(tbl);
  }
