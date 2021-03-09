const prompt = require("prompt-sync")({sigint: true});

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
    constructor(field) {
        this._field = field;
    }

    get field() {
        return this._field;
    }

    get fieldX() {
        return this._field[1].length;
    }

    get fieldY() {
        return this._field.length;
    }

    print() {
        let formatted = [];
        for(let arr of this.field){
            formatted.push(arr.join(""));
        }
        
        return formatted.join("\n");
    }

    play() {
        let y = 0;
        let x = 0;
        let player = this.field[y][x];
        this.field[y][x] = pathCharacter;
        let status = "";

        console.log(this.print());

        while (status !== "win" && status !== "fail") {
            
            let direction = prompt('Which direction would you like to take?(L,R,U,D):');

            if (direction.toUpperCase() === "R") {

                if (x + 1 <= this.fieldX - 1) {
                    x += 1;
                } else {
                    console.log("You left the field :(");
                    return false;
                }

                player = this.field[y][x];

                if (player === hole) {
                    status = "fail";
                    console.log("You fell in a hole :(");
                } else if (player === hat) {
                    status = "win";
                    console.log("You found the hat!!!");
                } else {
                    this.field[y][x] = pathCharacter;
                    console.log(this.print());
                }

            } else if (direction.toUpperCase() === "L") {
                
                if (x - 1 >= 0) {
                    x -= 1;
                } else {
                    console.log("You left the field :(");
                    return false;
                }

                player = this.field[y][x];

                if (player === hole) {
                    status = "fail";
                    console.log("You fell in a hole :(");
                } else if (player === hat) {
                    status = "win";
                    console.log("You found the hat!!!");
                } else {
                    this.field[y][x] = pathCharacter;
                    console.log(this.print());
                }

            } else if (direction.toUpperCase() === "U") {
                
                if (y - 1 >= 0) {
                    y -= 1;
                } else {
                    console.log("You left the field :(");
                    return false;
                }

                player = this.field[y][x];

                if (player === hole) {
                    status = "fail";
                    console.log("You fell in a hole :(");
                } else if (player === hat) {
                    status = "win";
                    console.log("You found the hat!!!");
                } else {
                    this.field[y][x] = pathCharacter;
                    console.log(this.print());
                }

            }   else if (direction.toUpperCase() === "D") {

                if (y + 1 < this.fieldY) {
                    y += 1;
                } else {
                    console.log("You left the field :(");
                    return false;
                }

                player = this.field[y][x];

                if (player === hole) {
                    status = "fail";
                    console.log("You fell in a hole :(");
                } else if (player === hat) {
                    status = "win";
                    console.log("You found the hat!!!");
                } else {
                    this.field[y][x] = pathCharacter;
                    console.log(this.print());
                }
            }
        
        }

        console.log("Play again!");
        
    }

}


const myField = new Field([
    ["*", "░", "░", "░", "O"],
    ["░", "O", "░", "░", "░"],
    ["░", "░", "░", "O", "░"],
    ["░", "O", "░", "░", "░"],
    ["░", "░", "░", "^", "░"], 
]);


myField.play();
// console.log(myField.fieldY)
