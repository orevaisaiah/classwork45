// function squareRoot(value){
//     let squareValue = Math.sqrt(value)
//     console.log(squareValue)
// }
// squareRoot(49);
// squareRoot(22);
 
// function triangeArea(base, height){
//     let areaValue = 0.5 * base * height
//     console.log(areaValue)
// }
// triangeArea(5,6);

// const dollars = 493;
// const pounds = 710;
// const euros = 593;
// function converter(naira){
//     let americanDollars = naira/dollars;
//     let britishPounds = naira/pounds;
//     let europeanEuros = naira/euros;
//     console.log(americanDollars, britishPounds, europeanEuros)
// }
// converter(1000000);

// const number = prompt('Please Enter Your Number:');
// let squareRoot = Math.sqrt(number);
// document.getElementById('sqrt').innerHTML = `The Square Root of ${number} is ${squareRoot}`;

const base = prompt('Enter The Base of Your Triangle:');
const height = prompt('Enter The Height of Your Triangle:');
let areaOfTriangle = 0.5 * base *height;
document.getElementById('sqrt').innerHTML = `The Area of a Triangle of ${base} and ${height} is ${areaOfTriangle}`;