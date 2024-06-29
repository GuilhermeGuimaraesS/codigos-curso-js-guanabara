function tabuada() {
    var numero_txt = document.getElementById("numero")
    var numero = Number.parseInt(numero_txt.value)
    var multiplicador = 1

    var tabuada = document.getElementById("tabuada")

    if (numero_txt.value.length == 0) {
        alert("Resposta inválida. Digite um número, por favor!")

    } else {
        tabuada.innerHTML = ``
        for (multiplicador; multiplicador <= 10; multiplicador++) {
            tabuada.innerHTML += `<option>${numero} x ${multiplicador} = ${numero * multiplicador} </option>`

        }

    }

}
