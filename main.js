const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(grid) {
        this.grid = grid;
    }
    
    print() {
        console.log(this.grid.map(square => square.join('')).join(''))
        }
        //console.log(this.grid.join(''))
    
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


readline.question('Where do you want to move? Use numbers: ', userInput => {
    console.log(`user input: ${userInput}`)
})
const classTest = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);






  //console.log(classTest)
  //classTest.print()

