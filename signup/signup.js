import { User } from "../uax/user.js";
import { checkByPattern } from "../uax/funcs.js";
import { sendNotification } from "../uax/funcs.js";
import {checkEqualValues} from "../uax/funcs.js";
import { getLocalStorage } from "../uax/funcs.js"

// nick, name, surnames, email, pass
let name = document.getElementById("name");
let surnames = document.getElementById("surname");
let nick = document.getElementById("nickname");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let pass2 = document.getElementById("passwordConfirm");
let btnSubmit = document.getElementById("btn-submit");
let getUsers = localStorage.getItem("users");


btnSubmit.addEventListener("click", function () {
  // let users = getUserLocal();
  if (true) {
    // if (findUser(users, nick.value)) {
    //     sendNotification("Nickname is used","alert alert-danger")
    // } else {
      if(pass.value==pass2.value){
        saveUserLocal()
        sendNotification("User created!","alert alert-success")
      }else{
        sendNotification("Password does not match","alert alert-danger")
      }
    // }
  } else {
    sendNotification("User created!","alert alert-success")
  }
});


console.log(getUserLocal())
function getUserLocal() { 
  let users = getLocalStorage("users")
  if (users != null) {
    return users;
  } else {
    return false;
  }
}

function saveUserLocal() {
  
  let arrUsers = [];

  if(localStorage.getItem("users")){
      arrUsers = JSON.parse(localStorage.getItem("users"));
  }

  let user = new User(
    nick.value,
    name.value,
    surnames.value,
    email.value,
    pass.value
  );
  
  console.log(user)
  arrUsers.push(user);
  let stringArr = JSON.stringify(arrUsers);
  localStorage.setItem("users", stringArr);
}

function findUser(arrUsers, nickname) {
  let i = 0;
  let aux = 0;
  let exit = true;
  while (i < arrUsers.length && exit) {
    if (arrUsers[i].nick == nickname) {
      exit = false;
      aux = i;
    }
    i++;
  }

  if (!exit) {
    return arrUsers[aux];
  } else {
    return false;
  }
}

function createUser(){
    const checkMail = /^[\w-\.]+@([\w-\.]{3,15})+[\w-]{2,8}$/;
    saveUserLocal();
}