// MATRIZ 
//EXEMPLO 1
const almocos = [
    ["Salada", "Carne", "Bolo", "Vinho", "Sorvete"],
    ["Arroz " + 1, 2, true],
    ["Salada", null, ""]
]

almocos[2][0] = "Lasanha";
//console.log(`${almocos[2][0]}`)
// Trazendo Dois itens de vetores diferentes
console.log(`${almocos[0][4]} e ${almocos[2][0]}`)

//EXEMPLO 2
// const almocos = [
//     ["Salada", "Carne", "Bolo"],
//     ["Arroz", "Feijão", "Frango"],
//     ["Salada", "Fricassê", "Batata Palha"]
//   ]; 
// console.log(almocos[1][1]); // Feijão

/*
Tabela de Almoços:
 
| Índice | 0        | 1         | 2             |
|--------|----------|-----------|---------------|
| 0      | Salada   | Carne     | Bolo          |
| 1      | Arroz    | Feijão    | Frango        |
| 2      | Salada   | Fricassê  | Batata Palha  |
*/



// EXERCICIOS
// /* 
//     1. Crie um vetor com suas 3 comidas favoritas
//     2. Crie uma matriz que represente a tabela abaixo:

//     | 7 | 8 | 9 |
//     | 4 | 5 | 6 |
//     | 1 | 2 | 3 |
//     | # | 0 | * |

//     3. Escreva no console a seguinte frase:
//        Eu gosto muito de: comida 1, comida 2 e comida 3

//     4. Escreva os números contidos na coluna do meio da matriz
//        Os números são: 8, 5, 2 e 0
// */

//EXERCICIO 1
const comidasFavoritas = [
    "Bife de Contra Filé",
    "Mandioca Frita",
    "Lasanha de Abobrinha"
];
console.log(`Eu gosto muito de: ${comidasFavoritas[0]}, ${comidasFavoritas[1]} e ${comidasFavoritas[2]}`)

//EXERCICIO 2
const tecladoTelefonico = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ["#", 0, "*"]
]
console.log(`Os números são: ${tecladoTelefonico[0][1]}, ${tecladoTelefonico[1][1]}, ${tecladoTelefonico[2][1]} e ${tecladoTelefonico[3][1]}`)

// OBJETOS EM JAVASCRIPT
/*
    const pessoas = [
        [ "Pedro Victor", 30, [ "Bolo Gelado", "Sushi", "Frango" ] ],
        [ "Valéria Silva", 18, [ "Pizza", "Feijoada", "Strogonoff" ] ]
    ]
*/
/*
const pessoa = {
    nome: "Pedro Victor",
    idade: 30, 
    comidasFavoritas: [ "Bolo Gelado", "Sushi", "Frango" ]
}
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos e gosta de ${pessoa.comidasFavoritas[0]}`)
*/

// LISTA DE OBJETOS "VETOR DE OBJETOS" PARECIDO COM JSON
const pessoas = [
    {
        nome: "Pedro Victor",
        idade: 30,
        comidasFavoritas: ["Bolo Gelado", "Sushi", "Frango"]
    },
    {
        nome: "Valéria Silva",
        idade: 18,
        comidasFavoritas: ["Pizza", "Feijoada", "Strogonoff"]
    }
]
console.log(pessoas[1].nome)
console.log(pessoas[1].comidasFavoritas[1])

/* EXERCICIO Julio
    Construa um vetor com 5 objetos que estão na sala onde você está agora
    cada um dos objetos deverá ter suas propriedades (ex. tamanho, cor, nome, etc.)
    Depois disso, escreva no console quais são as informações relacionadas a 
    cada um dos objetos que você colocou no vetor.
*/

const objetos = [

    {
        id: 1,
        nome: "Fone",
        tamanho: "Pequeno",
        cores: ["Preto", "Vermelho"],
        peso: "29 gramas"
    },
    {
        id: 2,
        nome: "Mouse",
        tamanho: "Pequeno",
        cores: ["Preto", "Azul"],
        peso: "15 gramas"
    },
    {
        id: 3,
        nome: "Teclado",
        tamanho: "Médio",
        cores: [" Preto ", "Cinza", "Amarelo"],
        peso: "29 gramas"
    },
    {
        id: 4,
        nome: "Monitor",
        tamanho: "Grande",
        cores: [" Preto ", "Vermelho"],
        peso: "29 gramas"
    },
    {
        id: 5,
        nome: "Livros",
        caracteristicas: [
            {
                cor: "branco",
                quantidade: 3
            },
            {
                cor: "vermelho",
                quantidade: 2
            },
            {
                cor: "preto",
                quantidade: 5
            }
        ]
    }
]

//Primeiro objeto
console.log(`O ID é ${objetos[0].id}, o nome do objeto é ${objetos[0].nome} e possui um tamanho ${objetos[0].tamanho} e tem nas cores ${objetos[0].cores.join(", ")}`)

//Segundo objeto
console.log(`O ID é ${objetos[1].id}, o nome do objeto é ${objetos[1].nome} e possui um tamanho ${objetos[1].tamanho} e tem nas cores ${objetos[1].cores.join(", ")}`)

//Terceiro objeto
console.log(`O ID é ${objetos[2].id}, o nome do objeto é ${objetos[2].nome} e possui um tamanho ${objetos[2].tamanho} e tem nas cores ${objetos[2].cores.join(", ")}`)

//Quarto objeto
console.log(`O ID é ${objetos[3].id}, o nome do objeto é ${objetos[3].nome} e possui um tamanho ${objetos[3].tamanho} e tem nas cores ${objetos[3].cores.join(", ")}`)

//Quinto objeto
console.log(`Os livros do Diogo são classificados:`)
console.log(`ID -> ${objetos[4].id}`)
console.log(`Nome -> ${objetos[4].nome}`)
console.log(`Cor -> ${objetos[4].caracteristicas[0].cor}`)
console.log(`Quantidade -> ${objetos[4].caracteristicas[0].quantidade}`)

const videoGame = {
    marca: "Sony",
    modelo: "PS",
    versao: 5
}

console.log(`A marca do video-game é ${videoGame.marca}`)
console.log(`A marca do video-game é ${videoGame["marca"]}`)


/*
//USO DE LAÇOS EXEMPLO
//videoGame = objeto
for (let propriedade in videoGame) {
    console.log(propriedade)
}

//mostrar os valores que tem dentro usando template string
for (let propriedade in videoGame) {
    console.log(`O valor da propriedade ${propriedade} é ${videoGame[propriedade]}`)
}
*/


