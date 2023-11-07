export class User {
  constructor(nick, name, surnames, email, pass, points,online,myDrivers) {
    this.nick = nick;
    this.name = name;
    this.surnames = surnames;
    this.email = email;
    this.pass = pass;
    this.points = points;
    this.online = online;
    this.myDrivers = myDrivers;
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

  sumPoints() {
    var driver1=this.myDrivers[1].points
    var driver2=this.myDrivers[2].points
    
    return driver1+driver2
  }
}
