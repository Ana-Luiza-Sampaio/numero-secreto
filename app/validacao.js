function verificaValorValido(chute){
    const numero = +chute;

//1o verificação - valor numérico:    
    
    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    };

//2o verificação - valor permitido:

    if(diferenteDoPermitido(numero)){
       elementoChute.innerHTML += `
            <div>Valor inválido. 0 número secreto deve estar entre ${menorValor} e ${maiorValor}</div>
       `
       return
    };

//3a verificação - valor igual:

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i>
        `
    } else{
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i>
        `
    }
};

function chuteInvalido(numero) {
    return Number.isNaN(numero);
};

function diferenteDoPermitido(numero){
    return numero > maiorValor || numero < menorValor
};

document.body.addEventListener('click', evento => {
    if(evento.target.id == "jogar-novamente"){
        window.location.reload()
    }
})