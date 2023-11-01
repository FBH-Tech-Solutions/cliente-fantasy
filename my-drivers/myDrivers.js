import { getLocalStorage, setLocalStorate } from "../uax/funcs.js";
import { navbar } from "../uax/componentes.js";

var img1=document.getElementById('img1')
var img2=document.getElementById('img2')
var driver1=document.getElementById('driver1')
var driver2=document.getElementById('driver2')
var rol1=document.getElementById('rol1')
var rol2=document.getElementById('rol2')
var drivers=getLocalStorage('arrDrivers')
setLocalStorate('firstDriver',drivers[4])//Esto hay que borrarlo
setLocalStorate('seconDriver',drivers[1]);
var button=document.getElementById('submit')
var optionDriver1=document.getElementById('optionDriver1')
var optionDriver2=document.getElementById('optionDriver2')
var firstDriver=getLocalStorage('firstDriver',drivers[4]) //Se tiene que modificar esta parte para que obtengamos los pilotos del usuario
var secondDriver=getLocalStorage('seconDriver',drivers[1]);

function loadDrivers(){
    if (drivers && drivers.length > 1) {

        img1.src=firstDriver.img;
        driver1.textContent=firstDriver.name;
        rol1.textContent=firstDriver.rol;

        img2.src=secondDriver.img;
        driver2.textContent=secondDriver.name;
        rol2.textContent=secondDriver.rol;

        optionDriver1.textContent=firstDriver.name;
        optionDriver2.textContent=secondDriver.name;
      } else {
        console.log("We don't found drivers");
      } 
}

function changeData(d1,d2){
    img1.src=d1.img;
    driver1.textContent=d1.name;
    rol1.textContent=d1.rol;

    img2.src=d2.img;
    driver2.textContent=d2.name;
    rol2.textContent=d2.rol;
}

button.addEventListener('click', function(){
    var selectedOption = document.getElementById("inputGroupSelect01").value;
    
    if (selectedOption==='1') {
        if (driver1.textContent==firstDriver.name) {
            //Error de que el driver es el mismo y debe saltar un mensaje de que es el mismo driver
            console.log('Este ya es titular')
        }else{
            console.log(firstDriver,secondDriver)
            changeData(firstDriver,secondDriver)
        }
    }else{
        if (selectedOption==='2') {
            if (driver2.textContent==firstDriver.name) {
                //Error de que el driver es el mismo y debe saltar un mensaje de que es el mismo driver
                console.log('Este ya es titular')
            }else{
                console.log(firstDriver,secondDriver)
                changeData(secondDriver,firstDriver)
            }
        }
    }
})

navbar()
loadDrivers()