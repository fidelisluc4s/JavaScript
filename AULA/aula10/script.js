/*let imagens =
['/assts/R.Lupin.webp',
'/assts/download.jpeg',
'assts/facil.webp'];



const nome = document.getElementById('name'); 
const senha = document.getElementById('senha');
const cadastro = document.getElementById('cadastro');
const enviar = document.getElementById('enviar');

//exibir nome e senha 
console.log(nome.value,senha.value);

cadastro.addEventListener('submit', event =>{
    event.preventDefault();
    const psenha = senha.value
    if(psenha.length <  6){
        alert(`${nome} a senha deve ter 6 digitos!`);
    }else{
        cadastro.submit();
    }
    
});*/


/*const testes = document.querySelectorAll('.teste');

function trocaNome(event) {
    event.preventDefault();
    event.target.innerText = "Clicou!";
}

testes.forEach(teste =>{
    teste.addEventListener('click', trocaNome);
})

window.addEventListener('keydown', event =>{
    console.log(event);
})

window.addEventListener('keydown', event =>{
    if(event.key == 'a'){
        document.body.classList.toggle('modoEscuro');
    }
})*/

/*const links = document.querySelectorAll('nav a');


links.forEach(link =>{
    link.addEventListener('click', event =>{
        event.preventDefault();
        document.body.innerHTML += '<p> Clicou! </p>';
    });
})


let linkLi = document.querySelector('li');

console.log(linkLi.innerHTML);*/


const menu = document.querySelector('nav');

const paragrafo = document.querySelector('p');

const conteudo = document.getElementById('conteudo');

const primeiroLi = document.querySelector('nav ul li');

const ultimoParagrafo = document.createElement('p');
ultimoParagrafo.innerText = "Último texto";

conteudo.appendChild(ultimoParagrafo);


