const valorWons = document.querySelector("#valorWons");
const resultado = document.querySelector("#resultado");

const wonsReal = 0.0040;
const wonsDolar = 0.00068;

function converterDolar(){
    const valorConvertidoDolar = valorWons.value * wonsDolar;
    resultado.innerText = `${Math.round(valorConvertidoDolar)} Dolares`
}
function converterReal(){
    const valorConvertidoReal = valorWons.value * wonsReal;
    resultado.innerHTML = `${Math.round(valorConvertidoReal)}R$`
}

