//selecionando imagem
let imagens =
['/assts/R.Lupin.webp',
'/assts/download.jpeg',
'assts/facil.webp'];

let atual = 0;

//essa função é para tag <button id> e <button onclick>
//essa função é para tag <a>
const slide = document.getElementById('slide');
slide.setAttribute('src',imagens[atual]);

const btnAvancar = document.getElementById('btnAvancar');
const btnVoltar = document.getElementById('btnVoltar');


//essa função é para tag <a>
const linkAvancar = document.getElementById('linkAvancar');
const linkVoltar = document.getElementById('linkVoltar');


//essa função é para tag <a>

linkAvancar.addEventListener('click', (event) =>{
    event.preventDefault();
    atual++;
    if(atual == imagens.length){atual = 0;}    
    slide.setAttribute('src',imagens[atual]);
});
linkVoltar.addEventListener('dblclick', (event) =>{
    event.preventDefault();
    atual--;
    if(atual == -1){atual = imagens.length-1;}
    slide.setAttribute('src',imagens[atual]);
});



//essa função é para tag <button id> e <button onclick>

/*function avancar() {
    
    atual++;
    if(atual == imagens.length){atual = 0;}
    
        slide.setAttribute('src',imagens[atual]);     
}


function voltar() {
    
    atual--;
    if(atual == -1){atual = imagens.length-1;}
    
        slide.setAttribute('src',imagens[atual]);     
}*/

