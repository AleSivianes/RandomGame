let numeroAleatorio;
let comprobar=document.querySelector(`#comprobar`)
let limpiaStorage=document.querySelector(`.borrarDatos`)
let divResultado=document.querySelector(`#resultado`)
let divEstadistica=document.querySelector(`#estadisticas`)
let exitosos=localStorage.getItem(`exitosos`)|| 0;
let fallidos=localStorage.getItem(`fallidos`)|| 0;

function numberAleatorio(){
    numeroAleatorio=Math.random;
}

function verificarNumero(){
    let inputNumeroUsuario=document.querySelector(`#numeroUsuario`)


    if(inputNumeroUsuario===numeroAleatorio){
        exitosos++;
        localStorage.setItem(`exitosos`)
    }else{
        fallidos++;
        localStorage.setItem(`fallidos`)
    }

}

function limpiarDatos(){
    localStorage.clear();
    localStorage.reload();

}