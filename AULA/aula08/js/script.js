
/*// converter 
let paragrafo1 = document.getElementsByClassName('impar');
let arrayPar1 = Array.from(paragrafo1);

arrayPar1.forEach(element1 => {
    console.log(element1);
});

//
let paragrafo2 = document.querySelectorAll('.impar');
paragrafo2.forEach(element => {
    console.log(element);
});


//puxar imagem
let imagem = document.querySelectorAll('img');

imagem.forEach(elem => {
    console.log(imagem);
});

let paragrafo = document.querySelector('p');
console.log(paragrafo);

let fundo = document.getElementsByTagName('body');*/


const corpo = document.querySelector('body');
const botao = document.getElementById('modoEscuro');


function modoEscuro() {
    if(corpo.classList.contains('escuro')){
        corpo.classList.remove('escuro');
        botao.innerText = "Modo Escuro";
        
    }else{
        corpo.classList.add('escuro');
        botao.innerText = "Modo Claro";
    }
}

function alterarModo() {
    const textoVermelho = document.querySelectorAll('.texto-vermelho');
        
        if(textoVermelho.length > 0){
            textoVermelho.forEach(texto => {
                texto.classList.replace('texto-vermelho','texto-azul')
            });
        }else{
            const textoAzul = document.querySelectorAll('.texto-azul');

            if(textoAzul.length > 0){
                textoAzul.forEach(texto => {
                    texto.classList.replace('texto-azul','texto-vermelho')
                });
            }
        }
        corpo.classList.toggle('escuro');    

    }   

