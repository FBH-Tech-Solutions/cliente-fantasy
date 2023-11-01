import { formProfile } from "../uax/componentes.js";
import { navbar } from "../uax/componentes.js";
import { Driver } from "../uax/driver.js";
import { setLocalStorate } from "../uax/funcs.js";

var drivers = [
    new Driver(1, "Alexander Albon", "Tailandés",2,"Titular", "/assets/drivers/alexander-albon.jpg"),
    new Driver(2, "Carlos Sainz", "Español",0,"Libre", "../assets/drivers/carlos-sainz.jpg"),
    new Driver(3, "Charles Leclerc", "Monegasco",0,"Libre", "../assets/drivers/charles-leclerc.jpg"),
    new Driver(4, "Esteban Ocon", "Francés",0,"Libre", "../assets/drivers/esteban-ocon.jpg"),
    new Driver(5, "Fernando Alonso", "Español",1,"Titular", "../assets/drivers/fernando-alonso.jpg"),
    new Driver(6, "George Russell", "Británico",0,"Libre", "../assets/drivers/george-russell.jpg"),
    new Driver(7, "Guanyu Zhou", "Chino",0,"Libre", "../assets/drivers/guanyu-zhou.jpg"),
    new Driver(8, "Kevin Magnussen", "Dinamarqués",0,"Libre", "../assets/drivers/kevin-magnussen.jpg"),
    new Driver(9, "Lance Stroll", "Canadiense",0,"Libre", "../assets/drivers/lance-stroll.jpg"),
    new Driver(10, "Lando Norris", "Británico",2,"Suplente", "../assets/drivers/lando-norris.jpg"),
    new Driver(11, "Lewis Hamilton", "Británico",0,"Libre", "../assets/drivers/lewis-hamilton.jpg"),
    new Driver(12, "Logan Sargeant", "Estadounidense",3,"Titular", "../assets/drivers/logan-sargeant.jpg"),
    new Driver(13, "Max Verstappen", "Neerlandés",0,"Libre", "../assets/drivers/max-verstappen.jpg"),
    new Driver(14, "Nico Hulkenberg", "Alemán",0,"Libre", "../assets/drivers/nico-hulkenberg.jpg"),
    new Driver(15, "Nyck de Vries", "Neerlandés",0,"Libre", "../assets/drivers/nyck-de-vries.jpg"),
    new Driver(16, "Oscar Piastri", "Australiano",3,"Suplente", "../assets/drivers/oscar-piastri.jpg"),
    new Driver(17, "Pierre Gasly", "Francés",0,"Libre", "../assets/drivers/pierre-gasly.jpg"),
    new Driver(18, "Sergio Perez", "Mexicano",0,"Libre", "../assets/drivers/sergio-perez.jpg"),
    new Driver(19, "Valtteri Bottas", "Finlandés",1,"Suplente", "../assets/drivers/valtteri-bottas.jpg"),
    new Driver(20, "Yuki Tsunoda", "Japonés",0,"Libre", "../assets/drivers/yuki-tsunoda.jpg")
];






setLocalStorate('arrDrivers',drivers)
navbar()
formProfile()
