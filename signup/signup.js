import { User } from "../classes/user.js";
import { checkByPattern, drivers, getRandomInt } from "../utils/funcs.js";
import { sendNotification } from "../utils/funcs.js";
import { checkEqualValues } from "../utils/funcs.js";
import { getLocalStorage } from "../utils/funcs.js";
import { empty } from "../utils/funcs.js";
import { numChars } from "../utils/funcs.js";
import { setValidationBootstrap } from "../utils/funcs.js";

let name = document.getElementById("name");
let surnames = document.getElementById("surname");
let nick = document.getElementById("nickname");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let pass2 = document.getElementById("passwordConfirm");
let btnSubmit = document.getElementById("btn-submit");

//patterns
let patterName = /^[a-zA-Z]{2,20}$/;
let patterSurName = /^[a-zA-Z]{2,30}$/;
let patternMail = /^[\w-\.]+@([\w-]+\.)+[a-z]{3,4}$/;
let patterNickName = /^[\w-\.]{4,10}$/;
let patternPass = /^[a-zA-Z0-9\-.*#$]{6,10}$/;

var arrayDrivers=drivers()
var driversAvailable=drivers()

btnSubmit.addEventListener("click", function () {
  let users = getUserLocal();

  let arrChecked = checkEmptyValues(name, surnames, nick, email, pass, pass2);
  if (arrChecked[0] < 6) {
      if (findUser(users, nick.value)) {
        sendNotification("Nickname is used", "alert alert-danger");
      } else {
        let arrCh = checkPatternValues(
          patterName,
          patterSurName,
          patterNickName,
          patternMail,
          patternPass,
          name,
          surnames,
          nick,
          email,
          pass,
          pass2
        );
        if (arrCh[0] < 6) {
          if (pass.value == pass2.value) {
            saveUserLocal();
            sendNotification("User created!", "alert alert-success");
          } else {
            sendNotification("Password does not match", "alert alert-danger");
          }
        } else {
          arrCh[1].forEach((element) => {
            setValidationBootstrap(
              document.getElementById(element),
              "is-invalid"
            );
          });
          arrCh[2].forEach((element) => {
            setValidationBootstrap(
              document.getElementById(element),
              "is-valid"
            );
          });

          sendNotification(
            listEmpty(arrCh, "Review the following errors"),
            "alert alert-danger"
          );
        }
      }
  } else {
    sendNotification(
      listEmpty(arrChecked, "Values Empty"),
      "alert alert-danger"
    );
    arrChecked[0].forEach((element) => {
      setValidationBootstrap(document.getElementById(element), "is-invalid");
    });
  }
});

function getUserLocal() {
  let users = getLocalStorage("users");
  if (users != null) {
    return users;
  } else {
    return false;
  }
}

function saveUserLocal() {
  let arrUsers = [];
  var driversArray=addDrivers()
  var points=0
  var online=0
  console.log(driversArray)
  
  if (localStorage.getItem("users")) {
    arrUsers = JSON.parse(localStorage.getItem("users"));
  }
  let user = new User(
    nick.value,
    name.value,
    surnames.value,
    email.value,
    pass.value,
    points,
    online,
    driversArray
  );

  console.log(user);
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

function createUser() {
  saveUserLocal();
}

function addDrivers(){
  var drivers=[];
  for (let i = 0; i < 2; i++) {
    var rand=getRandomInt(driversAvailable.length)
    if (driversAvailable[rand]!=null) {
      if (i==0) {
        arrayDrivers[rand].rol="Main"
        driversAvailable[rand].rol="Main"
        driversAvailable[rand].owner=name.value
      }
      if (i==1) {
        arrayDrivers[rand].rol="Substitute"
        driversAvailable[rand].rol="Substitute"
        driversAvailable[rand].owner=name.value
      }
      drivers.push(driversAvailable[rand])
        delete(driversAvailable[rand])
        arrayDrivers[rand].owner=name.value
      
    }
  }
  var arrayDriversStr=JSON.stringify(arrayDrivers)
  localStorage.setItem("drivers",arrayDriversStr)
  return drivers;
}

function checkEmptyValues(name, surnames, nick, email, pass, pass2) {
  let arrValues = [name, surnames, nick, email, pass, pass2];
  let emptyValues = [];
  let notEmptyValues = [];

  let i = 0;

  while (i < arrValues.length) {
    if (!empty(arrValues[i].value)) {
      notEmptyValues.push(arrValues[i].id);
    } else {
      emptyValues.push(arrValues[i].id);
    }
    i++;
  }

  let rtnArr = [emptyValues, notEmptyValues];

  return rtnArr;
}

function checkNameAndSurnames(
  checkCharsName,
  name,
  checkCharsSurName,
  surnames
) {
  let check = true;

  if (checkByPattern(checkCharsName, name)) {
    sendNotification(
      "The name must have between 2 and 20 chars",
      "alert alert-danger"
    );
    check = false;
  }

  if (checkByPattern(checkCharsSurName, surnames)) {
    sendNotification(
      "The surname must have between 2 and 30 chars",
      "alert alert-danger"
    );
    check = false;
  }

  return check;
}

function checkPatternValues(
  patterName,
  patterSurName,
  patterNickName,
  patternMail,
  patternPass,
  name,
  surnames,
  nick,
  email,
  pass,
  pass2
) {
  let arrPatterns = [
    patterName,
    patterSurName,
    patterNickName,
    patternMail,
    patternPass,
    patternPass,
  ];
  let arrValues = [name, surnames, nick, email, pass, pass2];
  let rtnErrors = [
    "The name must be between 2 and 20 characters",
    "The surname must be between 2 and 30 characters",
    'The nickname must be between 4 and 10 characters and only special characters like "_" ',
    "The email does not meet the requirements to be an email <br> example: username@foo.tld",
    "The password must be at least 6 to 12 characters long and may contain the following special characters: *,#,$",
    "The password must be at least 6 to 12 characters long and may contain the following special characters: *,#,$",
  ];

  let notPassedTest = [];
  let passedTest = [];
  let notPassedTestId = [];

  let i = 0;

  while (i < arrValues.length) {
    console.log(
      arrValues[i].value,
      ":",
      arrPatterns[i],
      ":",
      arrPatterns[i].test(arrValues[i].value)
    );
    if (arrPatterns[i].test(arrValues[i].value)) {
      passedTest.push(arrValues[i].id);
    } else {
      notPassedTest.push(rtnErrors[i]);
      notPassedTestId.push(arrValues[i].id);
    }
    i++;
  }

  let rtnArr = [notPassedTest, notPassedTestId, passedTest];

  return rtnArr;
}

function listEmpty(arrList, titleErrorMsg) {
  let i = 0;
  let rtnList = titleErrorMsg + ": <ul>";
  while (i < arrList[0].length) {
    rtnList += "<li>" + arrList[0][i] + "</li>";
    i++;
  }
  rtnList += "</ul>";
  return rtnList;
}
