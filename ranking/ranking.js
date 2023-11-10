import { footer, navbar } from "../utils/componentes.js";
import { User } from "../classes/user.js";
import { foundLoged, getLocalStorage, sendNotification } from "../utils/funcs.js";

navbar(foundLoged());

let tema = null
let color = getLocalStorage("color")
if(color=="white"){
   tema = "table table-striped text-center"

}else if(color=="dark" || color == null){
  tema = "table table-striped table-dark text-center"
}

document.getElementById("table").setAttribute("class", tema)


function loadRanking(){
    var users=getLocalStorage("users")
    if(users){
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
            console.log(users[i].surnames)
            var user = new User (users[i].nick,users[i].name,users[i].surnames,users[i].email,users[i].pass,users[i].points,users[i].online,users[i].myDrivers);
            user.sumPoints()
            var x=0
            while (x<users.length) {
                console.log("llego") 
                if (users[x].nick==user.nick) {
                    users[x].points=user.points
                }
                x++
            }
            // console.log(users)
            let stringArr = JSON.stringify(users);
            localStorage.setItem("users", stringArr);
        }
    }else{
        sendNotification("No users","alert alert-danger")
    }

    users=users.sort((a,b)=>b.points - a.points);

    for (let i = 0; i < users.length; i++) {
        
        var nick = document.getElementById(`nick${i + 1}`);
        var score = document.getElementById(`score${i + 1}`);
        nick.textContent = users[i].nick;
        score.textContent = users[i].points;

    }
}

loadRanking();
footer()
