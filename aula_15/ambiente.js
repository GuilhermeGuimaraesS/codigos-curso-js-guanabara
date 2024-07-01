/* console.log(`${numeros}`)
numeros[3] = 8
console.log(`${numeros}`)
numeros.push(0)
console.log(`${numeros}`)
console.log(numeros.length)
numeros.sort()
console.log(numeros) */

let numeros = [1, 4, 5, 9, 7, 2]
numeros.sort()
// numeros.indexOf(numeros[])

/* for (let position = 0; position < numeros.length; position++) {
    console.log(`A posição ${position} tem o valor: ${numeros[position]}`)

} */

for (let position in numeros) {
        console.log(`A posição ${position} tem o valor: ${numeros[position]}`)

}
