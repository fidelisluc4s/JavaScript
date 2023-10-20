/*var dados = [1,2,3,4,5,6,];

for (let i = 0; i < dados.length; i++) {
    console.log(dados[i]);
}

/*dados.forEach(function(batatinha){
    console.log(batatinha);
});

function imprimeItem(item) {
    console.log(item);
}
dados.forEach(imprimeItem)

'use strict'

const PI = 3.14;
var valor1 =132;
let valor2 = 456;
valor3 = 789;

console.log(PI, valor1, valor2, valor3);*/

/*let titulo = document.getElementById('titulo1');
titulo.innerText= "Novo Titulo";

let paragrafo = document.getElementById('paragrafo1');
//console.log(paragrafo);
paragrafo.innerText="novo paragrafo";*/

// Crie o objeto Mariana, que tem o atributo numero e o metodo conta
// O metodo conta deve contar até o valor de numero e exibir a letra
// da música



/*let mariana = {

    quantidade: 10,
    conta(){
        let letra = '';
        let contagem = [];
        let i = 1;
        while ( i <= this.quantidade){
            contagem.push(` é ${i} `);
            letra += 
            `Mariana conta ${i} \n`+
            `Mariana conta ${i}: ${contagem}, é!\n`;
            letra += `Ana, viva a Mariana, viva a Mariana \n\n`;
            i++;
        };
        return letra;;
    }
    
};
paragrafo.innerText = mariana.conta();*/
/*let paragrafos = document.getElementsByTagName('p');
paragrafos = innerText = "p";*/


/*var elefante = {
    numerox : 10,
    titulo : 'Um elefante incomoda muita gente',

        contadorUm() {
            contagem = [];
            letra = '';
            for(var i = 1; i <= this.numerox;i++){
                contagem.push(`incomodam `);
                if(i %2 == 0){
                    letra += ` ${i} elefantes ${contagem}`+
                    ` muito mais \n \n`+
                    ``
                }else{
                    letra +=
                    `${i} elefante incomoda muita gente \n`;
                }
            }
        },
        
        contadorDez() {
            for(var i = 10; i >= 1; i--){
                contagem.pop();
                if(i%2 !=0){
                    letra +=
                    `${i} elefantes ${contagem}, incomodam`+
                    ` muito mais \n\n`+
                    ``
                }else{
                    letra +=
                    `${i} elefante incomoda muita gente \n`
                }
                
            }
            return letra;      
        }

}

elefante.contadorUm();
elefante.contadorDez();



let titulo = document.getElementById('titulo');
titulo.innerText = elefante.titulo;

let paragrafo = document.getElementById('paragrafo');
paragrafo.innerText = elefante.contador();*/


/*let elefante = {
    quantidade : 10,
    conta(){
        let musica = "1 elefante incomoda muita gente\n";
        let incomodam = [`incomodam `];
        for (let i = 2; i <= this.quantidade; i++){
            incomodam.push(`incomodam `);

            if ( i % 2 == 1 ){
                musica += `${i} elefantes incomodam muita gente\n`;           
            }else{
                musica += `${i} elefantes ${incomodam} muito mais! \n`;
            }
        }

        musica +=`\n`;

        for (let i = this.quantidade; i >= 2; i--){
            if ( i % 2 == 0 ){
                musica += `${i} elefantes incomodam muita gente\n`;           
            }else{
                musica += `${i} elefantes ${incomodam} muito menos! \n`;
            }
            incomodam.pop();
        }

        musica += "1 elefante incomoda muito menos\n";
        console.log(musica);
    }
};*/

/*let pImpar = document.getElementsByTagName('p');
let paragrafo = document.getElementsByName('impar');
let divPrincipal = document.getElementsByTagName('div')

let selParagrafo = document.querySelector('#primeiro');*/

//let todosParagrafo = document.querySelectorAll('p');

//  let selImpar = document.querySelector('.impar')

