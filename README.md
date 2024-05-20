### PGATS- Pos-Graduação Em Automação de Testes de Software

### Trabalho de conclusão de disciplina de Programação para Automação de Testes.

[PGATS-2024-01] Programação para Automação de Testes
A realização desse trabalho é individual e tem o objetivo alcançar a nota de conclusão de disciplina de Programação para Automação de Testes.

Problema:

Os usuários do sistema de compras tem uma lista onde podem ver nomes de ferramentas de automação de testes disponíveis para compra, essa lista contém seu nome, preço e o fabricante. Eles podem ter também uma lista com nomes das ferramentas que gostariam de comprar. 

Missão:

- Receber a lista de ferramentas disponíveis para a compra e a lista de ferramentas que deseja comprar
- Calcular o total a ser pago pelas ferramentas que deseja comprar retornando a mensagem "O valor a pagar pelas ferramentas (Nome da Ferramenta, Nome da Ferramenta, Nome da Ferramenta) é R$ 999.99". A função e mensagem retornada devem ser capazes de lidar com quantas ferramentas forem passadas como parâmetro.
- Se a lista de ferramentas disponíveis ou a lista de ferramentas para comprar estiverem vazias, um erro com a mensagem "Ambas as listas precisam ter ao menos um item." deve ser exibido.
- Se as ferramentas a comprar não forem encontradas na lista de ferramentas a venda, um erro com a mensagem "Nenhuma ferramenta desejada encontrada." deverá ser exibido.

Testes:

https://gist.github.com/juliointest/e65ec5820536d26735595fe6b258fdad

Instruções:

- Crie uma nova pasta em seu computador onde será armazenado o projeto
- Comece o projeto com o comando npm init
- Instale o mocha usando o comando npm install -D mocha
- Configure o arquivo packages.js conforme aprendemos em aula para que o comando npm test possa executar os testes com mocha
- Crie a pasta test e a pasta src dentro da raiz do projeto
- Crie uma pasta chamada compras em ambas as pastas
- Crie um arquivo chamado compras.js dentro da pasta src/compras 
- Crie e exporte a função calcularTotal, ela deve ter dois parâmetros: ferramentas, comprar
- Crie um arquivo chamado compras.test.js dentro da pasta test/compras 
- Copie os testes contidos no gist acima e cole dentro do arquivo compras.test.js

Atividade:

Crie a função mencionada no problema acima e escreva dentro dela a programação necessária para fazer o teste calculo.test.js passarem. Não altere os testes do calculo.test.js, eles já estão funcionando e NÃO devem ser alterados. Sua tarefa é escrever a função que esses testes estão testando. Quando todos passarem e sua função estiver escrita obedecendo o problema estipulado, você conseguiu concluir sua atividade. 

Exemplo de uso da função:

const ferramentas = [
                   { nome: "UFT", preco: 100, fabricante: "OpenText" },
   { nome: "TestComplete", preco: 200, fabricante: "Smartbear" },
                   { nome: "TOSCA", preco: 300, fabricante: "Tricents" }
            ];

            const comprar = [ "UFT", "TOSCA" ];

            const resultado = calcularTotal(ferramentas, comprar);

ATENÇÃO: A função deve, obrigatóriamente, ter esse nome e esses dois parâmetros sendo ferramentas com uma lista de objetos e comprar uma lista de strings.

Dicas:

- Comece fazendo os testes passarem, depois disso, melhore o código para ficar mais bonito e organizado;
- Sua função não devetá ter console.log e nem comentários desnecessários, isso tirará pontos;
- Aprendemos na aula como apresentar mensagens de erro usando Exceções, retorne a esse ponto da aula se necessário.

Data da Entrega:

8 de maio de 2024
