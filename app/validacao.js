function verificaValorValido(chute){
    const numero = +chute;

//1o verificação - valor numérico:    
    
     if(chuteInvalido(numero)){
        if(chute.toUpperCase() === 'GAME OVER'){
            document.body.innerHTML = `
                <h2>GAME OVER</h2>
                <h3>Click on the "Restart" button to try again</h3>
                <button id="jogar-novamente" class="btn-jogar">Restart</button>
            `    
        }else{
            elementoChute.innerHTML += '<div>Invalid entry, try again</div>'
            return
        }
    };

//2o verificação - valor permitido:

    if(diferenteDoPermitido(numero)){
       elementoChute.innerHTML += `
            <div>Invalid entry. The secret number is somewhere between ${menorValor} and ${maiorValor}</div>
       `
       return
    };

//3a verificação - valor igual:

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>You found it!</h2>
            <h3>The secret number was: ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Restart</button>
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
