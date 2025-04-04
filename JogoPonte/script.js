function jogar(){
    let vitoria = true;

    for (rodada = 1; rodada <= 3; rodada++) {

        const escolhaJogador = prompt("Digite o piso 1, 2 ou 3");
        const escolhaComputador = Math.floor(Math.random() * 3) + 1

        if (escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3) {
            alert("vc esta tentando roubar por acaso?")
        }
        else if (escolhaJogador == escolhaComputador) {
            alert("vc morreu, vidro quebrou")
            rodada = 10
            vitoria = false
        }
        else {
            alert("vc passou do nível: " + rodada + ", vidro quebrado foi " + escolhaComputador)
        }
    }

    if (vitoria == true) {
        alert("Parabéns vc venceu")
    }
}