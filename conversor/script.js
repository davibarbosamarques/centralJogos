function conversor(){
    const wonsReal = 0.0040;
    const wonsDolar = 0.00068;

    let valorEmWons = prompt("Digite quantos Wons vc quer converter");

    const valorConvertidoReal = valorEmWons * wonsReal;
    const valorConvertidoDolar = valorEmWons * wonsDolar;

    let qualConversao = prompt("Digite 1 para coverter para real ou 2 para dolar")

    if(qualConversao == 1){
        alert(`sua conversão para real é ${Math.round(valorConvertidoReal)}`)
    }else{
        alert(`sua conversão para dolar é ${Math.round(valorConvertidoDolar)}`)
    }
}
