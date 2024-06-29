function contar() {
    // Respostas em string; direto do HTML
    var numero_1_txt = document.getElementById("inicio")
    var numero_2_txt = document.getElementById("fim")
    var passo_txt = document.getElementById("incremento")

    // Conversão das respostas de string para numeros
    var primeiro_numero = Number.parseInt(numero_1_txt.value)
    var segundo_numero = Number.parseInt(numero_2_txt.value)
    var passo = Number.parseInt(passo_txt.value)

    // Variáveis que recebem os locais de resposta
    var resultado = document.getElementById("resultado")
    var contagem = document.getElementById("contagem")
    contagem.innerHTML = '' 
   
    // Site contendo os emojis: https://unicode.org/emoji/charts/full-emoji-list.html#1f605
    var emoji_apontando = String.fromCodePoint(0x1F449)
    var emoji_chegada = String.fromCodePoint(0x1F3C1)
    
    // for (primeiro_numero; primeiro_numero <= segundo_numero; primeiro_numero += passo) {
    //     resultado.innerText += ` ${ primeiro_numero }`
    // }
    
    // Verifica se foram digitados inicio e fim da contagem
    if (numero_1_txt.value.length <= 0 || numero_2_txt.value.length <= 0 ) {
        resultado.innerHTML = "Imposssível contar..."

    // Verifica se o passo está vazio ou com o valor 0
    } else if (passo_txt.value.length <= 0 || passo_txt.value == 0) {
        passo = 1
        alert("Valor inválido para o passo! Considerando PASSO = 1")
        resultado.innerHTML = `Contando: `
        while (primeiro_numero <= segundo_numero) {
            // alert(primeiro_numero)
            contagem.innerHTML += ` ${primeiro_numero} ${emoji_apontando}`
            primeiro_numero += passo
            
        } contagem.innerHTML += `${emoji_chegada}`

    // Faz contagem regressiva
    } else if (segundo_numero < primeiro_numero) {
        resultado.innerHTML = `Contando: `
        while (primeiro_numero >= segundo_numero) {
            contagem.innerHTML += ` ${primeiro_numero} ${emoji_apontando}`
            primeiro_numero -= passo

        } contagem.innerHTML += `${emoji_chegada}`

    // Faz a contagem normal
    } else {
        resultado.innerHTML = `Contando: `
        while (primeiro_numero <= segundo_numero) {
            contagem.innerHTML += `${primeiro_numero} ${emoji_apontando}`
            primeiro_numero += passo

        } contagem.innerHTML += `${emoji_chegada}`

    }

}
