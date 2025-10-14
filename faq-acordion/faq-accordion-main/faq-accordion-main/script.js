let bloco1 = document.getElementById('p1')
let bloco2 = document.getElementById('p2')
let bloco3 = document.getElementById('p3')
let bloco4 = document.getElementById('p4')
let blocos = 'fechado'


function verMais() {
    if (blocos === 'aberto') {
        bloco1.style.opacity = '1';
        bloco1.style.maxHeight = '500px';
    } else {
        bloco1.style.opacity = '1';
        bloco1.style.maxHeight = '500px';
    }
}