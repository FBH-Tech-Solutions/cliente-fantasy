var errores=[];


document.getElementById('submit').addEventListener("click", ()=>{
    email=document.getElementById('email').value;
    password=document.getElementById('password').value;

    if (empty(email)) {
        errores.push('El correo está vacio <br>');
    }else{
        if (!email.includes("@")||email.startsWith("@")) {
            errores.push('El correo necesita tener un @')
        }else{
            if (comprobarArroba(email)) {
                
            }else{
                if (empty(password) && comprobarContrasenia(password)) {
                    errores.push('La contraseña está vacia')
                }else{
                    if (password==pwd && email==correo) {
                        clean
                        window.location.href=''//Insertar el html de inicio
                    }else{
                        errores.push('No has podido iniciar sesion')
                    }
                }
            }
        }
    }
})

function comprobarArroba(email) {
    var salir=false
    for (let i = email.length-3; i < email.length-1; i++ &&!salir) {
        if (email.charAt(i)=='@') {
            errores.push=('El @ no puede ir en los 3 ultimos caracteres')
            salir=true
        }
        
    }
    return errores
}

function comprobarContrasenia(contrasenia){
    if (contrasenia.length<8) {
        msg=alert('La contraseña tiene menos de 8 caracteres')
    }
    return msg
}

function empty(num) {
    var vacio=false
    if(num.length==0){
        vacio=true
    }
    return vacio
}

function clean(){
    document.getElementById('email').value=' '
    document.getElementById('password').value=' '
}

function limpiarUsuario(){
    document.getElementById('nombre').value=' '
    document.getElementById('primerApellido').value=' '
    document.getElementById('segundoApellido').value=' '
    document.getElementById('dni').value=' '
    document.getElementById('fecha').value=' '
}
