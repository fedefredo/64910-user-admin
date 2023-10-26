const usersArray = [
    {
      fullname: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
      id: '1',
      active: true,
      password: 'password123',
      bornDate: new Date('1993-01-01').getTime(),
      location: 'New York, NY',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280'
    },
    {
      fullname: 'Jane Doe',
      age: 25,
      email: 'jane.doe@example.com',
      id: '2',
      active: false,
      password: 'password456',
      bornDate: new Date('1998-05-05').getTime(),
      location: 'Los Angeles, CA',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280'
    },
    {
      fullname: 'Alice Johnson',
      age: 35,
      email: 'alice.johnson@example.com',
      id: '3',
      active: true,
      password: 'password789',
      bornDate: new Date('1988-08-08').getTime(),
      location: 'Miami, FL',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325'
    },
    {
      fullname: 'Michael Smith',
      age: 40,
      email: 'michael.smith@example.com',
      id: '4',
      active: false,
      password: 'password101',
      bornDate: new Date('1983-04-10').getTime(),
      location: 'Chicago, IL',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280'
    },
    {
      fullname: 'Emily Johnson',
      age: 28,
      email: 'emily.johnson@example.com',
      id: '5',
      active: true,
      password: 'password202',
      bornDate: new Date('1995-02-15').getTime(),
      location: 'Houston, TX',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325'
    },
    {
      fullname: 'Daniel Lee',
      age: 34,
      email: 'daniel.lee@example.com',
      id: '6',
      active: false,
      password: 'password303',
      bornDate: new Date('1989-07-07').getTime(),
      location: 'San Francisco, CA',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/bf/Mk8iconmario.png?width=325'
    },
    {
      fullname: 'Samantha Davis',
      age: 22,
      email: 'samantha.davis@example.com',
      id: '7',
      active: true,
      password: 'password404',
      bornDate: new Date('2001-11-11').getTime(),
      location: 'Boston, MA',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325'
    },
    {
      fullname: 'James Moore',
      age: 45,
      email: 'james.moore@example.com',
      id: '8',
      active: false,
      password: 'password505',
      bornDate: new Date('1978-12-19').getTime(),
      location: 'Dallas, TX',
      image: "https://m.media-amazon.com/images/I/81wNRtDaTXL.png"
    },
    {
      fullname: 'Isabella Taylor',
      age: 29,
      email: 'isabella.taylor@example.com',
      id: '9',
      active: true,
      password: 'password606',
      bornDate: new Date('1994-06-24').getTime(),
      location: 'San Diego, CA',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/3/3a/Mk8iconkoopa.png?width=325'
    },
    {
      fullname: 'Ethan Johnson',
      age: 31,
      email: 'ethan.johnson@example.com',
      id: '10',
      active: false,
      password: 'password707',
      bornDate: new Date('1992-03-03').getTime(),
      location: 'Denver, CO',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325'
    }
];

//Obtener el body de la tabla 
const tableBody = document.getElementById("table-body")
const searchInput = document.querySelector("#search")
const userForm = document.querySelector("form#user-form")
const submitBtn = userForm.querySelector('button[type=submit]')

userForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    const el = evt.target.elements;

    // Deberia cortar la ejecucion de la funcion callback del eveneto submit
    // Password y password2 sean distintos
    if (el.password.value !== el.password2.value) {
        alert("Las contraseñas no coinciden")
        return
    }

        // Email ya exista
        const emailExist = usersArray.find((user) => {
            if (user.email === el.email.value) {
                return true
            }
        })

        if(emailExist && el.id.value !== emailExist.id) {
            Swal.fire({
                title: 'El correo ya existe',
                icon: 'error'
            })
            return
        }

        // if else convencional
        // let id; 
        // if (el.id.value) {
        //     id = el.id.value
        // } else {
        //     id = crypto.randomUUID() //el id no puede repetirse
        // }

    //Operador ternario => condicion ? condicionTrue : condicionFalse
    const id = el.id.value ? el.id.value : crypto.randomUUID()


    const user = {
        fullname: el.fullname.value,
        age: el.age.valueAsNumber,
        email: el.email.value,
        password: el.password.value,
        active: el.active.checked, //usar .checked cuando uso active
        bornDate: new Date(el.bornDate.value).getTime(),
        location: el.location.value,
        id: id, 
        image: el.image.value
    }

    //Tenemos dos posibles acciones a realizar
    //Opcion a) Al estar editando deberia reemplazar el usuario a editar con su info actualizada 
    //Opcion b) Agregue un usuario nuevo
    
    //Pregunto si tengo id para saber si estoy editando o no 
    if (el.id.value) {
        //editando
        const indice = usersArray.findIndex(usuario => {
            if (usuario.id === el.id.value) {
                return true
            }
        })

        //reemplazo el usuario con los datos nuevos del formulario
        usersArray[indice] = user
        //Swal.fire('Usuario editado', 'Los datos del usuario se actualizaron correctamente', 'success')
        Swal.fire({
            title: 'Usuario editado',
            text: 'Los datos del usuario se actualizaron correctamente',
            icon: 'success',
            timer: 1000
        })
    } else {
        //Agregando un usuario nuevo
        usersArray.push(user)
        //Swal.fire('Usuario agregado', 'Usuario se creo correctamente', 'success')
        Swal.fire({
            title: 'Usuario agregado',
            text: 'Usuario se creo correctamente',
            icon: 'success',
            timer: 1000
        })
    }

    pintarUsuarios(usersArray)

    resetearFormulario()
})

