import { foundLoged, getLocalStorage, logoutUser, setLocalStorate } from "../utils/funcs.js";
import { footer, navbar } from "../utils/componentes.js";
navbar(foundLoged());


var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var driver1 = document.getElementById("driver1");
var driver2 = document.getElementById("driver2");
var rol1 = document.getElementById("rol1");
var rol2 = document.getElementById("rol2");
var button = document.getElementById("submit");
var optionDriver1 = document.getElementById("optionDriver1");
var optionDriver2 = document.getElementById("optionDriver2");
var user=foundLoged()
var drivers = getLocalStorage("drivers");

function loadDrivers() {
  if (user) {
    if (drivers && drivers.length > 1) {
      if (user.myDrivers[0].rol=="Main") {
        img1.src = user.myDrivers[0].img;
        driver1.textContent = user.myDrivers[0].name;
        rol1.textContent = user.myDrivers[0].rol;
      }else{
        img2.src = user.myDrivers[0].img;
        driver2.textContent = user.myDrivers[0].name;
        rol2.textContent = user.myDrivers[0].rol;
      }
      if (user.myDrivers[1].rol=="Main") {
        img1.src = user.myDrivers[1].img;
        driver1.textContent = user.myDrivers[1].name;
        rol1.textContent = user.myDrivers[1].rol;
      }else{
        img2.src = user.myDrivers[1].img;
        driver2.textContent = user.myDrivers[1].name;
        rol2.textContent = user.myDrivers[1].rol;
      }
  
      if (user.myDrivers[0].name.charAt(0) < user.myDrivers[1].name.charAt(0)) {
        optionDriver1.textContent = user.myDrivers[0].name;
        optionDriver2.textContent = user.myDrivers[1].name;
      } else {
        optionDriver2.textContent = user.myDrivers[1].name;
        optionDriver1.textContent = user.myDrivers[0].name;
      }
    } else {
      console.log("We don't found drivers");
    }
  }
}

function changeData(d1, d2) {
      img1.src = d1.img;
      driver1.textContent = d1.name;
      d1.rol = "Main";
      rol1.textContent = d1.rol;

      img2.src = d2.img;
      driver2.textContent = d2.name;
      d2.rol = "Substitute";
      rol2.textContent = d2.rol;

      var drivers=getLocalStorage("drivers")
      for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].name==driver1.textContent) {
          drivers[i].rol="Main"
        }else{
          if (drivers[i].name==driver2.textContent) {
            drivers[i].rol="Substitute"
          }
        }
      }
      var arrayDriversStr=JSON.stringify(drivers)
      localStorage.setItem("drivers",arrayDriversStr)
}

button.addEventListener("click", function () {
  var selectedOption = document.getElementById("inputGroupSelect01").value;

  if (localStorage.getItem("users")) {
    var users=JSON.parse(localStorage.getItem("users"))
  }

  for (let i = 0; i < users.length; i++) {
    if (user.nick==users[i].nick) {
      if (selectedOption === "1") {
        if (driver1.textContent == users[i].myDrivers[0].name) {
          //Error de que el driver es el mismo y debe saltar un mensaje de que es el mismo driver
          console.log("This is main");
        } else {
          changeData(users[i].myDrivers[0], users[i].myDrivers[1]);
          console.log(users[i].myDrivers[0], users[i].myDrivers[1])
        }
      } else {
        if (selectedOption === "2") {
          if (driver2.textContent == users[i].myDrivers[0].name) {

            //Error de que el driver es el mismo y debe saltar un mensaje de que es el mismo driver
          } else {
            changeData(users[i].myDrivers[1], users[i].myDrivers[0]);
          }
        }
      }
      var stringUsers=JSON.stringify(users)
      localStorage.setItem("users",stringUsers)
    }
  }
});

footer()
loadDrivers();
