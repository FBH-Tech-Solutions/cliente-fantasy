import { User } from '../uax/user.js';

// nick, name, surnames, email, pass
let name = document.getElementById("name");
let surname =  document.getElementById("surname");

let nick = document.getElementById("nick");

let email = document.getElementById("email");

let pass = document.getElementById("pass");


if(true){

    let user = new User(nick, name, surnames, email, pass)

    let user = new User()
    console.log(user)
}
