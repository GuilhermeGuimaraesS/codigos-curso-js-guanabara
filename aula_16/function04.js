function fatorial (numero) {

    let multiplicador = numero 
    let fatorial = numero
    while (multiplicador > 1) {
        multiplicador--
        fatorial *= multiplicador
    }

   /*  let fatorial = 1
    for (let contador = numero; contador > 1; contador--) {
        fatorial *= contador
    }
 */
    return `O fatorial de ${numero} é igual a: ${fatorial}`

}

let resultado = fatorial(5)
console.log(resultado)
