const mario =  document.querySelector('.mario');
const pipe =  document.querySelector('.pipe');
const gameOverOverlay = document.querySelector('.game-over-overlay')
const restartButton = document.querySelector('.restart-button');
const jumpSound = document.getElementById('jump-sound')


// Função para o som de pulo
const playJumpSound = () => {
    jumpSound.currentTime = 0; // Reinicia o áudio, permitindo que ele seja reproduzido várias vezes seguidas
    jumpSound.play();
}

// Evento de pressionar uma tecla
document.addEventListener('keydown', () => {
    jump();
    playJumpSound(); // Chama a função para reproduzir o som de pulo
});


//2° vai disparar a funcao jump
const jump = () => {     
    //3°animação acontece
    mario.classList.add('jump');

    setTimeout(() => {
    //4° quando ela termina ela remove a class jump
        mario.classList.remove('jump');
    }, 500);
}

let isGameOver = false;

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    //pega o estilo que foi computado na imagem 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    console.log(marioPosition);

    if (!isGameOver && pipePosition <= 122 && pipePosition > 0 && marioPosition < 100) {
        isGameOver = true;  // Defina o jogo como encerrado
        clearInterval(loop);

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        gameOverOverlay.style.display = 'block';
    }

}, 10)


restartButton.addEventListener('click', () => {
    location.reload(); // Isso recarrega a página
});

//1° pressionar uma tecla
document.addEventListener('keydown', jump);  