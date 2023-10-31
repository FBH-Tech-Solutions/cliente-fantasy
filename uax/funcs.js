export function inputInvalid(element) {
  element.addEventListener("blur", () => {
    element.className = "form-control is-invalid";
  });
}

export function checkByPattern(partternRegex, value) {
  return partternRegex.test(value);
}

export function sendNotification(message, type) {
  let newDiv = document.createElement("div");
  let newP = document.createElement("p");

  newP.innerHTML = message;
  newDiv.setAttribute("class", type);
  newDiv.appendChild(newP);

  let divNot = document.getElementById("notification");

  divNot.appendChild(newDiv);

  document.insertBefore(divNot, newDiv);
}

export function checkEqualValues(value1, value2) {
  return value1 == value2;
}


export function getLocalStorage(key){
   let local = localStorage.getItem(key)
   return JSON.parse(local)
}

export function setLocalStorate(key, setValue){
  var localParse = JSON.stringify(setValue)
  localStorage.setItem(key, localParse)
}
  export function empty(num) {
  return num.length==0
}

export function cleanValue(element){
  console.log(element.value)
  return element.value=''
}
