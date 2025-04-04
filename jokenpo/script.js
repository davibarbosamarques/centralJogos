function jogar(){

    var idade = prompt("Qual sua idade?")

    if(idade <= 18){
        alert("vc é menor de idade, não pode jogar Jokenpo")
    }
    else{
        let escolhaJogador = prompt("Digite 1-pedra  2-papel ou 3-tesoura")
        let escolhaComputador = Math.floor(Math.random() * 3 ) + 1

        if(escolhaJogador == escolhaComputador){
            alert(`vc escolheu ${escolhaJogador} e o computador ${escolhaComputador} EMPATE!!!`)
        } 
        
        else if(escolhaJogador == 1){

            if(escolhaComputador == 2){
                alert(`vc escolheu ${escolhaJogador} e o computador ${escolhaComputador} vc perdeu`)
            }
            else{
                alert(`vc escolheu ${escolhaJogador} e o computador ${escolhaComputador} vc ganhou`)
            }

        }

        else if(escolhaJogador == 2){
            if(escolhaComputador == 1){
                alert(`vc escolheu ${escolhaJogador} e o computador ${escolhaComputador} vc ganhou`)
            }
            else{
                alert(`vc escolheu ${escolhaJogador} e o computador ${escolhaComputador} vc perdeu`)
            }
        }
        else if(escolhaJogador == 3){
            if(escolhaComputador == 1){
                alert(`vc escolheu ${escolhaJogador} e o computador ${escolhaComputador} vc perdeu`)
            }
            else{
                alert(`vc escolheu ${escolhaJogador} e o computador ${escolhaComputador} vc ganhou`)
            }
        }
        else{
            alert("vc não escolheu 1 nem 2 nem 3")
        }
    }
    
}