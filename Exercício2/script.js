let estado = 0

function addCar() {
    let car = document.querySelector("#carrinho")
    if (estado == 0) {
    car.innerHTML = 'Remover do carrinho'
    document.querySelector("#carrinho").style.color = "#59C00B"
    document.querySelector("#carrinho").style.background = "white"
    document.querySelector("#carrinho").style.borderStyle = "solid"
    estado = 1
    return
    } 
    car.innerHTML = 'Adicionar ao carrinho'
    document.querySelector("#carrinho").style.color = "white"
    document.querySelector("#carrinho").style.background = "#59C00B"
    document.querySelector("#carrinho").style.borderStyle = "none"
    estado = 0
}

