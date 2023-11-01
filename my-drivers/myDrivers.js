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
var optionDriver1=document.getElementById('optionDriver1')
var optionDriver2=document.getElementById('optionDriver2')


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

function changeDataDriver1(){
    img1.src=secondDriver.img;
    driver1.textContent=secondDriver.name;
    rol1.textContent=secondDriver.rol;

    img2.src=firstDriver.img;
    driver2.textContent=firstDriver.name;
    rol2.textContent=firstDriver.rol;
}

function changeDataDriver2(){
    img1.src=firstDriver.img;
    driver1.textContent=firstDriver.name;
    rol1.textContent=firstDriver.rol;

    img2.src=secondDriver.img;
    driver2.textContent=secondDriver.name;
    rol2.textContent=secondDriver.rol;
}

button.addEventListener('click', function(){
    var selectedOption = document.getElementById("inputGroupSelect01").value;
    if (selectedOption==='1') {
        if (driver1.textContent==firstDriver.name) {
            //Error de que el driver es el mismo y debe saltar un mensaje de que es el mismo driver
            console.log('Este ya es titular')
        }else{
            changeDataDriver2()
        }
    }else{
        if (selectedOption==='2') {
            if (driver2.textContent==firstDriver.name) {
                //Error de que el driver es el mismo y debe saltar un mensaje de que es el mismo driver
                console.log('Este ya es titular')
            }else{
                changeDataDriver1()
            }
        }
    }
})

navbar()
loadDrivers()