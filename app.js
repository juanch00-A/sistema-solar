const navegation = document.getElementById('menu--navegation');
const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
    navegation.classList.toggle('resposive--dinamico');
    if(burger.src.split('img')[1]== '/hamburguesa.png'){
        burger.src ='/img/cruz.png';
    }else{
        burger.src ='/img/hamburguesa.png';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    if(window.innerWidth > 768){
        navegation.classList.add('resposive--dinamico')
    }
})

window.addEventListener('load',()=>{
    
})









