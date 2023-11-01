import { getLocalStorage } from "../uax/funcs.js";
import { navbar } from "../uax/componentes.js";

var img1=document.getElementById('img1')
var img2=document.getElementById('img2')
var driver1=document.getElementById('driver1')
var driver2=document.getElementById('driver2')
var rol1=document.getElementById('rol1')
var rol2=document.getElementById('rol2')
var drivers=getLocalStorage('arrDrivers')
var firstDriver=drivers[4]; //Se tiene que modificar esta parte para que obtengamos los pilotos del usuario
var secondDriver=drivers[1];
var button=document.getElementById('submit')

function loadDrivers(){
    if (drivers && drivers.length > 1) {

        img1.src=firstDriver.img;
        driver1.textContent=firstDriver.name;
        rol1.textContent=firstDriver.rol;

        img2.src=secondDriver.img;
        driver2.textContent=secondDriver.name;
        rol2.textContent=secondDriver.rol;
      } else {
        console.log("We don't found drivers");
      } 
}

function changeDrivers(){
    
}

function changeData(){
    img1.src=secondDriver.img;
    driver1.textContent=secondDriver.name;
    rol1.textContent=secondDriver.rol;

    img2.src=firstDriver.img;
    driver2.textContent=firstDriver.name;
    rol2.textContent=firstDriver.rol;
}

button.addEventListener('click', function(){
    if () {
        
    }
})

navbar()
loadDrivers()