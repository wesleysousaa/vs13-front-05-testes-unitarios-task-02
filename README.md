<h1 style="text-align:center;">Task 01 - Testes Unitários (Jest)</h1>

# BDD

## Primeira questão (Suite 01)

### Cenário: Função que retorna o texto passado como parâmetro

### Para o 1 e 2 teste

> 🔴 Dado: mensagem

> 🟡 Quando: a mensagem for passada como parâmetro

> 🟢 Faça: retorne a mensagem

### Para o 3 teste

> 🔴 Dado: mensagem

> 🟡 Quando: a mensagem for do tipo string

> 🟢 Faça: retorne uma string com uma mensagem

### Para o 4 teste

> 🔴 Dado: mensagem

> 🟡 Quando: a mensagem for do tipo diferente de string

> 🟢 Faça: lançe um erro: O argumento deve ser uma string

## Segunda questão (Suite 02)

### Cenário: Função que retorna o number com a soma de n1 e n2

### Para o 1 teste

> 🔴 Dado: n1 e n2

> 🟡 Quando: se n1 e n2 forem number

> 🟢 Faça: retorne a soma dos dois

### Para o 2 teste

> 🔴 Dado: n1 e n2

> 🟡 Quando: se n1 e n2 forem number

> 🟢 Faça: retorne o resultado sendo do tipo number

### Para o 3 teste

> 🔴 Dado: n1 e n2

> 🟡 Quando: se n1 ou n2 forem string

> 🟢 Faça: lançe um erro: n1 e n2 precisam ser números

## Terceira questão (Suite 03)

### Cenário: Função que retorna diferentes mensagens a depender da entrada

### Para o 1 teste

> 🔴 Dado: texto

> 🟡 Quando: se texto for string e "Sim"

> 🟢 Faça: retorne "Parabéns"

### Para o 2 teste

> 🔴 Dado: texto

> 🟡 Quando: se texto for string e "Não"

> 🟢 Faça: retorne "Encerrando sua sessão…"

### Para o 3 teste

> 🔴 Dado: texto

> 🟡 Quando: se texto for string e não for nem "Sim" e nem "Não"

> 🟢 Faça: retorne "Você tem noções dos seus atos?"

### Para o 4 teste

> 🔴 Dado: texto

> 🟡 Quando: se texto for string

> 🟢 Faça: retorne uma mensagem no formato de string

### Para o 5 teste

> 🔴 Dado: texto

> 🟡 Quando: se texto não for uma string

> 🟢 Faça: lançe Texto precisa ser string

## Quarta questão (Suite 04)

### Cenário: Função que retorna uma mensagem do cliente e atendente

### Para o 1 teste

> 🔴 Dado: cliente e atendente

> 🟡 Quando: se texto for string e cliente for "Wesley" e atendente for "Pedro"

> 🟢 Faça: retorne "Olá Wesley eu me chamo Pedro, em que posso ajudar?"

### Para o 2 teste

> 🔴 Dado: cliente e atendente

> 🟡 Quando: se texto for string e cliente for "Wesley" e atendente for "Pedro"

> 🟢 Faça: retorne "Olá Wesley eu me chamo Pedro, em que posso ajudar?" no formato string

### Para o 3 teste

> 🔴 Dado: cliente e atendente

> 🟡 Quando: se texto for string e cliente for 2 e atendente for "Maria"

> 🟢 Faça: lançe cliente E atendente precisam ser string

## Quinta questão (Suite 05)

### Cenário: Função que retorna uma mensagem com um texto de dias, minutos e segundos a partir de uma quantidade de segundos fornecido como parametro

### Para o 1 teste

> 🔴 Dado: segundos

> 🟡 Quando: se os segundos forem 200000 e number

> 🟢 Faça: retorne "Em 200000 segundos temos: 2 dias, 7 horas, 33 minutos e 20 segundos."

### Para o 2 teste

> 🔴 Dado: segundos

> 🟡 Quando: se os segundos forem 200000 e number

> 🟢 Faça: retorne "Em 200000 segundos temos: 2 dias, 7 horas, 33 minutos e 20 segundos." em formato string

### Para o 3 teste

> 🔴 Dado: segundos

> 🟡 Quando: se os segundos forem "s" como o formato string

> 🟢 Faça: lançe "O argumento deve ser um número"

