const menorValor = 1;
const maiorValor = 1000;

const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

const numeroSecreto = geraNumeroAleatorio();

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

function geraNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1) 
};

console.log("Número secreto:", numeroSecreto);






