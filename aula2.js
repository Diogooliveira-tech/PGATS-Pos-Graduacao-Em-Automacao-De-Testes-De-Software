let nome = "Júlio" //Declarando e atrituindo valor a uma variavél
nome = "Yubram"
nome += " Guevara"
console.log(nome)

const idade = 42;
console.log(idade);

let salario = 5000;
salario += 1000;
// salario = salario + 1000
salario -= 1000;
console.log(salario);
// salario = salario - 1000

//salario = salario + 1
//salario += 1
console.log(--salario);
console.log(salario)

/*
   salario -= 1
   console.log(salario)
   console.log(salario)
*/

salario = 3000.00;
salario = 5000.00;
salario += 5000.00;
console.log(salario);

const possuiVistoDeTrabalho = true;
console.log(possuiVistoDeTrabalho);

const linguagensDeProgramacao = [ "js", "php", "java", "ruby" ];

console.log(linguagensDeProgramacao[0])
console.log(linguagensDeProgramacao[1])
console.log(linguagensDeProgramacao[2])
console.log(linguagensDeProgramacao[3])

let indice = 3;
console.log(linguagensDeProgramacao[indice]) // ruby
console.log(linguagensDeProgramacao[--indice]) // java
// console.log(linguagensDeProgramacao.join(" e "))

/* Exercico 1

    Crie uma variável que possui o valor 5. 
    Depois crie um vetor que possui 2 itens: 
        1) soma de 5 + a variável
        2) subtração de 5,99 menos a variável
    Apresente o valor dos itens do vetor no Console.
    Depois some os dois itens
    Depois apresente um texto dizendo:
        O resultados final é [resultado]
*/

//Correção

const valor = 5;

const resultadoSoma = 5 + valor;
const resultadoSubtracao = 5.99 - valor;

const calculos = [
    resultadoSoma, 
    resultadoSubtracao
];

console.log(calculos[0]);
console.log(calculos[1].toFixed(3));
// console.log(calculos[1].toFixed(3));

const somaDosItensDoVetor = calculos[0] + calculos[1];

console.log(`O resultados final é ${somaDosItensDoVetor}`);

// exercicio 2 almoço
const alimentosDoAlmoco =  [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Carne"
];
console.log(`Gostei mais do ${alimentosDoAlmoco[2]}`)








/*
String: Sequência de caracteres, como "hello" ou 'world'.

Number: Números, inteiros ou de ponto flutuante, como 42 ou 3.14.

Boolean: Valores verdadeiro (true) ou falso (false).

Undefined: Indica que uma variável foi declarada, mas ainda não foi atribuída a um valor.

Null: Indica que uma variável não tem valor. É um valor "vazio".

Object: Uma coleção de pares chave-valor, onde os valores podem ser de qualquer tipo, incluindo funções e arrays.

Array: Uma estrutura de dados que armazena uma coleção ordenada de valores.

Function: Um objeto que contém um bloco de código reutilizável. Funções são "cidadãos de primeira classe" em JavaScript, o que significa que podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.

Symbol: Um tipo primitivo introduzido no ECMAScript 6, usado para criar identificadores únicos para propriedades de objetos.

Além desses tipos de dados básicos, JavaScript também tem dois tipos de dados compostos, que são derivados dos tipos de dados primitivos:

Object: Usado para armazenar coleções de dados e mais complexo que os tipos primitivos. Isso inclui objetos literais, funções, arrays e outros objetos.

Array: Uma estrutura de dados especializada para armazenar valores sequenciais.
*/

/*
Vimos três erros

1- Erro de referencia(ReferenceError) = ultilizando alguma coisa que não foi declarada;
2- Erro de tipo(TypeError) = Você está tentando atribuir algo para um tipo de variavel que não pode ser atribuida;
3- Erro de Syntax(SyntaxError) = Que fala o identificador 'idade' já foi declarado. "Identifier 'idade' has already bee declaread";
*/