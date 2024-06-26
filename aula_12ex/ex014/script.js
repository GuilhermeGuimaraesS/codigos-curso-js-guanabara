function carregar() {
    var mensagem = document.getElementById("msg")
    var cumprimento = document.getElementById("saudação")
    var imagem = document.getElementById("foto_1")
    var data = new Date()
    var hora = data.getHours()
    // var hora = 15
    var minutos = data.getMinutes()
    mensagem.innerHTML = `Agora são ${hora}h${minutos} `

    if (hora >= 0 && hora < 12) {
        cumprimento.innerHTML = "BOM DIA!"
        imagem.src = "fotomanha.png"
        document.body.style.backgroundColor = "#a3badc"
    } else if (hora >= 12 && hora < 18) {
        cumprimento.innerHTML = "BOA TARDE!"
        imagem.src = "fototarde.png"
        document.body.style.backgroundColor = "#9f7d7e"
    } else if (hora >= 18 && hora <= 23) {
        cumprimento.innerHTML = "BOA NOITE!"
        imagem.src = "fotonoite.png"
        document.body.style.backgroundColor = "#1c325b"
    }
}

