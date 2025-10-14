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
