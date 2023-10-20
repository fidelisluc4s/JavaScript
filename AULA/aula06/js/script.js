/*var Lucas = {
    nome: "Lucas",
    matricula: 123456,
    nota: 8.0,
    frenquecia: 0.9 ,     
    alunoAprovado() {
        if((this.nota >= 6) && (this.frenquecia >= 0.7)){
            `aluno aprovado`;
        }else{
            `aluno reprovado`;
        }
    }    
    }; 
    
    var Maria = {
        nome: "Maria",
        matricula: 123456,
        nota: 8.0,
        frenquecia: 0.9 ,     
        alunoAprovado() {
            if((this.nota >= 6) && (this.frenquecia >= 0.7)){
                `aluno aprovado`;
            }else{
                `aluno reprovado`;
            }
        }    
        };
    
     var Juca = {
        nome: "Juca",
        matricula: 123456,
        nota: 8.0,
        frenquecia: 0.9 ,     
        alunoAprovado() {
            if((this.nota >= 6) && (this.frenquecia >= 0.7)){
                `aluno aprovado`;
            }else{
                `aluno reprovado`;
            }
        }    
        };  
         

/*console.log(`o ${aluno.nome}, tem a nota: ${aluno.nota} e a frenquecia: ${aluno.frenquecia} e foi ${aluno.alunoAprovado()}`);


console.log(aluno);
//add novo atributo no obj aluno
aluno.telefone = "32987946513";
console.log(aluno);*/


/*var texto = "Este é um texto";
console.log(texto.length);



var viannaJunior = [Lucas,Maria];


console.log(viannaJunior);

viannaJunior.push(Juca);

for (var i = 0; i < viannaJunior.length; i++){
   //console.log(viannaJunior[i].nome);
   console.log(viannaJunior[i]);
}*/

//Crie o objeto mariana, que tem o atributo numero e o metodo conta
//O metodo conta deve contar até o valor de numero e exibir a letra da musica

var Mariana = {        
        quantidade: 10,
        conta(){
            var letra = '';
            var ArrayMariana = [];
            for (var i = 1 ;i < this.quantidade ;i++){
                ArrayMariana.push(`é ${i} `);
                letra += 
                `Mariana conta ${i} \n`+
                `Mariana conta ${i}: ${ArrayMariana}, é!\n`;
                /*for (var j = 1; j <= i; j++) {
                    letra += `é ${j}, `;
                                        
                }*/

                //letra += ArrayMariana.toString();
                letra += `é! \n`;    
                letra += `Ana, viva a Mariana, viva a Mariana \n\n`;                                     
            };
            console.log(letra);    
        }             
}; 
Mariana.conta();




        
        