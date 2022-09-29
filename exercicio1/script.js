// criar um novo elemento

let novoElemento1 = document.createElement("li")
let novoElemento5 = document.createElement("li")

//cria um conteudo
let conteudo1 = document.createTextNode("item 0")
let conteudo2 = document.createTextNode("item 5")

//adicionando conteudo no elemento criado
novoElemento1.appendChild(conteudo1)
novoElemento5.appendChild(conteudo2)

// colocando o elemento na lista

let listaVar = document.getElementById("lista")

listaVar.insertAdjacentElement("afterbegin", novoElemento1)

listaVar.insertAdjacentElement( "beforeend", novoElemento5)

