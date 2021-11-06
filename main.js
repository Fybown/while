let warp = 0
let chosenOption = ''

let spaceship = prompt('Qual o nome da nave?')

chosenOption = prompt('Deseja entrar em dobra espacial? \n1- Sim\n2- Não')

while (chosenOption == '1') {
  warp += 1
  chosenOption = prompt('Deseja realizar a próxima dobra?\n1- Sim\n2- Não')
}

alert('Nave: ' + spaceship + '\nNúmero de dobras: ' + warp)
