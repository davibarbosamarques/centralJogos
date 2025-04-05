let escolhaJogador = document.querySelector("#escolha-jogador");
let resultado = document.querySelector("#resultado")
let rodada = 0;
vitoria = true;
function jogar(){
    if (rodada < 3) {
        const escolhaComputador = Math.floor(Math.random() * 3) + 1

        if (escolhaJogador.value != 1 && escolhaJogador.value != 2 && escolhaJogador.value != 3) {
            resultado.innerText = "vc esta tentando roubar por acaso?"
        }
        else if (escolhaJogador.value == escolhaComputador) {
            resultado.innerText = "vc morreu, vidro quebrou"
            vitoria = false
        }
        else {
            resultado.innerText = "vc passou do nível: " + rodada + ", vidro quebrado foi o " + escolhaComputador
            escolhaJogador.value = ""
            escolhaJogador.focus();
            rodada++
        }
        console.log(escolhaComputador)

    }else if(vitoria == true) {
        resultado.innerText = "Parabéns vc venceu"
    }
}