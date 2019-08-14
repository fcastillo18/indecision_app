// const square = function(x){
//     return x * x;
// }

// const squareArrow1 = (x) => {
//     return x * x;
// }

// const squareArrow2 = (x) => x * x; 

// console.log(squareArrow2(9));

const multiplier = {
    numbers: [5,8,9,1,3],
    multiplyBy: 10,
    multiply(){
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());