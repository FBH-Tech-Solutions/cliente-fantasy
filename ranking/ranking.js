import { footer, navbar } from "../utils/componentes.js";
import { User } from "../classes/user.js";
import { getLocalStorage } from "../utils/funcs.js";


var users=getLocalStorage("users")


function loadRanking(){
    users.sort((a,b)=>b.points - a.points);

    let arrDrivers = getLocalStorage("drivers")
    for (let i = 0; i < users.length; i++) {
        let j = 0
        while(j<arrDrivers.length){
                if(arrDrivers[j].id == users[i].myDrivers[0].id ){
                    users[i].myDrivers[0] = arrDrivers[j]

                }
                if(arrDrivers[j].id == users[i].myDrivers[1].id ){
                    
                    users[i].myDrivers[1] = arrDrivers[j]
                }
            j++
        }
        var user = new User (users[i].nick,users[i].name,users[i].surnames,users[i].email,users[i].pass,users[i].points,users[i].online,users[i].myDrivers);
        var nick = document.getElementById(`nick${i + 1}`);
        var score = document.getElementById(`score${i + 1}`);
        

        nick.textContent = user.nick;

        var points=user.sumPoints();
        score.textContent = user.sumPoints();
    }
}

loadRanking();
navbar()
footer()