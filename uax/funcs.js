export function inputInvalid(element){
    element.addEventListener('blur', ()=>{
        element.className="form-control is-invalid" 
    })
}