/*  
    Cargar usuarios de la database (localStorage)
    Tomar el formulario
    Tomar los datos cargados 
    Ver si existe un email como el que el usuario ingreso
    Corroborar si existe la contraseña
        - cuando no exista el email 
        - existe el email pero la contraseña no coincide
            => mensaje de error

        - hacer login
            => guardar en el localStorage un currentUser 
            => redireccionar al home 
*/

const users = JSON.parse(localStorage.getItem("users")) || [];
const loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    const email = loginForm.elements.email.value.toLowerCase()
    const password = evt.target.elements.password.value

    const user = users.find((usr) => {
        if (usr.email.toLowerCase() === email) {
            return true
        }
        return false
    }) 

    //Cortamos el submit ya que no existe el correo 
    if (!user || user.password !== password) {
        Swal.fire({
            icon: "error",
            title: "Login Incorrecto",
            text: "Alguno de los datos ingresados no es correcto",
            timer: 2000
        })

        return
    }

    delete user.password
    // user.password = undefined

    localStorage.setItem("currentUser", JSON.stringify(user))

    Swal.fire({
        icon: "success",
        title: "Login Correcto!",
        text: "Será redireccionado en un momento"
    })

    setTimeout(function(){
        window.location.href = "/index.html"
    }, 2500)
})