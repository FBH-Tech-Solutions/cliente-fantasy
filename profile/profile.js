import { footer, navbar } from "../utils/componentes.js";
import { empty, findUserFromEmail, foundLoged, sendNotification,setValidationBootstrap } from "../utils/funcs.js";

navbar(foundLoged());

var buttonSave=document.getElementById('saveChange')
var buttonChange=document.getElementById('changePassword')
var name=document.getElementById('name');
var surname=document.getElementById('surname')
var nick=document.getElementById('nickname')
var email=document.getElementById('email')
var password=document.getElementById('password')
let formSave = document.getElementById("formSave")
let formChange=document.getElementById("formChange")
let patterName = /^[a-zA-Z]{2,20}$/;
let patterSurName = /^[a-zA-Z]{2,30}$/;
let patternMail = /^[\w-\.]+@([\w-\.]{3,15})+[\w-]{2,8}$/;
let patternPass = /^[a-zA-Z0-9\-.*#$]{6,10}$/;
var user=foundLoged()

formSave.addEventListener('input', function(){
  buttonSave.removeAttribute("disabled", true)
  buttonSave.addEventListener('click',function(){
      var users=localStorage.getItem("users")
      var checkEmpty=checkEmptyValues(name,surname,email)
      if (checkEmpty[0]<5) {
          if (users) {
              if (findUserFromEmail(users,email.value)) {
                  sendNotification("This email is used","aler alert-danger")
              }else{
                  var checkPattern=checkPatternValues(patterName,patterSurName,patternMail,name,surname,email)
                  if (checkPattern[0]<5) {
                    saveData()
                    sendNotification("Edited User!", "alert alert-success");
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
})

formChange.addEventListener('input',function(){
  buttonChange.removeAttribute("disabled", true)
})

  buttonChange.addEventListener('click', function(){
    if(empty(password.value)&&patternPass.test(password.value)){
    }else{
      if (password.value==user.pass) {
      }else{
        saveChange()
        sendNotification("Edited Password!", "alert alert-success");
      }
    }
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

  function loadData(){
    var users=JSON.parse(localStorage.getItem("users"))
    for (let i = 0; i < users.length; i++) {
      if (user.nick==users[i].nick) {
        name.value=user.name
        surname.value=user.surnames
        nick.value=user.nick
        email.value=user.email
      }
    }
  }

  function saveData(){
    if (localStorage.getItem("users")) {
      var users=JSON.parse(localStorage.getItem("users"))
    }
  
    for (let i = 0; i < users.length; i++) {
      if (user.nick==users[i].nick) {
        users[i].name=name.value
        users[i].surnames=surname.value
        users[i].email=email.value
        var stringUsers=JSON.stringify(users)
        localStorage.setItem("users",stringUsers)
      }
    }
  }

  function saveChange(){
    if (localStorage.getItem("users")) {
      var users=JSON.parse(localStorage.getItem("users"))
    }
  
    for (let i = 0; i < users.length; i++) {
      if (user.nick==users[i].nick) {
        users[i].pass=password.value
        var stringUsers=JSON.stringify(users)
        localStorage.setItem("users",stringUsers)
      }
    }
  }

loadData()
footer()