## Sexta questão (Suite 06)

### Cenário: Função que retorna uma mensagem se o ano é bisexto ou não

### Para o 1 teste

> 🔴 Dado: ano

> 🟡 Quando: se o ano for divisível por 400 ou se for divisível por 4 e não por 100. e for 2024

> 🟢 Faça: retorne "2024 é um ano bissexto."

### Para o 2 teste

> 🔴 Dado: ano

> 🟡 Quando: se o ano for divisível por 400 ou se for divisível por 4 e não por 100. e for 2024

> 🟢 Faça: retorne "2024 é um ano bissexto." no formato string

### Para o 3 teste

> 🔴 Dado: ano

> 🟡 Quando: se o ano for "a" no formato string

> 🟢 Faça: lançe O argumento deve ser um número

## Sétima questão (Suite 07)

### Cenário: Função que retorna o valor de uma operação a depender da escolha do usuário

### Para o 1 teste

> 🔴 Dado: operador, num1 e num2

> 🟡 Quando: se o operador for + no formato string e num1 e num2 forem 2 e 2 do tipo number

> 🟢 Faça: retorne 4

### Para o 2 teste

> 🔴 Dado: operador, num1 e num2

> 🟡 Quando: se o operador for - no formato string e num1 e num2 forem 2 e 2 do tipo number

> 🟢 Faça: retorne 0

### Para o 3 teste

> 🔴 Dado: operador, num1 e num2

> 🟡 Quando: se o operador for / no formato string e num1 e num2 forem 2 e 2 do tipo number

> 🟢 Faça: retorne 1

### Para o 4 teste

> 🔴 Dado: operador, num1 e num2

> 🟡 Quando: se o operador for \* no formato string e num1 e num2 forem 2 e 2 do tipo number

> 🟢 Faça: retorne 4

### Para o 5 teste

> 🔴 Dado: operador, num1 e num2

> 🟡 Quando: se o operador for 1 no formato number e num1 e num2 forem 2 e 2 do tipo number

> 🟢 Faça: lançe Operação inválida

### Para o 6 teste

> 🔴 Dado: operador, num1 e num2

> 🟡 Quando: se o operador for + no formato string e num1 e num2 forem "a" do tipo string e 2 do tipo number

> 🟢 Faça: lançe Os argumentos de (num1 e num2) devem ser um números

### Para o 7 teste

> 🔴 Dado: operador, num1 e num2

> 🟡 Quando: se o operador for + no formato string e num1 e num2 forem 2 do tipo number e "a" do tipo string

> 🟢 Faça: lançe Os argumentos de (num1 e num2) devem ser um números

### Para o 8 teste

> 🔴 Dado: operador, num1 e num2

> 🟡 Quando: se o operador for % no formato string e não for mapeado pelo sistema e num1 e num2 forem 2 do tipo number e 2 do tipo number

> 🟢 Faça: lançe Operação inválida

## Oitava questão (Suite 08)

### Cenário: O usuário fornece 3 notas com seus respectivos pesos para receber sua média ponderada

### Para o 1 teste

> 🔴 Dado: nota1, nota2 e nota3

> 🟡 Quando: nota1, nota2 e nota3 forem do tipo {nota: number, peso: number} e os seus valores forem nota1{ nota: 3, peso: 7 }, nota2{ nota: 4, peso: 7 }, nota3{ nota: 5, peso: 1 }

> 🟢 Faça: retorne "A média ponderada do aluno é: 3.60"

### Para o 2 teste

> 🔴 Dado: nota1, nota2 e nota3

> 🟡 Quando: nota1, nota2 e nota3 não forem do tipo {nota: number, peso: number} e os seus valores forem nota1"{fake objeto}", nota2{ nota: 4, peso: 7 }, nota3{ nota: 5, peso: 1 }

> 🟢 Faça: Lançe Os argumentos devem ser um objeto

### Para o 3 teste

> 🔴 Dado: nota1, nota2 e nota3

> 🟡 Quando: nota1, nota2 e nota3 não forem do tipo {nota: number, peso: number} e os seus valores forem nota1{ nota: "a", peso: 7 }, nota2{ nota: null, peso: 7 }, nota3{ nota: 5, peso: 1 }

> 🟢 Faça: Lançe Os argumentos de (nota e peso) devem ser um números
