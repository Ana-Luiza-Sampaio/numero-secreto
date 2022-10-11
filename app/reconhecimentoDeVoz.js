const elementoChute = document.getElementById('chute');

//permite utilização e implementação futura
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
//habilita reconhecimento de voz
const recognition = new SpeechRecognition();
recognition.lang = "eng"
//inicia reconhecimento de voz
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(evento){
    chute = evento.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaValorValido(chute);
}

//função para exibir chute na tela
function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>You said:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
