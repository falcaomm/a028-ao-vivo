
function escondeSenha(event) {
    let senha = document.getElementById("password")
    let botao = document.getElementById("botao")

    if (senha.type === "password") {
        senha.setAttribute("type", "text")
        botao.innerHTML = "Esconder Senha"
    } else if (senha.type === "text") {
        senha.setAttribute("type", "password")
        botao.innerHTML = "Mostrar Senha"
    }

    event.preventDefault()
}

function modoDark(event) {
    let botaoDark = document.getElementById("botaoDark")
    let formulario = document.querySelector(".light")

    if (botaoDark.innerHTML = "Modo Dark") {
        formulario.classList.remove("light")
        formulario.classList.add("dark")
        botaoDark.innerHTML = "Modo Light"
    } else if (botaoDark.innerHTML = "Modo Light"){
        formulario.classList.remove("dark")
        formulario.classList.add("light")
        botaoDark.innerHTML = "Modo Light"
    }
    
    event.preventDefault()

}