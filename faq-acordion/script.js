let aberto = [false, false, false, false];

function verMais(num) {
    const bloco = document.getElementById(`p${num}`);
    const img = document.getElementById(`mais${num}`);

    bloco.classList.toggle('vis');

    if (!aberto[num - 1]) {
        img.src = 'assets/images/icon-minus.svg';
        aberto[num - 1] = true;
    } else {
        img.src = 'assets/images/icon-plus.svg';
        aberto[num - 1] = false;
    }
}

const perguntas = document.querySelectorAll('.perguntas');
let indiceAtual = 0;
let navegou = false;

document.addEventListener('keydown', function(event) {

    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        if (navegou) {
            perguntas[indiceAtual].classList.remove('selecionada');
        }

        navegou = true;

        if (event.key === 'ArrowUp' && indiceAtual > 0) {
            indiceAtual = indiceAtual - 1;
        }

        if (event.key === 'ArrowDown' && indiceAtual < perguntas.length - 1) {
            indiceAtual = indiceAtual + 1;
        }

        perguntas[indiceAtual].classList.add('selecionada');
    }

    if (event.key === 'Enter' || event.key === ' ') {
        if (navegou) {
            let paragrafo = perguntas[indiceAtual].querySelector('p.bloco');
            if (paragrafo) {
                paragrafo.classList.toggle('vis');
            }
        }
    }
});
