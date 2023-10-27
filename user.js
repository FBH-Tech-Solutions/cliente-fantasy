import { inputInvalid } from './uax/funcs.js';
import { checkByPattern } from './uax/funcs.js';
import { empty } from './uax/funcs.js';
import { cleanValue } from './uax/funcs.js';

var EXcheckEmail=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var EXcheckPassword=/^(?=.*[*#$.])(?!.*\s)[*#$.\w]{6,12}$/;


var pwd='admin123';
var correo='user@gmail.com'

document.getElementById('submit').addEventListener("click", () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (!empty(email) && !checkByPattern(EXcheckEmail,email)) {
        //El correo esta vacio o no esta bien el arroba
    }else{
        if (empty(password) && checkByPattern(EXcheckPassword,password)) {
            //La contraseña esta vacia o la contraseña es muy corta
        }else{
            if (password==pwd && email==correo) {
                location.href='signup/index.html'
            }else{
                //No ha podido iniciar sesion
                cleanValue(email)
                cleanValue(password)
            }
        }
    }
})


