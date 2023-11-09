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
    this.online = 1;
  }
  logout() {
    this.online = 0;
  }

  setDriver(index, idDriver) {
    this.myDrivers.splice(index, idDriver, index);
  }

  deleteDriver(index) {
    this.myDrivers.splice(index, 1);
  }

  sumPoints() {

    var driver1=this.myDrivers[0].points
    var driver2=this.myDrivers[1].points
    
    this.points =  driver1+driver2
  }
}
