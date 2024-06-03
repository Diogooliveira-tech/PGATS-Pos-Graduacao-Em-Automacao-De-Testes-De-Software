// EXERCICIO AULA 3 - PARTE 2 == ARQUIVO AULA 4.

/*
    Decomposição
    //Especie de check list
    
    (x) Saber a idade da pessoa
    (x) Saber o pesso da pessoa
    (x) Calcular o IMC
    (x) Saber a altura da pessoa
    (x) Classificar a pessoa 
    (x) Verificar se a idade está no intervalo >= 20 e <= 60
    (x) Informar a pessoa que ela não tem idade adequada quando não está no intervalo definido

    Reconhecimento de Padrões

    - Somente pessoas de 20 a 60 anos
    - Altura é sempre em metros
    - Pesso é sempre em kilos
    - A classificação depende de um intervalo de imc
    - Cada faixa de valor do IMC possui uma classificação
    - Tem apenas 4 faixas de resultados para classificar

    Abstração

    - Calcular o IMC e classificar somente as pessoas que possuem idade entre 20 e 60 anos

    Pensamento Algoritimico

    1. Perguntar a idade da pessoa
    2. Validar que idade informada está entre o intervalo de 20 a 60 anos (inclusive)
    3. Se não estiver dentro da faixa permitida de idade, informar a pessoa sobre isso e parar a execução
    4. Perguntar a altura da pessoa em metros
    5. Perguntar o peso da pessoa em kilos
    6. Calcular o IMC com base na fórmula peso / (altura x altura)
    7. Se o IMC for menor que 18,5 então classificar como "Baixo peso"
    8. Senão, verificar se o IMC estiver entre 18,5 e 24,99 então classificar como "Normal"
    9. Senão, verificar se o IMC estiver entre 25 e 29,99 então classificar como "Sobrepeso"
    10. Senão, verificar se o IMC é maior ou igual a 30 e então classificar como "Obesidade"
    11 . Dizer a classificação que a pessoa teve
*/

// 1. Perguntar a idade da pessoa
const idade = 30;

// 2. Validar que idade informada está entre o intervalo de 20 a 60 anos (inclusive)
if (idade < 20 || idade > 60) {
    // 3. Se não estiver dentro da faixa permitida de idade, informar a pessoa sobre isso e parar a execução
    console.log("Desculpe, sua idade não se enquadra para o cálculo do IMC");
} else {
    // 4. Perguntar a altura da pessoa em metros
    const altura = 1.70;

    // 5. Perguntar o peso da pessoa em kilos
    const peso = 86;

    // 6. Calcular o IMC com base na fórmula peso / (altura x altura)
    const imc = peso / (altura * altura);

    console.log(imc) //informa o imc ideal
    let classificacao;

    if (imc <= 18.5) {
        // 7. Se o IMC for menor que 18,5 então classificar como "Baixo peso"
        classificacao = "Baixo Peso"
    } else if (imc >= 18.5 && imc <= 24.99) {
        // 8. Senão, verificar se o IMC estiver entre 18,5 e 24,99 então classificar como "Normal"
        classificacao = "Normal"
    } else if (imc >= 25 && imc <= 29.99) {
        // 9. Senão, verificar se o IMC estiver entre 25 e 29,99 então classificar como "Sobrepeso"
        classificacao = "Sobrepeso"

    } else {
        // 10. Senão, verificar se o IMC é maior ou igual a 30 e então classificar como "Obesidade"
        classificacao = "Obesidade"
    }

    // 11 . Dizer a classificação que a pessoa teve
    console.log(`Seu IMC é classificado como: ${classificacao}`)
}









