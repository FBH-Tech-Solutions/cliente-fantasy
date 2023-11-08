import { Race } from "../classes/ClassRace.js";
import { newsDefault, races } from "../utils/default.js"
import { footer, navbar } from "../utils/componentes.js"
import { setLocalStorate, getLocalStorage, drivers, sendNotification } from "../utils/funcs.js";
import { getRandomInt } from "../utils/funcs.js"
import { New } from "../classes/ClassNews.js";
import CanvasConfetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/+esm';



let cardImage = document.getElementById("cardImage")
let cardtitle = document.getElementById("cardTitle")
let cardtext = document.getElementById("cardText")
let card = document.getElementById("card")
let btnLaunch = document.getElementById("btn-launch")

navbar()
footer()

btnLaunch.addEventListener('click', function(){

    let arrDrivers = null
    let i = 0
    let arrNum = new Array
    let aux = 0
    
    //Check empty localStorage of drivers
    if(getLocalStorage("drivers")){
        
        arrDrivers = getLocalStorage("drivers")
    }else{
        arrDrivers = drivers()
    }
    
    //function to set points random for drivers
    while(i<arrDrivers.length){
        let rand = getRandomInt(arrDrivers.length)
        
        if(arrNum[rand] == null){
            if(i == 0){
                arrDrivers[rand].points += 25
                aux = rand
            }else if(i == 1){
                arrDrivers[rand].points += 18
        }else if ( i == 2 ){
            arrDrivers[rand].points += 15
        }else{
            arrDrivers[rand].points += getRandomInt(7)
        }
        
        arrNum[rand]++
    }else{
        i--
    }
    
    i++
}

//save the new points
setLocalStorate("drivers", arrDrivers)

card.remove()


let race = null

if(getLocalStorage("races")){
   race = getLocalStorage("races")

}else{
    race = races
}

let j = 0

let check = true
let aux2 = 0
while(j<race.length && check){
    
    if(!race[j].isActive){
        race[j].isActive = true
        aux2 = j
        check = false

    }
    
    j++
}


setLocalStorate("races", race)



let addNew = new New(arrDrivers[aux].img, "The winner of "+race[aux2].name, arrDrivers[aux].name)

let news = getLocalStorage("news")
if(news != null){
   
    news.push(addNew)
    setLocalStorate("news", news) 
}else{
    news = newsDefault
    news.push(addNew)
    setLocalStorate("news",news) 

}

const progressBar = document.getElementById("myProgressBar");

function startProgress() {
  progressBar.style.width = "100%";
}

setTimeout(startProgress, 0); // Inicia el progreso después de 0 segundos

setTimeout(() => {

    CanvasConfetti()
    CanvasConfetti()
    CanvasConfetti()


CanvasConfetti()
}, 9000); 

})


//function to load obj for card
let race = null

if(getLocalStorage("races")){
   race = getLocalStorage("races")

}else{
    race = races
}

let i = 0
let check = true
while(i<race.length && check){
    
    if(!race[i].isActive){
        cardImage.setAttribute("src", race[i].image)
        cardtitle.textContent = race[i].name
        cardtext.textContent = race[i].description

        check = false
    }

    i++
}

if (check) {
    sendNotification("No more races","alert alert-danger")
    card.remove()
}
