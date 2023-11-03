import { navbar } from "../utils/componentes.js";
import { empty, foundLoged, sendNotification,setValidationBootstrap } from "../utils/funcs.js";

var buttonSave=document.getElementById('saveChange')
var buttonChange=document.getElementById('changePassword')
var name=document.getElementById('name');
var surname=document.getElementById('surname')
var nick=document.getElementById('nick')
var email=document.getElementById('email')
var password=document.getElementById('password')
let patterName = /^[a-zA-Z]{2,20}$/;
let patterSurName = /^[a-zA-Z]{2,30}$/;
let patternMail = /^[\w-\.]+@([\w-\.]{3,15})+[\w-]{2,8}$/;
let patternPass = /^[a-zA-Z0-9\-.*#$]{6,10}$/;

function loadData(){
  var user=foundLoged()
  name.value=user.name
  surname.value=user.surname
  nick.value=user.nick
  email.value=user.email
}

buttonSave.addEventListener('click',function(){
    var users=getUserLocal()
    var checkEmpty=checkEmptyValues(name,surname,email,password)
    if (checkEmpty[0]<5) {
        if (users) {
            if (findUser(users,nick.nick)) {
                sendNotification("This email is used","aler alert-danger")
            }else{
                var checkPattern=checkPatternValues(patterName,patterSurName,patternMail,patternPass,name,surname,email,password)
                if (checkPattern[0]<5) {
        
                }else {
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
        }
    }else {
        sendNotification(
          listEmpty(arrChecked, "Values Empty"),
          "alert alert-danger"
        );
        arrChecked[0].forEach((element) => {
          setValidationBootstrap(document.getElementById(element), "is-invalid");
        });
    }
})

buttonChange.addEventListener('click', function(){
    
})

function checkEmptyValues(name, surnames, email) {
    let arrValues = [name, surnames, email];
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
  
  function getUserLocal() {
    let users = getLocalStorage("users");
    if (users != null) {
      return users;
    } else {
      return false;
    }
  }

  function findUser(arrUsers, nick) {
    let i = 0;
    let aux = 0;
    let exit = true;
    while (i < arrUsers.length && exit) {
      if (arrUsers[i].nick == nick) {
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

  function checkPatternValues(
    patterName,
    patterSurName,
    patternMail,
    name,
    surnames,
    email
  ) {
    let arrPatterns = [
      patterName,
      patterSurName,
      patternMail,
    ];
    let arrValues = [name, surnames, email];
    let rtnErrors = [
      "The name must be between 2 and 20 characters",
      "The surname must be between 2 and 30 characters",
      "The email does not meet the requirements to be an email"
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

loadData()
navbar()