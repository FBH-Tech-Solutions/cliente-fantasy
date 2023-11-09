import { findUser, findUserFromEmail, getLocalStorage, inputInvalid, sendNotification, setValidationBootstrap } from './utils/funcs.js';
import { checkByPattern } from './utils/funcs.js';
import { empty } from './utils/funcs.js';
import { cleanValue } from './utils/funcs.js';
import { User } from './classes/user.js';
var EXcheckEmail = /^[\w-\.]+@([\w-\.]{3,15})+[\w-]{2,8}$/;
var EXcheckPassword = /^(?=.*[*#$.])(?!.*\s)[*#$.\w]{6,12}$/;

document.getElementById("submit").addEventListener("click", () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password");

    var user=findUserFromEmail(email)
 
    if (empty(email) || !checkByPattern(EXcheckEmail, email)) {
      // El correo está vacío o no cumple con el patrón
      sendNotification("Email is empty or not well formed", "alert alert-danger")
      setValidationBootstrap(document.getElementById("email"), "is-invalid")
    } else if (empty(password.value) || checkByPattern(EXcheckPassword, password.value)) {
      // La contraseña está vacía o no cumple con el patrón
      sendNotification("Password is empty or not well formed", "alert alert-danger")
      setValidationBootstrap(document.getElementById("password"), "is-invalid")
      cleanValue(password);
    } else if (email == user.email && password.value == user.pass) {
      console.log(user)
      user.login()
      changeLogin(user)
      location.href = "./home/index.html";
      // Las credenciales coinciden, redirige a la página de inicio de sesión.
    } else {
      // Las credenciales no coinciden, realiza alguna acción como mostrar un mensaje de error.
      setValidationBootstrap(document.getElementById("email"), "is-invalid")
      setValidationBootstrap(document.getElementById("password"), "is-invalid")
      cleanValue(password);
    }
});

function changeLogin(user){
  if (localStorage.getItem("users")) {
    var users=JSON.parse(localStorage.getItem("users"))
  }

  for (let i = 0; i < users.length; i++) {
    if (user.email==users[i].email) {
      users[i].online=1
      var stringUsers=JSON.stringify(users)
      localStorage.setItem("users",stringUsers)
    }
  }
}

