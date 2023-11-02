import { navbar } from "../uax/componentes.js";
import { User } from "../uax/user.js";

const users = [
    new User("Badr", "Alfredo","Alvarez", "user@gmail.com", "admin123", 60, 1, 30),
    new User("Fran", "Alfredo","Campillo", "user@gmail.com", "admin123", 12, 0, 12),
    new User("Javier", "Alfredo","Jimeno", "user@gmail.com", "admin123", 45, 1, 45),
];


function loadRanking(){
    users.sort((a,b)=>b.points - a.points);
    for (let i = 0; i < 3; i++) {
        const user = users[i];
        const nick = document.getElementById(`nick${i + 1}`);
        const score = document.getElementById(`score${i + 1}`);
        nick.textContent = user.nick;
        score.textContent = user.points;
    }
}

loadRanking();
navbar()