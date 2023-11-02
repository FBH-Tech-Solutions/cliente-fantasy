export class User {
  constructor(nick, name, surnames, email, pass) {
    this.nick = nick;
    this.name = name;
    this.surnames = surnames;
    this.email = email;
    this.pass = pass;
    this.points=0;
    this.online = 0;
    this.myDrivers = [];
  }

  login() {
    this.login = 1;
  }
  logout() {
    this.login = 0;
  }

  setDriver(index, idDriver) {
    this.myDrivers.splice(index, idDriver, index);
  }

  deleteDriver(index) {
    this.myDrivers.splice(index, 1);
  }
}
