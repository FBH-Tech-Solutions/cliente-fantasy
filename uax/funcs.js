export function inputInvalid(element) {
  element.addEventListener("blur", () => {
    element.className = "form-control is-invalid";
  });
}

export function checkByPattern(partternRegex, value){

  return partternRegex.test(value)
}