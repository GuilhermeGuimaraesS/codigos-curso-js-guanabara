var numeros = []
var resultado = document.getElementById("confirmação")
var infos = document.getElementById("informações")

function adicionar () {
    var numero_txt = document.getElementById("valor")
    var numero = Number(numero_txt.value)
    

    var tamanho_lista = numeros.length
    
    // Verifica se foi digitado um valor e se ele está entre 1 e 100
    if (numero_txt.value.length == 0 || numero > 100 || numero < 1 ) {
        alert("Valor inválido ou já encontrado na lista!")
        
    // Verificar se o número já foi adicionado
    } else if (tamanho_lista > 0) {
        if (numeros.indexOf(numero) != 0){ 
            numeros.push(numero)
            resultado.innerHTML += `<option> Valor ${numero} adicionado! \n</option>`
        } else  
            alert("Valor inválido ou já encontrado na lista!")
    
    // Adiciona o número à lista
    } else {
        numeros.push(numero)
        resultado.innerHTML += `<option> Valor ${numero} adicionado! \n</option>`

    }

}


function finalizar() {
    // quantidade de valores cadastrados
    var total_cadastros = numeros.length
    infos.innerHTML = `<p> Ao todo, temos ${total_cadastros} números cadastrados. </p>`

    // soma dos valores
    var soma = 0
    for (var contador in numeros) {
        soma += numeros[contador]
    }
    infos.innerHTML += `<p>A soma entre os valores é igual a: ${soma}</p>`

    // maior e menor valores
    var maior_valor = Math.max.apply(Math, numeros)
    var menor_valor = Math.min.apply(Math,numeros)
    infos.innerHTML += `<p>O maior valor digitado foi: ${maior_valor}</p>`
    infos.innerHTML += `<p>O maior valor digitado foi: ${menor_valor}</p>`

    // média dos valores
    var media_dos_valores = soma / total_cadastros
    infos.innerHTML += `<p>A média dos valores digitados é: ${media_dos_valores}.</p>`

    while(numeros.length) {
        numeros.pop()

    }
    resultado.innerHTML = ``
    
}

