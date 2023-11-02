//localStorage guarda todos sus elementos en forma de string

//Guardar datos: setItem(key, value)
// localStorage.setItem("usuario", "Juan Ramon Valdez")

const user = {
    nombre: "Jose",
    apellido: "Perez",
    edad: 34
}

localStorage.setItem("usuario", JSON.stringify(user))

// sessionStorage.setItem("usuario", JSON.stringify(user))


//Obtener datos del localStorage: getItem(key)
// localStorage.getItem("usuario")

const resultado = JSON.parse(localStorage.getItem("usuario"))

console.log(resultado)


//Borrar un dato guardado: removeItem(key)
// localStorage.removeItem("usuario")

//Borrar todo el localStorage: clear()
// localStorage.clear()

