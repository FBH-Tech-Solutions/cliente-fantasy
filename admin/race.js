import { Race } from "../classes/ClassRace.js";
import { races } from "../utils/default.js"
import { navbar } from "../utils/componentes.js"
import { setLocalStorate, getLocalStorage, drivers } from "../utils/funcs.js";
import { getRandomInt } from "../utils/funcs.js"

navbar()

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

