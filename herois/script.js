// let escolhaJogador = document.querySelector("#escolhaJogador");
// let resultadoJogador = document.querySelector("#informacoesJogador");
// let resultadoComputador = document.querySelector("#informacoesComputador")
// let resultadoFinal = document.querySelector("#resultadoFinal")


 const herois = ["", "", "",]
 const viloes = ["", "", ""]

let forcaHerois = 0;
let forcaViloes = 0;

for(let i = 0; i < 3; i++){
    escolhaPersonagem = prompt("Digite seu personagem")
    herois[i] = escolhaPersonagem
    forcaHerois += Math.floor(Math.random() * 10) +1
}

for(let i = 0; i < 3; i++){
    escolhaAleatoria = Math.floor(Math.random() * 10)
    listaViloes = ["Doctor Doom", "Magneto", "Thanos", "Ultron", "Caveira Vermelha", "Coringa", "Lex Luthor", "Loki", "Bane", "Sinestro"]

    viloes[i] = listaViloes[escolhaAleatoria] 
    forcaViloes += Math.floor(Math.random() * 10) +1
}

if(forcaHerois == forcaViloes){
    alert("empate")
}else if(forcaHerois > forcaViloes){
    alert("Os herois venceram")
}else{
    alert("Vilões venceram")
}