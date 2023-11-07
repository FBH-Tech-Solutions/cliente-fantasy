import { Race } from "../classes/ClassRace.js";
import { races } from "../utils/default.js"
import { navbar } from "../utils/componentes.js"
import { setLocalStorate, getLocalStorage, drivers, sendNotification } from "../utils/funcs.js";
import { getRandomInt } from "../utils/funcs.js"


let cardImage = document.getElementById("cardImage")
let cardtitle = document.getElementById("cardTitle")
let cardtext = document.getElementById("cardText")
let card = document.getElementById("card")
let btnLaunch = document.getElementById("btn-launch")

navbar()

btnLaunch.addEventListener('click', function(){

    let arrDrivers = null
    let i = 0
    let arrNum = new Array
    
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
while(j<race.length && check){
    
    if(!race[j].isActive){
        race[j].isActive = true
        check = false
        console.log(race[j])
    }
    
    j++
}


setLocalStorate("races", race)

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

