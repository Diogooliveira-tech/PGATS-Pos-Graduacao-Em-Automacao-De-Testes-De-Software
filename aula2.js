let nome = "Júlio" //Declarando e atrituindo valor a uma variavél
nome = "Yubram"
nome += " Guevara"
// nome = nome + "Guevara"
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


// (salario++) //aqui estamos fazendo o console do salario e depois usando o ++, pois isso no console imprime 5000  (++ depois aumenta mas mostra o valor somente na linha debaixo)

/*linha 21 seria esse o exemplo
    console.log(salario); //mostra salario    
    salario += 1 //aumenta o salario primeiro
    console.log(salario); //pra imprimir o Novo salario 5001 tem que dar mais um console.  
/*

// (++salario) //aqui ele vai fazer o console do salario mas antes ele ira acrescentar/aumentar o salario, logo será 5001 (++ antes já aumenta e mostra na mesma linha)

/*linha 29 seria esse o exemplo
    salario += 1 //aumenta o salario primeiro
    console.log(salario); //mostra salario 5001
    console.log(salario); //mostra Novo salario
/*

// abaixo funciona da mesma forma que o exemplo acima
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

//Tipos de Dados
/*
- String: Sequência de caracteres, como "hello" ou 'world'.
- Number: Números, inteiros ou de ponto flutuante, como 42 ou 3.14.
- Boolean: Valores verdadeiro (true) ou falso (false).
- Undefined: Indica que uma variável foi declarada, mas ainda não foi atribuída a um valor.
- Null: Indica que uma variável não tem valor. É um valor "vazio".
- Object: Uma coleção de pares chave-valor, onde os valores podem ser de qualquer tipo, incluindo funções e arrays.
- Array: Uma estrutura de dados que armazena uma coleção ordenada de valores.
- Function: Um objeto que contém um bloco de código reutilizável. Funções são "cidadãos de primeira classe" em JavaScript, o que significa que podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.
- Symbol: Um tipo primitivo introduzido no ECMAScript 6, usado para criar identificadores únicos para propriedades de objetos.
- Além desses tipos de dados básicos, JavaScript também tem dois tipos de dados compostos, que são derivados dos tipos de dados primitivos:
- Object: Usado para armazenar coleções de dados e mais complexo que os tipos primitivos. Isso inclui objetos literais, funções, arrays e outros objetos.
- Array: Uma estrutura de dados especializada para armazenar valores sequenciais.
*/

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
// o -- antes ou depois, só importa quando você está ultilizando na linha atual
// o -- antes ou depois, não importa quando você vai ultilizar a variavel na linha debaixo
// console.log(linguagensDeProgramacao.join(" e "))

//exemplo de vetor ou array
const ferramentasDeTestes = [
    "cypress",
    "selenium",
    "playwright",
    "nightwatch.js"
];
console.log(ferramentasDeTestes[0])
console.log(ferramentasDeTestes[1])
console.log(ferramentasDeTestes[2])
console.log(ferramentasDeTestes[3])
console.log(`As ferramentas que eu já trabalhei foram ${ferramentasDeTestes[0]}, ${ferramentasDeTestes[2]} e ${ferramentasDeTestes[3]}, já a ferramenta ${ferramentasDeTestes[1]} estou aprendendo.`)


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

// meu exercicio

//let itens = [] isso é o Vetor
// a lista de coisas dentro [] é os intens de dentro do Vetor
let itens = [
    5 + valor,
    5.99 - valor,
    50 / valor,
    7 * valor
];

console.log( itens[1] + itens[3] );


/* // Vimos três erros
1- Erro de referencia(ReferenceError) = ultilizando alguma coisa que não foi declarada;
2- Erro de tipo(TypeError) = Você está tentando atribuir algo para um tipo de variavel que não pode ser atribuida;
3- Erro de Syntax(SyntaxError) = Que fala o identificador 'idade' já foi declarado. "Identifier 'idade' has already bee declaread";
*/

/*
Casos mais comuns para uso de const no código?
-Pergunta 1: Todas as vezes que eu for criar um código tenho que persar, preciso guardar um valor em algum lugar
-Pergunta 2: Esse valor vai ser alterado? Se a resposta for não, logo ele será uma Constante.
*/

/*
Em JavaScript, tanto const quanto let são utilizados para declarar variáveis, mas existem diferenças importantes entre eles:

const
1. Imutabilidade da Referência: Uma variável declarada com const não pode ser reatribuída após sua inicialização.
Isso significa que você não pode alterar a referência de um objeto ou valor primitivo atribuído a uma variável const.

const x = 10;
x = 20; // Erro: Assignment to constant variable.

2. Escopo de Bloco: Assim como let, as variáveis const têm escopo de bloco. Elas são visíveis apenas dentro do bloco onde foram declaradas.

if (true) {
  const y = 20;
  console.log(y); // 20
}
console.log(y); // Erro: y is not defined

3. Objetos e Arrays: Embora a referência de um objeto ou array declarado com const não possa ser alterada, as propriedades ou elementos internos ainda podem ser modificados.

const obj = {a: 1};
obj.a = 2; // Funciona
obj = {b: 3}; // Erro: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); // Funciona
arr = [5, 6, 7]; // Erro: Assignment to constant variable.

**let**

1. Mutabilidade da Referência: Uma variável declarada com let pode ser reatribuída. Isso significa que você pode mudar o valor da variável após sua declaração.
let a = 10;
a = 20; // Funciona

2. Escopo de Bloco: Variáveis declaradas com let também têm escopo de bloco, sendo visíveis apenas dentro do bloco onde foram declaradas.
if (true) {
  let b = 30;
  console.log(b); // 30
}
console.log(b); // Erro: b is not defined


**Comparação com var**
Para entender melhor, é útil comparar const e let com var, que era a maneira tradicional de declarar variáveis antes do ES6:

var tem escopo de função e não de bloco.
var permite reatribuição e redefinição dentro do mesmo escopo.
var é inicializada como undefined no início do contexto de execução (hoisting), enquanto const e let não são inicializadas até que a declaração seja avaliada.

Resumo: 
Use const quando não pretende reatribuir a variável.
Use let quando a variável pode ser reatribuída.
Ambas const e let têm escopo de bloco, proporcionando um controle mais preciso sobre a visibilidade das variáveis comparado com var.

*/


