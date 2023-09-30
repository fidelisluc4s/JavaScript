//Declare uma variável contendo uma string 
var nome = 'Zézin';

//Declare uma variável contendo um número dentro de uma string
var numero = '20';

//Declare uma variável com a sua idade
var idade = 31;

//Declare outra variável para contar a frase: Meu nome é SEU NOME e minha idade é SUA IDADE
var seuNome = 'Meu nome é SEU NOME e minha idade é SUA IDADE';

//Declare outras duas variáveis, uma com seu sobrenome e com seu nome exiba as mesmas juntas
var sobreNome = 'Asiudis'
var sobreAmbosNome = nome + ' ' + sobreNome;
console.log(sobreAmbosNome);

//Coloque a seguinte frase em uma variável: It's study time
var frase = 'It\'\s study time';
console.log(frase);

//Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);


//Operadores Aritméticos
var expoente = 2 ** 4; //16
var modulo = 14 % 5; //4

//Operadores Aritméticos(Strings)
var soma = '100' + 50; // 10050 concatenação
var subtracao = '100' - 50; //50 (conversão automática)
var multiplicacao = '100' * '2'; // 200 conversão automática
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

//NaN = Not a Number
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN(Not a Number)

//Operadores Aritméticos Unários
var incremento = 5;
console.log(incremento++); // 5(pós incremento)
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6(pré-incremento)
console.log(incremento2); // 6

var incremento3 = 5;
console.log(incremento3--); // 5(pós incremento)
console.log(incremento3); // 4(pós incremento)

var incremento4 = 5;
console.log(--incremento4);
console.log(incremento4);

// O + e - tenta transformar o valor segunte em número

var frase = 'Isso é um teste';
+frase; //NaN
-frase; // NaN

var idade = '28';
+idade; // 28(número)(conversão automática)
-idade; // -28(número) (conversão automática)
console.log(+idade + 5); // 33

var frequente = true;
console.log(+frequente); // 1

//Verifique se a expressao é verdadeira 

var possuiGraduacao = true;

if (possuiGraduacao) {
    console.log('possui graduação');
} else {
    console.log('Não possui graduação');
}

var possuiGraduacao2 = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}

//Switch

var corFavorita = null;

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para rosas.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    default:
        console.log('Feche os olhos');
}

//Operadores de comparação === faz um comparação do tipo de dado deve ser o mesmo

10 == '10'; // true
10 === '10'; //false
10 === 10; //true
10 != 15; // true
10 != '10'; // false
10 !== '10'; //true

//Opradores Lógicos &&
/*
true && true; // true
true && false; // false
false && true // false
'gato' && 'cao' // 'cao'
(5 - 5) && (5 + 5); // 0
'gata' && false; // false
(5 >= 5) && (3 < 6); // true 
*/
// Operadores ||

true || true; // true
true || false; // true
false || true; // true
'gato' || 'cao'; // 'gato'
(5 - 5) || (5 + 5); // 10
'gato' || false; // gato
(5 > 5) || (3 < 6); // true

//Verifique se a sua idade é maior do que a de algum parente ... Dependendo do resultado coloque no console 'É maior', 'É igual'
var idadeVo = 75;
if (idade > idadeVo) {
    console.log("é maior");
} if (idade == idadeVo) {
    console.log("é igual");
} else {
    console.log("é menor");
}

//Qual valor é retornado na seguinte expressão? var expressao = (5-2) && (5-' ') && (5-2);
//3

//Operador Ternário
var frequencia = 70;
var passou = (frequencia >= 75) ? 'Passou' : 'Não passiou'; console.log(passou);

//Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
var scrolll = 500;
var valor = scroll + scrolll;
console.log(valor);

//Atribua true para a variável darCredito, caso o cliente possua carro e casa e false caso o contrário
var possuiCarro = false, possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa) ? 'DaCredito' : 'Não daCredito'; console.log(darCredito);