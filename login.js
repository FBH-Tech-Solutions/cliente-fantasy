import { findUserFromEmail, getLocalStorage, sendNotification, setLocalStorate, setValidationBootstrap } from './utils/funcs.js';
import { checkByPattern } from './utils/funcs.js';
import { empty } from './utils/funcs.js';
import { cleanValue } from './utils/funcs.js';
var EXcheckEmail = /^[\w-\.]+@([\w-]+\.)+[a-z]{3,4}$/;
var EXcheckPassword = /^(?=.*[*#$.])(?!.*\s)[*#$.\w]{6,12}$/;

document.getElementById("submit").addEventListener("click", () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password");

    var user=findUserFromEmail(email)
 
    if (empty(email) || !checkByPattern(EXcheckEmail, email)) {
      sendNotification("Email is empty or not well formed", "alert alert-danger")
      setValidationBootstrap(document.getElementById("email"), "is-invalid")
    } else if (empty(password.value) || checkByPattern(EXcheckPassword, password.value)) {
      sendNotification("Password is empty or not well formed", "alert alert-danger")
      setValidationBootstrap(document.getElementById("password"), "is-invalid")
      cleanValue(password);
    } else if (email == user.email && password.value == user.pass) {

      user.login()
      changeLogin(user)
      location.href = "./home/index.html";
    } else {
      setValidationBootstrap(document.getElementById("email"), "is-invalid")
      setValidationBootstrap(document.getElementById("password"), "is-invalid")
      cleanValue(password);
    }
});

function changeLogin(user){
  var users=getLocalStorage("users")

  let i = 0
  let check = true
  user.login()
  while(i<users.length && check){
    if (users[i].nick == user.nick) {
      users[i] = user
        check =  false
    }
    i++
  }
  setLocalStorate("users",users)

}