function resetearFormulario() {
    //Reseteo formulario
    userForm.reset()
    //Activo los inputs, si estaban desactivados
    userForm.elements.password.disabled = false
    userForm.elements.password2.disabled = false
    //Remuevo la clase editar
    submitBtn.classList.remove('btn-edit')
    //Vuelvo el texto del boton a su valor por defecto
    submitBtn.innerHTML = 'Agregar Usuario'
}

//Escuchar cuando el usuario presiona una tecla en el input search
searchInput.addEventListener("keyup", (eventito) => {
    //Obtener el valor del input
    const inputValue = eventito.target.value.toLowerCase()
    //Buscar en todos los usuarios aquellos donde su nombre tenga este texto
    const usuariosFiltrados = usersArray.filter((usuario) => {
        const nombre = usuario.fullname.toLowerCase()
        if (nombre.includes(inputValue)) {
            return true
        }
        return false
    })

    //Otra forma de hacerlo
    // const usuariosFiltrados = usersArray.filter((usuario) => usuario.fullname.toLowerCase().includes(inputValue))

    pintarUsuarios(usuariosFiltrados)
    console.log(usuariosFiltrados)

})




function pintarUsuarios(arrayPintar) {
    // Iterar el array y agregar un tr por cada alumno que tengamos 
    tableBody.innerHTML = "";

    arrayPintar.forEach((user, indice) => {
        tableBody.innerHTML += `
        <tr class="table-body">
            <td class="user-image">
                <img src="${user.image}" alt="${user.fullname}" avatar>
            </td>
            <td class="user-name">${user.fullname}</td>
            <td class="user-email">${user.email}</td>
            <td class="user-location">${user.location}</td>
            <td class="user-age">${user.age}</td>
            <td class="user-date">${formatDate(user.bornDate)}</td>
            <td>
                <button class="action-btn btn-danger" title="Borrar usuario" onclick="borrarUsuario('${user.id}')">
                <i class="fa-solid fa-trash-can"></i>
                </button>

                <button class="action-btn" title="Editar Usuario" onclick="editarUsuario('${user.id}')"><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
        </tr>`
    })
}

pintarUsuarios(usersArray)

function borrarUsuario(ID, nombre) {
    const confirmDelete = confirm(`Realmente desea borrar este usuario ${nombre}`)

    if (confirmDelete) {
        const indice = usersArray.findIndex(user => user.id === ID)
        usersArray.splice(indice, 1)
        pintarUsuarios(usersArray)
    }
}

function editarUsuario(idBuscar) {
    //Buscar un usuario con id 
    const userEdit = usersArray.find((usuario) => {
        //deberia devolver un true, segun la condicion id que me enviaron === al usuario que estoy iterando
        if(usuario.id === idBuscar) {
            return true
        }
    })
    //Indicar que el usuario no fue encontrado
    if (userEdit === undefined) {
       Swal.fire('Error al editar', 'No se pudo editar el usuario', 'error')
        return
    }
    console.log(userEdit)

    //Rellenar el formulario con los datos del usuario a ingresar
    const el = userForm.elements

    el.id.value = userEdit.id
    el.age.value = userEdit.age
    el.fullname.value = userEdit.fullname
    el.email.value = userEdit.email
    el.image.value = userEdit.image
    el.location.value = userEdit.location
    el.active.checked = userEdit.active
    el.password.value = userEdit.password
    el.password.disabled = true
    el.password2.value = userEdit.password2
    el.password2.disabled = true
    el.bornDate.value = formatInputDate(userEdit.bornDate)

    console.log(formatInputDate(userEdit.bornDate))

    //Cambiar el nombre del boton a editar usuario
    submitBtn.classList.add('btn-edit')
    submitBtn.innerHTML = 'Editar Usuario'
    //Deshabilitar los input de contraseña

    
    
}




function formatDate(fecha) {
    const collator = new Intl.DateTimeFormat("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    })

    const fechaFormateada = collator.format(fecha)

    return fechaFormateada

}

function formatInputDate(fechaInput) {
    const fecha = new Date(fechaInput)
    const year = fecha.getFullYear()
    const month = fecha.getMonth() + 1
    if (month < 10){
        return 0 + month
    }
    const day = fecha.getDate()
    const formatedDate = `${year}-${month}-${day}`
    return formatedDate
}



