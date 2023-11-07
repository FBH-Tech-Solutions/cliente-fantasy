export class Driver {
  constructor(id, name, nacionality, owner, rol, img) {
    this.id = id;
    this.name = name;
    this.nacionality = nacionality;
    this.owner = owner;
    this.rol = rol;
    this.points = 0;
    this.img = img;
  }
  setPoints(value){
    this.points = value
  }
}
