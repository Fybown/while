# while
while operand for the first time

Simulação de um Sistema de navegação de uma nave interagindo com o usuário 

A primeira Váriavel é para o número de dobras que a nave passou 
let warpCount = 0

a segunda váriavel é a variavel que vai receber a opção que o usuario vai receber para cada pergunta
let chosenOption = ' '   (valor em string para o valor ser chamado com o valor da pergunta pedida no exercicio)

a terceira variavel é a variavel que vai receber o nome da nave 
let spaceship = prompt('Qual o nome da nave?')

após a criação da variavel de nome da nave criamos um prompt para ser retornado na variavel chosenOption.
chosenOption = prompt('Deseja entrar em dobra espacial? \n1- Sim\n2- Não')

sabendo que o programa para quando a resposta for um '2' (não) ou qualquer valor diferente de '1' e '2':
criamos um while e verificamos se a variavel chosenOption é == a '1', se for == a '1', permite que o programa entra no loop e com isso contabilizar mais uma dobra(warp) += 1
while (chosenOption == '1') {
warp += 1

depois da primeira pergunta começa a segunda onde entra no loop, armazenando em chosenOption para sobreescrever o valor anterior.
chosenOption = prompt('Deseja realizar a próxima dobra?\n1- Sim\n2- Não')
}

ficando assim:
while (chosenOption == '1') {
    warp += 1
    chosenOption = prompt('Deseja realizar a próxima dobra?\n1- Sim\n2- Não')
}

Ao final um alerta para imprimir o nome da nave e a quantidade de dobra espacial que ela passou.

alert('Nave: ' + spaceship + '\nNúmero de dobras: ' + warp)
