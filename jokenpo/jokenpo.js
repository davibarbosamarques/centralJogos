let escolhaJogador = document.querySelector("#escolhaJogador");
let resultadoFinal = document.querySelector("#resultado")
let escolhaComputador = Math.floor(Math.random() * 3) + 1;

function jogar() {
    if (escolhaJogador.value == escolhaComputador) {
        resultadoFinal.innerText = `Empate`
    }
    else if (escolhaJogador.value == 1) {
        if (escolhaComputador == 2) {
            resultadoFinal.innerText = `vc escolheu ${escolhaJogador.value} e o computador ${escolhaComputador} vc perdeu`
        }
        else {
            resultadoFinal.innerText = `vc escolheu ${escolhaJogador.value} e o computador ${escolhaComputador} vc ganhou`
        }

    }

    else if (escolhaJogador.value == 2) {
        if (escolhaComputador == 1) {
            resultadoFinal.innerText = `vc escolheu ${escolhaJogador.value} e o computador ${escolhaComputador} vc ganhou`
        }
        else {
            resultadoFinal.innerText = `vc escolheu ${escolhaJogador.value} e o computador ${escolhaComputador} vc perdeu`
        }
    }
    else if (escolhaJogador.value == 3) {
        if (escolhaComputador == 1) {
            resultadoFinal.innerText = `vc escolheu ${escolhaJogador.value} e o computador ${escolhaComputador} vc perdeu`
        }
        else {
            resultadoFinal.innerText = `vc escolheu ${escolhaJogador.value} e o computador ${escolhaComputador} vc ganhou`
        }
    }
    else {
        resultadoFinal.innerText = "vc não escolheu 1 nem 2 nem 3"
    }
}