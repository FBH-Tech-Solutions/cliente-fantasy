import { Driver } from "../classes/driver.js";
import { User } from "../classes/user.js";

export function inputInvalid(element) {
  element.addEventListener("blur", () => {
    element.className = "form-control is-invalid";
  });
}

export function checkByPattern(partternRegex, value) {
  return partternRegex.test(value);
}

export function sendNotification(message, type) {
  let notification = document.getElementById("notification");

  let getNoti = document.getElementById("noti");

  let newP = null;

  if (!getNoti) {
    newP = document.createElement("p");
    newP.setAttribute("id", "noti");
  } else {
    newP = getNoti;
  }
  notification.setAttribute("class", type);
  notification.appendChild(newP);
  newP.innerHTML = message;

}

export function checkEqualValues(value1, value2) {
  return value1 == value2;
}

export function getLocalStorage(key) {
  let local = localStorage.getItem(key);
  return JSON.parse(local);
}

export function setLocalStorate(key, setValue) {
  var localParse = JSON.stringify(setValue);
  localStorage.setItem(key, localParse);
}
export function empty(num) {
  return num.length == 0;
}

export function cleanValue(element) {
  return (element.value = "");
}

export function numChars(strValue) {
  return strValue.length;
}

export function setValidationBootstrap(value, validation) {
  value.setAttribute("class", "form-control " + validation);
}

export function drivers() {
  var arrDrivers = [
    new Driver(
      1,
      "Alexander Albon",
      "Thai",
      "Available",
      "None",
      "/assets/drivers/alexander-albon.jpg"
    ),
    new Driver(
      2,
      "Carlos Sainz",
      "Spanish",
      "Available",
      "None",
      "../assets/drivers/carlos-sainz.jpg"
    ),
    new Driver(
      3,
      "Charles Leclerc",
      "Monegasque",
      "Available",
      "None",
      "../assets/drivers/charles-leclerc.jpg"
    ),
    new Driver(
      4,
      "Esteban Ocon",
      "French",
      "Available",
      "None",
      "../assets/drivers/esteban-ocon.jpg"
    ),
    new Driver(
      5,
      "Fernando Alonso",
      "Spanish",
      "Available",
      "None",
      "../assets/drivers/fernando-alonso.jpg"
    ),
    new Driver(
      6,
      "George Russell",
      "British",
      "Available",
      "None",
      "../assets/drivers/george-russell.jpg"
    ),
    new Driver(
      7,
      "Guanyu Zhou",
      "Chinese",
      "Available",
      "None",
      "../assets/drivers/guanyu-zhou.jpg"
    ),
    new Driver(
      8,
      "Kevin Magnussen",
      "Danish",
      "Available",
      "None",
      "../assets/drivers/kevin-magnussen.jpg"
    ),
    new Driver(
      9,
      "Lance Stroll",
      "Canadian",
      "Available",
      "None",
      "../assets/drivers/lance-stroll.jpg"
    ),
    new Driver(
      10,
      "Lando Norris",
      "British",
      "Available",
      "None",
      "../assets/drivers/lando-norris.jpg"
    ),
    new Driver(
      11,
      "Lewis Hamilton",
      "British",
      "Available",
      "None",
      "../assets/drivers/lewis-hamilton.jpg"
    ),
    new Driver(
      12,
      "Logan Sargeant",
      "American",
      "Available",
      "None",
      "../assets/drivers/logan-sargeant.jpg"
    ),
    new Driver(
      13,
      "Max Verstappen",
      "Dutch",
      "Available",
      "None",
      "../assets/drivers/max-verstappen.jpg"
    ),
    new Driver(
      14,
      "Nico Hulkenberg",
      "German",
      "Available",
      "None",
      "../assets/drivers/nico-hulkenberg.jpg"
    ),
    new Driver(
      15,
      "Nyck de Vries",
      "Dutch",
      "Available",
      "None",
      "../assets/drivers/nyck-de-vries.jpg"
    ),
    new Driver(
      16,
      "Oscar Piastri",
      "Australian",
      "Available",
      "None",
      "../assets/drivers/oscar-piastri.jpg"
    ),
    new Driver(
      17,
      "Pierre Gasly",
      "French",
      "Available",
      "None",
      "../assets/drivers/pierre-gasly.jpg"
    ),
    new Driver(
      18,
      "Sergio Perez",
      "Mexican",
      "Available",
      "None",
      "../assets/drivers/sergio-perez.jpg"
    ),
    new Driver(
      19,
      "Valtteri Bottas",
      "Finnish",
      "Available",
      "None",
      "../assets/drivers/valtteri-bottas.jpg"
    ),
    new Driver(
      20,
      "Yuki Tsunoda",
      "Japanese",
      "Available",
      "None",
      "../assets/drivers/yuki-tsunoda.jpg"
    ),    
  ];

  return arrDrivers;
}

export function findUser(nickname) {
  let arrUsers = getLocalStorage("users");

  if (arrUsers) {
    let i = 0;
    while (i < arrUsers.length) {
      if (arrUsers[i].nick == nickname) {
        return arrUsers[i].nick;
      }
      i++;
    }
  }
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function findUserFromEmail(email) {
  let arrUsers = getLocalStorage("users");

  if (arrUsers) {
    let i = 0;
    while (i < arrUsers.length) {
      if (arrUsers[i].email == email) {
        return new User(
          arrUsers[i].nick,
          arrUsers[i].name,
          arrUsers[i].surnames,
          arrUsers[i].email,
          arrUsers[i].pass,
          arrUsers[i].points,
          arrUsers[i].online,
          arrUsers[i].myDrivers
        );
      }
      i++;
    }
  }
}

export function foundLoged() {
  let users = getLocalStorage("users");
  let i = 0;
  while (i < users.length) {
    if (users[i].online == 1) {
      return new User(
        users[i].nick,
        users[i].name,
        users[i].surnames,
        users[i].email,
        users[i].pass,
        users[i].points,
        users[i].online,
        users[i].myDrivers
      );
      
    }
    i++;
  }
}

export function logoutUser(user) {
  let btnlogout = document.getElementById("logout");
  if (btnlogout) {
    btnlogout.addEventListener("click", function () {
      let users = getLocalStorage("users");
      user.logout();

      let i = 0;
      let check = true;
      while (i < users.length && check) {
        if (users[i].nick == user.nick) {
          users[i] = user;
          check = false;
        }
        i++;
      }
      setLocalStorate("users", users);
      window.location.href = "/"
    });
  }
}
