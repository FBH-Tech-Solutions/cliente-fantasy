import { Race } from "../classes/ClassRace.js";
import { races } from "../utils/default.js"
import { navbar } from "../utils/componentes.js"
import { drivers } from "../utils/funcs.js";
import { getRandomInt } from "../utils/funcs.js"

navbar()
let arrDrivers = drivers()
let i = 0

let arrNum = new Array

while(i<arrDrivers.length){
    let rand = getRandomInt(arrDrivers.length)

    if(arrNum[rand] == null){
        if(i == 0){
            arrDrivers[rand].points += 30
        }else if(i == 1){
            arrDrivers[rand].points += 20
        }else if ( i == 2 ){
            arrDrivers[rand].points += 10
        }else{
            arrDrivers[rand].points += getRandomInt(9)
        }

        arrNum[rand]++
    }else{
        i--
    }

    i++
}

