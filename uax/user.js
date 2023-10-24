export class User {
    constructor(nick, name, surnames, email, pass) {
    this.nick = nick;
    this.name = name;
    this.surnames = surnames;
    this.email = email;
    this.pass = pass
  } 

}

// export function checkLocalStorage() {
//     var data = localStorage.getItem("user");
//     if (data != null) {
//       var c = JSON.parse(data);
//       var cuenta = new Banco(c.iban, c.saldo);
//     } else {
//       var cuenta = new Banco("ES21 1465 0100 72 2030876293", 500);
//     }
// }

// export function stablishUser(User) {
//     var c = JSON.stringify(user);
//     localStorage.setItem("user", c);
// }