// Convenção para nome e tipo de variaveis?

// Sim, existem convenções amplamente aceitas para nomeação e tipo de variáveis em JavaScript que ajudam a manter o código claro e consistente. Embora não sejam regras obrigatórias, segui-las pode melhorar a legibilidade e a manutenção do código. Aqui estão algumas das convenções mais comuns:

// **Convenções de Nomeação**

// 1. CamelCase: Use camelCase para nomear variáveis e funções. A primeira letra é minúscula e cada palavra subsequente começa com uma letra maiúscula.
//     let myVariable = 10;
//     function calculateTotal() { /* ... */ }

// 2. PascalCase: Use PascalCase para nomear construtores e classes. Cada palavra começa com uma letra maiúscula.
//     class MyClass { /* ... */ }
//     function MyConstructor() { /* ... */ }

// 3. Snake_Case: É menos comum em JavaScript, mas às vezes é usado para constantes que representam valores fixos.
//     const MAX_VALUE = 100;

// 4. Descrições Significativas: Use nomes descritivos que indiquem claramente o propósito da variável ou função.
//     let totalPrice = 150;
//     function fetchData() { /* ... */ }


// **Convenções de Tipo de Variáveis**
 
// 1. Tipos Primitivos:

// -Números: Use let ou const para declarar variáveis numéricas.
//     let age = 25;
//     const pi = 3.14;

// -Strings: Declare strings com aspas simples (`'`) ou duplas (`"`), mas seja consistente na escolha.
//     let firstName = 'John';
//     const greeting = "Hello, world!";

// -Booleans: Use true ou false para valores booleanos.
//     let isActive = true;
//     const isComplete = false;

// 2. Objetos e Arrays:

// -Objetos: Use chaves (`{}`) para declarar objetos e const se a referência não mudar.
//     const person = {
//         name: 'Alice',
//         age: 30
//     };

// -Arrays: Use colchetes (`[]`) para declarar arrays e const se a referência não mudar.
//     const numbers = [1, 2, 3, 4, 5];


//  **Outras Convenções**
 
// 1. Uso de Prefixos: Algumas equipes usam prefixos para indicar o tipo de dado ou o propósito da variável. Por exemplo, `is` para booleanos, `num` para números   
//     let isReady = false;
//     let numItems = 10;
 
// 2. Constantes: Nomeie constantes com letras maiúsculas e use underscores (`_`) para separar palavras.
//     const MAX_HEIGHT = 200;

// 3. Funções: Use verbos para funções, pois elas realizam ações.
//     function calculateSum(a, b) { return a + b; }
//     function fetchData() { /* ... */ }

//   **Exemplos**: Aqui estão alguns exemplos combinando essas convenções:

//     const MAX_USERS = 100;

//     let currentUsers = 0;
//     let userName = 'JohnDoe';
//     let isUserActive = true;
    
//     const user = {
//         id: 1,
//         name: 'Alice',
//         age: 25,
//         isActive: true
//     };
    
//     const numbers = [1, 2, 3, 4, 5];
    
//     function addUser(name) {
//         if (currentUsers < MAX_USERS) {
//         currentUsers++;
//         console.log(`User ${name} added.`);
//         } else {
//         console.log('Max users reached.');
//         }
//     }
    
// Seguir essas convenções pode ajudar a tornar o código mais fácil de entender e manter.

/* 
### Nomenclatura de Variáveis e Constantes
**JavaScript para Automação de Testes**

#### Conceito
Ao nomear variáveis, siga as recomendações gerais da linguagem de programação JavaScript:
- Os nomes podem conter letras, dígitos, sublinhados e cifrões.
- Os nomes devem começar com uma letra, `$` ou `_`.
- Os nomes diferenciam maiúsculas de minúsculas (y e Y são variáveis diferentes).
- Palavras reservadas (como palavras-chave JavaScript) não podem ser usadas como nomes.

#### Palavras Reservadas (Proibidas)

| abstract    | arguments   | await*      | boolean     |
|-------------|-------------|-------------|-------------|
| break       | byte        | case        | catch       |
| char        | class*      | const*      | continue    |
| debugger    | default     | delete      | do          |
| double      | else        | enum*       | eval        |
| export*     | extends*    | false       | final       |
| finally     | float       | for         | function    |
| goto        | if          | implements  | import*     |
| in          | instanceof  | int         | interface   |
| let*        | long        | native      | new         |
| null        | package     | private     | protected   |
| public      | return      | short       | static      |
| super*      | switch      | synchronized| this        |
| throw       | throws      | transient   | true        |
| try         | typeof      | var         | void        |
| volatile    | while       | with        | yield       |

*As palavras-chave com * podem ser restritas em alguns contextos.
*/