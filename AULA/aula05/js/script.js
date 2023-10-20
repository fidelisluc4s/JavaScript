/*function teste(parametro) {
    console.log(parametro);
}

var teste2 = function (params) {
    console.log(params);
}

var teste3 = (params) => {
    console.log(params);
}*/

var imc = (peso, altura) =>{
    
   return peso / (altura ** 2);

}

imc(80, 1.80);
console.log(imc(80, 1.80));



var perimetroQuadrado = (lado) =>{

    return lado*4;
}


console.log(perimetroQuadrado(5));

var nomeCompleto = (nome,snome) => {
    return nome + snome;
    // return '${nome} ${snome}';
}
console.log(nomeCompleto('Lucas','Fidelis'));


addEventListener ('click',()=>{

    console.log('Lucas','Fidelis');
});