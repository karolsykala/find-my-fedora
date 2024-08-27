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
    generateField(length, width) {
        this.grid = Math.rando
    }

    checkOutOfBound() {

    }

    foundHat() {

    }
}

const classTest = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);





const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


readline.question('Where do you want to move? Use WSAD: ', userInput => {
    classTest.print()
    console.log(`user input: ${userInput}`)
})





  //console.log(classTest)
  //classTest.print()

