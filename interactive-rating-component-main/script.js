let tela1 = document.getElementById('p-tela')
let tela2 = document.getElementById('s-tela')
let valores = document.querySelectorAll('div.valor')
let nota = document.getElementById('nota')
let notaSelecionada = null

tela2.classList.add('oculto');

function clicar(valor) {
    notaSelecionada = null

    for (let i = 0; i < valores.length; i++) {
        if (i != valor) {
            valores[i].classList.remove('clicado')
        }
    }

    if (valores[valor]) {
        valores[valor].classList.toggle('clicado')
    }

    if (valores[valor].classList.contains('clicado')) {
        notaSelecionada = valor + 1
    } else {
        notaSelecionada = null
    }
    
}

function enviado() {
    if (notaSelecionada !== null) {
        nota.innerHTML = "Você selecionou " + notaSelecionada + " de 5";

        tela1.classList.add('oculto');

        setTimeout(function() {
            tela2.classList.remove('oculto');
        }, 500);
    } else {
        alert('Por favor, selecione uma nota antes de enviar!');
    }
}