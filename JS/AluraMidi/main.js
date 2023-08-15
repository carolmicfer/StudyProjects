function tocaSom(seletorAudio) {
    const element = document.querySelector(seletorAudio);

    if (element && element.localName === 'audio') {
        element.play();
    }  
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    //quando o usuario 'aperta' a tecla
    tecla.onkeydown = function (event) {

        console.log(event.code);

        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    //quando o usuario 'solta' a tecla
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
