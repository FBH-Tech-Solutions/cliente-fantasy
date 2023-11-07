import { navbar } from "../utils/componentes.js";
import { User } from "../classes/user.js";
import { getLocalStorage } from "../utils/funcs.js";

var users=getLocalStorage("users")


function loadRanking(){
    users.sort((a,b)=>b.points - a.points);
    for (let i = 0; i < 3; i++) {
        var user = new User (users[i].nick,users[i].name,users[i].surnames,users[i].email,users[i].pass,users[i].points,users[i].online,users[i].myDrivers);
        console.log(user)
        var nick = document.getElementById(`nick${i + 1}`);
        var score = document.getElementById(`score${i + 1}`);
        
        nick.textContent = user.nick;
        var points=user.sumPoints(users[i].myDrivers[0],users[i].myDrivers[1]);
        console.log(points)
        score.textContent = user.sumPoints();
    }
}

loadRanking();
navbar()