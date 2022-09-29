function insereItem(event) {

    let imputVar = document.getElementById("meu-input")
    console.log(imputVar);
    console.log(imputVar.value);

    let novoElemento = document.createElement("li")
    console.log(novoElemento);

    let conteudo = document.createTextNode(imputVar.value)
    console.log(conteudo);

    novoElemento.appendChild(conteudo)
    console.log(novoElemento);

    let listaVar = document.getElementById("lista")
    console.log(listaVar);

    listaVar.insertAdjacentElement("beforeend", novoElemento)

    // imputVar.value = ""

    event.preventDefault()
}