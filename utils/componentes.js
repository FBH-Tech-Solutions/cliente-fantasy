export function navbar() {
  let newDiv = document.createElement("div");

  newDiv.innerHTML = `	<nav class="navbar navbar-expand-md navbar-dark bg-dark">
	        <div class="container">
	          <a class="navbar-brand d-md-none d-xs-block py-3" href="#">
	            <img src="/static_files/images/logos/beer_white.png" height="40" alt="Company Logo">
	          </a>
	          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	            <span class="navbar-toggler-icon"></span>
	          </button>
	      
	          <div class="collapse navbar-collapse" id="navbarNavDropdown">
	            <ul class="navbar-nav mx-auto">
	              <li class="nav-item">
	                <a class="nav-link mx-2" aria-current="page" href="/home">Home</a>
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
	              <li class="nav-item">
	                <a class="nav-link mx-2 btn rounded-0 btn-danger" href="#">Profile</a>
	              </li>
	            </ul>
	          </div>
	        </div>
	      </nav>`;
  let navbar = document.getElementById("navbar")
  navbar.appendChild(newDiv)
  // document.body.insertBefore(test, newDiv);
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
