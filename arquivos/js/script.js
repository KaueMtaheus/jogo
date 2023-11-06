const mario =  document.querySelector('.mario');
const pipe =  document.querySelector('.pipe');


//2° vai disparar a funcao jump
const jump = () => {     
    //3°animação acontece
    mario.classList.add('jump');

    setTimeout(() => {
    //4° quando ela termina ela remove a class jump
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    //pega o estilo que foi computado na imagem 
    const marioPosition = window.getComputedStyle(mario).bottom;


    console.log(marioPosition);

    if (pipePosition <= 120) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

    }

}, 10)


//1° pressionar uma tecla
document.addEventListener('keydown', jump);  