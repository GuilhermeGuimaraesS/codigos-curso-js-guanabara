function tabuada() {
    let numero_txt = document.getElementById("numero")
    let numero = Number.parseInt(numero_txt.value)

    let tabuada = document.getElementById("tabuada")

    if (numero_txt.value.length == 0) {
        alert("Resposta inválida. Digite um número, por favor!")
        tabuada.innerHTML = ``

    } else {
        tabuada.innerHTML = ``
        for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
            tabuada.innerHTML += `<option>${numero} x ${multiplicador} = ${numero * multiplicador} </option>`

        }

    }

}
