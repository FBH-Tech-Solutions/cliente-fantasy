import { getLocalStorage, inputInvalid, sendNotification } from './utils/funcs.js';
import { checkByPattern } from './utils/funcs.js';
import { empty } from './utils/funcs.js';
import { cleanValue } from './utils/funcs.js';
var EXcheckEmail = /^[\w-\.]+@([\w-\.]{3,15})+[\w-]{2,8}$/;
var EXcheckPassword = /^(?=.*[*#$.])(?!.*\s)[*#$.\w]{6,12}$/;

document.getElementById("submit").addEventListener("click", () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password");
  var users = getLocalStorage("users");

  for (let i = 0; i < users.length; i++) {
    var user = users[i];
    if (empty(email) || !checkByPattern(EXcheckEmail, email)) {
      // El correo está vacío o no cumple con el patrón
      sendNotification("Email is empty or not well formed", "alert alert-danger")
    } else if (empty(password.value) || checkByPattern(EXcheckPassword, password.value)) {
      // La contraseña está vacía o no cumple con el patrón
      sendNotification("Password is empty or not well formed", "alert alert-danger")
      cleanValue(password);
    } else if (email == user.email && password.value == user.pass) {
      location.href = "signup/index.html";
      // Las credenciales coinciden, redirige a la página de inicio de sesión.
    } else {
      // Las credenciales no coinciden, realiza alguna acción como mostrar un mensaje de error.
      cleanValue(password);
    }
  }
});

