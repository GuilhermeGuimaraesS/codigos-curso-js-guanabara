var idade = 16

console.log(`Você tem ${idade} anos.`)
if (idade < 16) { // idade abaixo de 16 anos
    console.log("Não vota.")
} else if (idade < 18 || idade > 65) {  // idade >= a 16 anos e < que 18 anos; idade > 67 anos 
    console.log("Voto opcional.")
} else {  // idade maior que 18 anos
    console.log("Voto obrigatório.")
}
