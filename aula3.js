// const almocos = [
//     [ "Salada", "Carne", "Bolo", "Vinho", "Sorvete" ],
//     [ "Arroz " + 1, 2, true ],
//     [ "Salada", null, "" ]
// ]

// almocos[2][0] = "Lasanha";

// console.log(`${almocos[2][0]}`)

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

// const comidasFavoritas = [ 
//     "Bife de Contra Filé", 
//     "Mandioca Frita", 
//     "Lasanha de Abobrinha" 
// ];

// console.log(`Eu gosto muito de: ${comidasFavoritas[0]}, ${comidasFavoritas[1]} e ${comidasFavoritas[2]}`)

// const tecladoTelefonico = [
//     [ 7, 8, 9 ],
//     [ 4, 5, 6 ],
//     [ 1, 2, 3 ],
//     [ "#", 0, "*" ]
// ]

// console.log(`Os números são: ${tecladoTelefonico[0][1]}, ${tecladoTelefonico[1][1]}, ${tecladoTelefonico[2][1]} e ${tecladoTelefonico[3][1]}`)

// /*
//     const pessoas = [
//         [ "Pedro Victor", 30, [ "Bolo Gelado", "Sushi", "Frango" ] ],
//         [ "Valéria Silva", 18, [ "Pizza", "Feijoada", "Strogonoff" ] ]
//     ]
// */

// const pessoa = {
//     nome: "Pedro Victor",
//     idade: 30, 
//     comidasFavoritas: [ "Bolo Gelado", "Sushi", "Frango" ]
// }

// console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos e gosta de ${pessoa.comidasFavoritas[0]}`)

// const pessoas = [
//     {
//         nome: "Pedro Victor",
//         idade: 30, 
//         comidasFavoritas: [ "Bolo Gelado", "Sushi", "Frango" ]
//     },
//     {
//         nome: "Valéria Silva",
//         idade: 18, 
//         comidasFavoritas: [ "Pizza", "Feijoada", "Strogonoff" ]
//     }
// ]

// console.log(pessoas[1].nome)

/* exercico Julio

    Construa um vetor com 5 objetos que estão na sala onde você está agora
    cada um dos objetos deverá ter suas propriedades (ex. tamanho, cor, nome, etc.)
    Depois disso, escreva no console quais são as informações relacionadas a 
    cada um dos objetos que você colocou no vetor.
*/

const objetosDaSala = [

    {
        nome: "Fone",
        tamanho: "30 centimetos",
        cor: ["Preto", "Vermelho"],
        peso: "29 gramas"
    },
    {
        nome: "Mouse",
        tamanho: "30 centimetos",
        cor: ["Preto", "Azul"],
        peso: "15 gramas"
    },
    {
        nome: "Teclado",
        tamanho: "30 centimetos",
        cor: [" Preto ", "Cinza", "Amarelo"],
        peso: "29 gramas"
    },
    {
        nome: "Monitor",
        tamanho: "30 centimetos",
        cor: [" Preto ", "Vermelho"],
        peso: "29 gramas"
    },
    {
        nome: "Fone",
        tamanho: "30 centimetos",
        cor: [" Preto ", "Laranja"],
        peso: "29 gramas"
    }
]

//Primeiro objeto
console.log(`O nome é ${objetosDaSala[1].nome}`)

//Segundo objeto


//Terceiro objeto


//Quarto objeto


//Quinto objeto


//Primeiro objeto