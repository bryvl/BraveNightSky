//Set up Dice
//Roll is invoked by 'object.roll()'
var dice = {
    d4 : {
        sides: 4,
        roll: function () {
            var randomNum = Math.floor(Math.random() * this.sides) + 1;
            console.log(randomNum);
            return randomNum;
        } 
    },
    d6 : {
        sides: 6,
        roll: function () {
            var randomNum = Math.floor(Math.random() * this.sides) + 1;
            console.log(randomNum);
            return randomNum;
        } 
    },
    d8 : {
        sides: 8,
        roll: function () {
            var randomNum = Math.floor(Math.random() * this.sides) + 1;
            console.log(randomNum);
            return randomNum;
        } 
    },
    d10 : {
        sides: 10,
        roll: function () {
            var randomNum = Math.floor(Math.random() * this.sides) + 1;
            console.log(randomNum);
            return randomNum;
        } 
    },
    d12 : {
        sides: 12,
        roll: function () {
            var randomNum = Math.floor(Math.random() * this.sides) + 1;
            console.log(randomNum);
            return randomNum;
        } 
    },
    d20 : {
        sides: 20,
        roll: function () {
            var randomNum = Math.floor(Math.random() * this.sides) + 1;
            console.log(randomNum);
            return randomNum;
        }
    }
}