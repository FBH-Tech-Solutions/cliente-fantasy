import { User } from "../classes/user.js";
import { checkByPattern, drivers, getRandomInt, setLocalStorate } from "../utils/funcs.js";
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
let patterName = /^[a-zA-Z-\s]{2,20}$/;
let patterSurName = /^[a-zA-Z-\s]{2,30}$/;
let patternMail = /^[\w-\.]+@([\w-]+\.)+[a-z]{3,4}$/;
let patterNickName = /^[\w-\.]{4,10}$/;
let patternPass = /^[a-zA-Z0-9\-.*#$]{6,10}$/;

var arrayDrivers=drivers()
var driversAvailable=drivers()

addBots()

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
            arrCh[2].forEach((element) => {
              setValidationBootstrap(
                document.getElementById(element),
                "is-valid"
              );
            });
            saveUserLocal();
            sendNotification("User created!", "alert alert-success");
            setTimeout(function(){
              window.location.href = "/"
            },5000)
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
  var driversArray=addDrivers(name.value)
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

function addDrivers(owner){
  var drivers=[];
  for (let i = 0; i < 2; i++) {
    var rand=getRandomInt(driversAvailable.length)
    if (driversAvailable[rand]!=null) {
      if (i==0) {
        arrayDrivers[rand].rol="Main"
        driversAvailable[rand].rol="Main"
        driversAvailable[rand].owner=owner
      }
      if (i==1) {
        arrayDrivers[rand].rol="Substitute"
        driversAvailable[rand].rol="Substitute"
        driversAvailable[rand].owner=owner
      }
      drivers.push(driversAvailable[rand])
      driversAvailable.splice(rand, 1);
      arrayDrivers[rand].owner=owner
      console.log(arrayDrivers[rand].owner)
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

function addBots() {
  var bots=getLocalStorage("bots")
  var users=getLocalStorage("users")
  if (bots==null) {
    var arrayBots=[]
    var user1 = new User("SpeedRacer", "Jack", "Johnson", "jack@email.com", "pass123", 0, 0);
    var user3 = new User("TurboChamp", "Alex", "Anderson", "alex@email.com", "topSecret", 0, 0);
    var user2 = new User("SwiftRunner", "Emily", "Evans", "emily@email.com", "securePass", 0, 0);
    var user5 = new User("VelocityPro", "Ryan", "Roberts", "ryan@email.com", "racing123", 0, 0);
    var user4 = new User("GearMaster", "Sophia", "Smith", "sophia@email.com", "p@ssw0rd", 0, 0);
    var user7 = new User("TrackStar", "Mason", "Miller", "mason@email.com", "speedster", 0, 0);
    var user6 = new User("NitroRider", "Olivia", "Owens", "olivia@email.com", "nitroPower", 0, 0);
    var user9 = new User("FlashDriver", "Ethan", "Edwards", "ethan@email.com", "quick123", 0, 0);
    var user8 = new User("RaceQueen", "Lily", "Lewis", "lily@email.com", "fastLane", 0, 0);
    var user10 = new User("TurboKid", "Ava", "Adams", "ava@email.com", "turboKid", 0, 0);
    
    var bot = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
    
    while (arrayBots.length<2) {

      var botRandom = Math.floor(Math.random() * bot.length);
      console.log(botRandom)
      var driversArray=addDrivers(bot[botRandom].name)

      if (users==null) {
        users=[]
      }

      var newBot= new User(bot[botRandom].nick,bot[botRandom].name,bot[botRandom].surnames,bot[botRandom].email,bot[botRandom].pass,bot[botRandom].points,bot[botRandom].online,driversArray)
      console.log(newBot)
      arrayBots.push(newBot)
      users.push(newBot)
      setLocalStorate("users",users)
      console.log(arrayBots)
      let stringArr = JSON.stringify(arrayBots);
      localStorage.setItem("bots", stringArr);
    }
  }else{
  }
}