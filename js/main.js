/* variables, const, arays
- minimo 3 funciones con parametros
-minimo 1 condicional 
-minimo 1 ciclo
-manejo todo con console, prompt, alert
-js en el head con defer
-Se entrega si o si via github */

let buscar
let productos = ["pava", "playstation", "mate", "tv", "juego"]
let precios = ["5000", "1200000", "3000", "150000", "60000"]
let opcion
let indice

do {
    alert("¿Qué desea realizar?\n" +
        "1 - Buscar producto\n" +
        "2 - Modificar producto\n" +
        "3 - Agregar producto\n" +
        "4 - Eliminar un producto\n" +
        "5 - Ver productos\n" +
        "6 - Salir")
    opcion = validar()
    ejecucion(opcion)

} while (opcion != 6)



function ejecucion(opcion) {

    switch (parseInt(opcion)) {
        case 1: buscar = prompt("Ingrese el producto a buscar: ")
            indice = busqueda(buscar)
            if (indice < 0) {
                alert("El producto ingresado no se encuentra en la base")
            }
            break

        case 2: buscar = prompt("Ingrese que producto va modificar: ")
            if (indice = busqueda(buscar) < 0) {
                alert("No se encuentra el producto requerido")
            }
            else {
                modificar(indice)
            }
            break

        case 3: let producto = prompt("Ingrese el producto que desea agregar: ")
            let precio = prompt("Ingrese el precio: ")
            agregar(producto, precio)
            break

        case 4: buscar = prompt("Ingrese el producto a eliminar: ")
            indice = busqueda(buscar)
            if (indice < 0) {
                alert("El producto ingresado no se encuentra en la base")
            }
            else {
                eliminar(indice)
            }
            break

        case 5: mostrar();
            break;

        case 6:
            alert("¡Gracias por usar el sistema! :D");
            break;
    }
}

function validar() {
    let op = prompt("Ingrese una opción")
    while (op < 1 || op > 6) {
        alert("Valor invalido, ingrese nuevamente")
        op = prompt("Seleccione una opcion")
    }
    return op
}

function busqueda(buscar) {
    for (indice in productos) {
        if (buscar.toLowerCase() === productos[indice]) {
            console.log("Producto encontrado: "+ productos[indice] + " - $" + precios[indice])
            return indice
        }
        else {
            console.log("No encontrado")
        }
    }
    return -1
}

function agregar(producto, precio) {
    productos.push(producto)
    precios.push(precio)
}

function eliminar(indice) {
    productos.splice(indice, 1)
    precios.splice(indice, 1)
}

function modificar(indice) {
    productos[indice] = prompt("Ingrese la modificacion del nombre: ")
    precios[indice] = prompt("Ingrese la modificacion de precio: ")
}

function mostrar() {
    console.log("Los productos existentes son: ")
    for (let ind in productos) {
        console.log(productos[ind], precios[ind])
    }
}