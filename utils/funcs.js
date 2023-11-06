import { Driver } from "../classes/driver.js";

export function inputInvalid(element) {
  element.addEventListener("blur", () => {
    element.className = "form-control is-invalid";
  });
}

export function checkByPattern(partternRegex, value) {
  return partternRegex.test(value);
}

export function sendNotification(message, type) {
  
  let newDiv = document.createElement("div");
  let newP = document.createElement("p");

  newP.innerHTML = message;
  newDiv.setAttribute("class", type);
  newDiv.appendChild(newP);

  let divNot = document.getElementById("notification");

  divNot.appendChild(newDiv);

  // document.insertBefore(divNot, newDiv);
}

export function checkEqualValues(value1, value2) {
  return value1 == value2;
}


export function getLocalStorage(key){
   let local = localStorage.getItem(key)
   return JSON.parse(local)
}

export function setLocalStorate(key, setValue){
  var localParse = JSON.stringify(setValue)
  localStorage.setItem(key, localParse)
}
export function empty(num) {
  return num.length==0
}

export function cleanValue(element){
  console.log(element.value)
  return element.value=''
}

export function numChars(strValue){
  return strValue.length
}

export function setValidationBootstrap(value, validation){
  value.setAttribute("class", "form-control "+ validation)
}

export function drivers(){
      var arrDrivers = [
        new Driver(1, "Alexander Albon", "Tailandés","test","Titular", "/assets/drivers/alexander-albon.jpg"),
        new Driver(2, "Carlos Sainz", "Español","badr","Libre", "../assets/drivers/carlos-sainz.jpg"),
        new Driver(3, "Charles Leclerc", "Monegasco","test2","Libre", "../assets/drivers/charles-leclerc.jpg"),
        new Driver(4, "Esteban Ocon", "Francés","badr","Libre", "../assets/drivers/esteban-ocon.jpg"),
        new Driver(5, "Fernando Alonso", "Español","badr","Titular", "../assets/drivers/fernando-alonso.jpg"),
        new Driver(6, "George Russell", "Británico","test","Libre", "../assets/drivers/george-russell.jpg"),
        new Driver(7, "Guanyu Zhou", "Chino","test","Libre", "../assets/drivers/guanyu-zhou.jpg"),
        new Driver(8, "Kevin Magnussen", "Dinamarqués","","Libre", "../assets/drivers/kevin-magnussen.jpg"),
        new Driver(9, "Lance Stroll", "Canadiense","test","Libre", "../assets/drivers/lance-stroll.jpg"),
        new Driver(10, "Lando Norris", "Británico","test","Suplente", "../assets/drivers/lando-norris.jpg"),
        new Driver(11, "Lewis Hamilton", "Británico","test","Libre", "../assets/drivers/lewis-hamilton.jpg"),
        new Driver(12, "Logan Sargeant", "Estadounidense","test","Titular", "../assets/drivers/logan-sargeant.jpg"),
        new Driver(13, "Max Verstappen", "Neerlandés","","Libre", "../assets/drivers/max-verstappen.jpg"),
        new Driver(14, "Nico Hulkenberg", "Alemán","test","Libre", "../assets/drivers/nico-hulkenberg.jpg"),
        new Driver(15, "Nyck de Vries", "Neerlandés","test","Libre", "../assets/drivers/nyck-de-vries.jpg"),
        new Driver(16, "Oscar Piastri", "Australiano","test","Suplente", "../assets/drivers/oscar-piastri.jpg"),
        new Driver(17, "Pierre Gasly", "Francés","","Libre", "../assets/drivers/pierre-gasly.jpg"),
        new Driver(18, "Sergio Perez", "Mexicano","test","Libre", "../assets/drivers/sergio-perez.jpg"),
        new Driver(19, "Valtteri Bottas", "Finlandés","test","Suplente", "../assets/drivers/valtteri-bottas.jpg"),
        new Driver(20, "Yuki Tsunoda", "Japonés","test","Libre", "../assets/drivers/yuki-tsunoda.jpg")
    ];

    return arrDrivers
  } 


  export function findUser(nickname){
    let arrUsers = getLocalStorage("users")
    
    if(arrUsers){
      let i = 0
      while (i<arrUsers.length){
        if(arrUsers[i].nick == nickname){
          return arrUsers[i].nick
        }
        i++
      }
    }
  }

export function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}
  
