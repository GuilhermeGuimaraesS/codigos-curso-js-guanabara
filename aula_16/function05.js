/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4! <=> n! = n x (n-1)!  

*/

// Recursividade
function fatorial (numero) {

    if (numero == 1) {
        return 1

    } else {
        return numero * fatorial(numero - 1)        

    }

}


console.log(fatorial(6))
