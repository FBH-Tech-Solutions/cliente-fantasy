import { User } from "../classes/user.js";
import { findUser, findUserFromEmail, getLocalStorage, logoutUser, setLocalStorate } from "./funcs.js";

export function navbar(user) {
  let newDiv = document.createElement("div");

  let checkSwitch = getLocalStorage("checked")
  if(checkSwitch == null){
	checkSwitch = "checked"
  }
  
  let colorNav = getLocalStorage("color")

  let position = null
  let collapse = null
  let darkmenu = null

  if(colorNav == null){
	position = "navbar navbar-expand-md navbar-dark bg-dark shadow-lg"
	collapse = "collapse navbar-collapse"
	darkmenu = "dropdown-menu-dark"
	setLocalStorate("colorNav","dark")
}else{
	if(colorNav == "dark"){
		position = "navbar navbar-expand-md navbar-dark bg-dark shadow-lg"
	}
	if(colorNav== "white" ){
		collapse= "nav nav-pills flex-column mb-auto"
		position = "d-flex flex-column flex-shrink-0 p-3 bg-light"
		document.getElementById("main").style = getLocalStorage("main")
	}
  }
  

  newDiv.innerHTML = `
      <nav class="${position}">
  <a class="navbar-brand py-3" href="/home">
	<img src="/assets/logoFormula1.png" height="40" alt="Company Logo">
  </a>
  <div class="">
	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	  <span class="navbar-toggler-icon"></span>
	</button>

	<div class="${collapse}" id="navbarNavDropdown">
	  <ul class="navbar-nav mx-auto">
		<li class="nav-item">
		  <a class="nav-link mx-2 " aria-current="page" href="/home">Home</a>
		</li>
		<li class="nav-item">
		  <a class="nav-link mx-2" href="/drivers">Drivers</a>
		</li>
		<li class="nav-item">
		  <a class="nav-link mx-2" href="/my-drivers">My drivers</a>
		</li>
	  <li class="nav-item">
		  <a class="nav-link mx-2" href="/admin">Race</a>
		</li>
		<li class="nav-item">
		  <a class="nav-link mx-2" href="/ranking">Ranking</a>
		</li>
		<li class="nav-item dropdown mr-5">
		  <a class="d-flex nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			${user.nick}
		  </a>
		  <ul class="dropdown-menu ${darkmenu}">
			<li><a class="dropdown-item" href="/profile">My profile</a></li>
			<li><a class="dropdown-item btn btn-danger" id="logout">Logout</a></li>
		  </ul>
		  </li>
		  
		  <label class="form-check-label" for="flexSwitchCheckChecked">☀</label>
		  <div class="form-check form-switch">
		  <label class="form-check-label" for="flexSwitchCheckChecked">🌑</label>
		  <input class="form-check-input" type="checkbox" role="switch" id="switch" ${checkSwitch}>
		</div>
	  </ul>

	</div>
  </div>
</nav>`

let navbar = document.getElementById("navbar")
navbar.appendChild(newDiv)
logoutUser(user)

let switchCheck = document.getElementById("switch")

switchCheck.addEventListener('input',function(){
	let checked = getLocalStorage("checked")
	let aux = null
		if(switchCheck.checked){
			aux = "checked"
			switchCheck.removeAttribute("checked")
			setLocalStorate("color", "dark")
		}else{
			aux = ""
			switchCheck.setAttribute("checked", true)
			let styleMain =  "display: flex; flex-wrap: nowrap; height: 100vh; max-height: 100vh; overflow-x: auto; overflow-y: hidden;"
			setLocalStorate("main",styleMain)
			setLocalStorate("color", "white")

		}
	setLocalStorate("checked", aux)
	location.reload();
})

}

export function formProfile() {
  let newProfile = document.createElement("div");

  newProfile.innerHTML = `<form class="row g-3">
    <div class="col-md-4">
  <label for="validationDefault01" class="form-label">Nombre</label>
  <input type="text" class="form-control" id="name" value="Mark" required>
</div>
<div class="col-md-4">
  <label for="validationDefault02" class="form-label">Apellidos</label>
  <input type="text" class="form-control" id="surname" value="Otto" required>
</div>
<div class="col-md-4">
  <label for="validationDefaultUsername" class="form-label">Nickname</label>
  <div class="input-group">
      <span class="input-group-text" id="nickname">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
    </div>
</div>
<div class="col-md-6">
    <label for="validationDefault03" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" required>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`;
  document.body.appendChild(newProfile);
}

export function footer(){
	let newFooter=document.createElement("div");

	newFooter.innerHTML=`<div class="container">
	<div class="row">
	  <div class="col-md-4">
		<ul>
		  <li style="display: inline-block;"><a href="https://twitter.com/home"><img class="rounded" src="../assets/icons/x.jpeg" alt="" style="width: 25px;"></a></li>
		  <li style="display: inline-block;"><a href="https://www.instagram.com/"><img class="rounded" src="../assets/icons/insta.png" alt="" style="width: 25px;"></a></li>
		  <li style="display: inline-block;"><a href="https://discord.com/"><img class="rounded" src="../assets/icons/facebook.png" alt="" style="width: 25px;"></a></li> 
		</ul>
	  </div>
	  <div class="col-md-4 text-center">
		<p>Owners: Badrelddin Hamidou El Aadli and Francisco Álvarez Bellón</p>
	  </div>
	  <div class="col-md-4 text-right">
		<div id="cookies-alert" style="float: right; margin-right: 15px;">
		  <a href="/politica-de-cookies">Cookie Policy</a> | <a href="/politica-de-privacidad">Privacy Policy</a>
		</div>
	  </div>
	</div>
	<div class="text-center p-3">
	  © 2023 Copyright: Fantasy F1
	</div>
  </div>`

  let footer = document.getElementById("footer")
  footer.appendChild(newFooter)
}
