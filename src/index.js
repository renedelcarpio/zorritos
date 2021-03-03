import {registerImage} from './lazy.js'

const max = 122
const min = 1
const random = () =>
    Math.floor(Math.random() * (max - min))+ min


const createImageNode = () => {
    const container = document.createElement('div')
    container.className = "container-zorros"

    const imagen = document.createElement("img")
    imagen.className = "imagen-zorro"
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`

    container.appendChild(imagen)

    return container
}

const mountNode = document.getElementById("zorritos")
const addButton = document.querySelector('#agregar-imagen')
const clearButton = document.querySelector('#borrar-imagen')

const addImage = () => {
    const newImage = createImageNode()
    mountNode.append(newImage)
    registerImage(newImage)
}

const clearImage = () => {
    const nodeList = zorritos.querySelectorAll('.container-zorros')
    const arrayEliminar = [...nodeList]
    arrayEliminar.forEach(child => {
        child.remove()
    });
}

addButton.addEventListener("click", addImage)
clearButton.addEventListener("click", clearImage)