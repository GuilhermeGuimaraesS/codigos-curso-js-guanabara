function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nascimento = (document.getElementById("ano_nasc_txt"))
    var result = document.getElementById("result")
    if (ano_nascimento.value.length == 0 || ano_nascimento.value > ano_atual) {
        window.alert("[ERRO] Verifique os dados fornecidos e tente outra vez!")
    } else {
        var sexo_marcado = document.getElementsByName('radsex')
        var idade = ano_atual - Number(ano_nascimento.value)
        var gênero = ''
        var imagem = document.createElement("img")
        imagem.setAttribute('id', 'foto')
        if (sexo_marcado[0].checked) {
            gênero = "Homem"
            if (idade >= 0 && idade < 11) {
                // Criança
                imagem.setAttribute('src', 'fotos/fotomenino.png')
            } else if (idade < 23) {
                // Jovem
                imagem.setAttribute('src', 'fotos/fotojovemmenino.png')
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', 'fotos/fotoadulto.png')
            } else {
                // Idoso
                imagem.setAttribute('src', 'fotos/fotoidoso.png')
            }

        } else {
            gênero = "Mulher"
            if (idade >= 0 && idade < 21) {
                // Criança
                imagem.setAttribute('src', 'fotos/fotomenina.png')
            } else if (idade < 23) {
                // Jovem
                imagem.setAttribute('src', 'fotos/fotojovemmenina.png')
            } else if (idade < 50) {
                // Adulta
                imagem.setAttribute('src', 'fotos/fotoadulta.png')
            } else {
                // Idosa
                imagem.setAttribute('src', 'fotos/fotoidosa.png')
            }
        }
        // result.style.textAlign = 'center'
        result.innerHTML = `${gênero} de ${idade} anos.`
        result.appendChild(imagem)
    }

}
