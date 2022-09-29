function checaCaps(event){
    console.log(event.target.type);

    console.log(event.key);

    let mensagemVar = document.getElementById("mensagem")

    if (event.key === "Shift") {
        mensagemVar.innerHTML = "atenção: segurando o shift"
    } else {
        mensagemVar.innerHTML = ""
    }
}