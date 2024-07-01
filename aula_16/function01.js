function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

function mostrar(mensagem) {
    console.log(mensagem)
}

mostrar(parOuImpar(8))
