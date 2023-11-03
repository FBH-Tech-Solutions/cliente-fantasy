import { inputInvalid } from './utils/funcs.js';
import { checkByPattern } from './utils/funcs.js';
import { empty } from './utils/funcs.js';
import { cleanValue } from './utils/funcs.js';

var EXcheckPassword = /^(?=.*[*#$.])(?!.*\s)[*#$.\w]{6,12}$/;
var pwd = "admin123";
var correo = "user@gmail.com";

document.getElementById("submit").addEventListener("click", () => {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (empty(email) && !checkByPattern(EXcheckEmail, email.value)) {
    //El correo esta vacio o no esta bien el arroba
  } else {
    if (empty(password) && checkByPattern(EXcheckPassword, password.value)) {
      //La contraseña esta vacia o la contraseña es muy corta
    } else {
      if (password == pwd && email == correo) {
        location.href = "signup/index.html";
      } else {
        //No ha podido iniciar sesion
        cleanValue(email);
        cleanValue(password);
      }
    }
  }
});
