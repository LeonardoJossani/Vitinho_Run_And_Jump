const vitinho = document.querySelector('.vitinho');
const scorpion = document.querySelector('.scorpion');

const jump = () => {
    vitinho.classList.add('jump');

    setTimeout(() => {
        vitinho.classList.remove('jump');
    }, 400);
}

const loop = setInterval(() => {
    const scorpionPosition = scorpion.offsetLeft;
    const vitinhoPosition = +window.getComputedStyle(vitinho).bottom.replace('px', '');

    if (scorpionPosition <= 130 && scorpionPosition > 0 && vitinhoPosition < 80) {
        scorpion.style.animation = 'none';
        scorpion.style.left = `${scorpionPosition}px`;

        vitinho.style.animation = 'none';
        vitinho.style.bottom = `${vitinhoPosition}px`;

        vitinho.src = './images/gameover.png';
        vitinho.style.width = '150px';
        vitinho.style.marginLeft = '50px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);