import { Race } from "../classes/ClassRace.js";
import { newsDefault, races } from "../utils/default.js";
import { footer, navbar } from "../utils/componentes.js";
import {
  setLocalStorate,
  getLocalStorage,
  drivers,
  sendNotification,
  foundLoged,
} from "../utils/funcs.js";
import { getRandomInt } from "../utils/funcs.js";
import { New } from "../classes/ClassNews.js";
import CanvasConfetti from "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/+esm";

let cardImage = document.getElementById("cardImage");
let cardtitle = document.getElementById("cardTitle");
let cardtext = document.getElementById("cardText");
let card = document.getElementById("card");
let btnLaunch = document.getElementById("btn-launch");
let progresBar = document.getElementById("progress-bar");
let progres = document.getElementById("progress");


navbar(foundLoged());
footer();

btnLaunch.addEventListener("click", function () {
    progres.removeAttribute("hidden")
  let arrDrivers = null;
  let i = 0;
  let arrNum = new Array();
  let aux = [];

  //Check empty localStorage of drivers
  if (getLocalStorage("drivers")) {
    arrDrivers = getLocalStorage("drivers");
  } else {
    arrDrivers = drivers();
  }

  //function to set points random for drivers
  while (i < arrDrivers.length) {
    let rand = getRandomInt(arrDrivers.length);

    if (arrNum[rand] == null) {
      if (i == 0) {
        arrDrivers[rand].points += 25;
        aux.push(arrDrivers[rand]);
      } else if (i == 1) {
        arrDrivers[rand].points += 18;
        aux.push(arrDrivers[rand]);
      } else if (i == 2) {
        arrDrivers[rand].points += 15;
        aux.push(arrDrivers[rand]);
      } else {
        arrDrivers[rand].points += getRandomInt(7);
      }

      arrNum[rand]++;
    } else {
      i--;
    }

    i++;
  }

  //save the new points
  setLocalStorate("drivers", arrDrivers);

  card.setAttribute("hidden", true);

  let k = 0;
  while (k < 110) {
    (function (k) {
      setTimeout(function () {
        progresBar.textContent = `${k}%`;
        progresBar.style.width = `${k}%`;
      }, 82 * k);
    })(k);
    k = k + 10;
  }

  let y = 0;

  console.log(aux);
    let aux1 = aux[0];
    aux[0] = aux[1];
    aux[1] = aux1;

  console.log(aux);

  console.log(k)
  if(k==110){

      while (y < aux.length) {
          // card.removeAttribute("style")
          let imgDriver = document.getElementById("car-drivers");
    // aux[y].sumPoints()
    let test = "m-5"
    let size = "12rem"
    if(y==1){
        test = "m-1"
        size="15rem"
    }
    imgDriver.innerHTML += `
    <div class="card ${test}" style="width: ${size};">
    <img src="${aux[y].img}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${aux[y].name}</h5>
    <p class="card-text">Points: ${aux[y].points}</p>
    </div>
    </div>
    `;
    cardImage.setAttribute("src", aux[y].img);
    cardtitle.textContent = aux[y].name;
    
    y++;
}
}

aux1 = aux[1];
aux[1] = aux[0];
aux[0] = aux1;

  let race = null;

  if (getLocalStorage("races")) {
    race = getLocalStorage("races");
  } else {
    race = races;
  }

  let j = 0;

  let check = true;
  let aux2 = 0;
  while (j < race.length && check) {
    if (!race[j].isActive) {
      race[j].isActive = true;
      aux2 = j;
      check = false;
    }

    j++;
  }

  setLocalStorate("races", race);

  let addNew = new New(
    aux[0].img,
    "The winner of " + race[aux2].name,
    aux[0].name
  );

  let news = getLocalStorage("news");
  if (news != null) {
    news.push(addNew);
    setLocalStorate("news", news);
  } else {
    news = newsDefault;
    news.push(addNew);
    setLocalStorate("news", news);
  }

  setTimeout(() => {
    CanvasConfetti();
    CanvasConfetti();
    CanvasConfetti();
    CanvasConfetti();
  }, 9000);
});

//function to load obj for card
let race = null;

if (getLocalStorage("races")) {
  race = getLocalStorage("races");
} else {
  race = races;
}

let i = 0;
let check = true;
while (i < race.length && check) {
  if (!race[i].isActive) {
    cardImage.setAttribute("src", race[i].image);
    cardtitle.textContent = race[i].name;
    cardtext.textContent = race[i].description;

    check = false;
  }

  i++;
}

if (check) {
  sendNotification("No more races", "alert alert-danger");
  card.remove();
}
