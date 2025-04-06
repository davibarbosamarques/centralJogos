let escolhaJogador = document.querySelector("#escolha-jogador");
let resultado = document.querySelector("#resultado")
let tentativa = document.querySelector("#tentativa")
let jogada = document.querySelector("#jogar")

let rodada = 1;
vitoria = true;

function novaTentativa(){
    rodada = 1;
    vitoria = true;
    resultado.innerText = ""
    escolhaJogador.value = ""
    escolhaJogador.focus();

    tentativa.classList.toggle("hide");
    jogada.classList.toggle("hide");
}

function jogar(){
    if (rodada <= 3 && vitoria){
        const escolhaComputador = Math.floor(Math.random() * 3) + 1;

        if (escolhaJogador.value != 1 && escolhaJogador.value != 2 && escolhaJogador.value != 3) {
            resultado.innerText = "vc esta tentando roubar por acaso?";
        }
        else if (escolhaJogador.value == escolhaComputador) {
            resultado.innerText = "vc morreu, vidro quebrou";
            vitoria = false;

            tentativa.classList.toggle("hide");
            jogada.classList.toggle("hide");
        }
        else {
            resultado.innerText = "vc passou do nível: " + rodada + ", vidro quebrado foi o " + escolhaComputador
            rodada++
            escolhaJogador.value = ""
            escolhaJogador.focus();
        }

        console.log(escolhaComputador)

    }
    if(rodada>3 && vitoria == true) {
        resultado.innerText = "Parabéns vc venceu"
    }
}