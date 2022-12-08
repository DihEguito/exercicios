function calcular() {
    const gas =  document.getElementById("gasolina").value;
    const alc = document.getElementById("alcool").value;
    const div = document.getElementById("resultado");

    calculo (gas, alc, div)
}

function limpar () {
    document.getElementById("gasolina").value = "";
    document.getElementById("alcool").value = "";
    document.getElementById("resultado").innerText = "";    
}

function calculo(gas, alc, div) {
    if (alc == 0 || gas == 0) {
        alert("digite ambos os preços para verificar o custo beneficio");
    } else if  (alc < gas*0.7) {
        div.innerText = `o melhor custo beneficio é o alcool, custando R$ ${parseFloat(alc).toFixed(2)}`
    } else if  (alc > gas*0.7) {
        div.innerText = `o melhor custo beneficio é a gasolina, custando R$ ${parseFloat(gas).toFixed(2)}`
    } else {
        div.innerText = `ambos tem o melhor custo beneficio`
    }
}