let escolhaJogador = document.querySelector("#escolhaJogador");
let resultadoJogador = document.querySelector("#informacoesJogador");
let resultadoComputador = document.querySelector("#informacoesComputador")
let resultadoFinal = document.querySelector("#resultadoFinal")

let buttonAddPersonagem = document.querySelector("#addPersonagem")
let buttonVerResultado = document.querySelector("#resultadoBtn")

const herois = ["", "", "",]
const viloes = ["", "", ""]

let forcaHerois = 0;
let forcaViloes = 0;

let contadorPersonagem = 0;

buttonAddPersonagem.addEventListener("click", () => {
    nome = escolhaJogador.value.trim();

    if (nome === "") return;

    if (contadorPersonagem < 3) {
        herois[contadorPersonagem] = nome;
        forcaHerois += Math.floor(Math.random() * 10) + 1;

        contadorPersonagem++
        escolhaJogador.value = ""
        escolhaJogador.focus();
    }

    if (contadorPersonagem === 3) {
        buttonAddPersonagem.classList.toggle("hide")
        buttonVerResultado.classList.toggle("hide")
        escolhaJogador.classList.toggle("hide")
        console.log(escolhaJogador)
    }
})

function verResultado() {
    for (let i = 0; i < 3; i++) {
        escolhaAleatoria = Math.floor(Math.random() * 10)
        listaViloes = ["Doctor Doom", "Magneto", "Thanos", "Ultron", "Caveira Vermelha", "Coringa", "Lex Luthor", "Loki", "Bane", "Sinestro"]

        viloes[i] = listaViloes[escolhaAleatoria]
        forcaViloes += Math.floor(Math.random() * 10) + 1
    }

    if (forcaHerois == forcaViloes) {
        resultadoJogador.innerText = `vc atingiu a força de ${forcaHerois}` 
        resultadoComputador.innerText = `os vilões a força de ${forcaViloes}`
        resultadoFinal.innerText = "empate"
        buttonVerResultado.classList.toggle("hide")
        return
    } else if (forcaHerois > forcaViloes) {
        resultadoJogador.innerText = `vc atingiu a força de ${forcaHerois}` 
        resultadoComputador.innerText = `os vilões a força de ${forcaViloes}`
        resultadoFinal.innerText = "Os heróis venceram"
        buttonVerResultado.classList.toggle("hide")
        return
    } else {
        resultadoJogador.innerText = `vc atingiu a força de ${forcaHerois}` 
        resultadoComputador.innerText = `os vilões a força de ${forcaViloes}`
        resultadoFinal.innerText = "Vilões venceram"
        buttonVerResultado.classList.toggle("hide")
        return 
    }
}

