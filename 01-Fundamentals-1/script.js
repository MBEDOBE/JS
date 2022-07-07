let js = 'Mbedobe on 100-days of code';

console.log(30 + 20 + 15 - 8);

//values are just a piece of data

('daniel'); //is a value

// declare a variable

let lastName = 'KUNJI'; // lastName is the variable

//output in browser
console.log(lastName);

//boolean
let learnJavaScript = true;
console.log(learnJavaScript);

//use typeof to det. the type of the value
// console.log(typeof true);
console.log(typeof learnJavaScript);
// console.log(typeof 45);
// console.log(typeof 'Ngeebi');

//dynamic typing
learnJavaScript = 'Yes!';
console.log(typeof learnJavaScript);

// undefined
let year;
console.log(year);
console.log(typeof year);

// dynamic
year = 1991;
console.log(typeof year);

// typeof bug not corrected for legacy reasons
console.log(typeof null); //reports null as object instead of null just like in undefined

// math operators
const now = 2024;
const ageNgeebi = now - 2021;
const ageEsi = now - 1989;
console.log(ageNgeebi, ageEsi);

console.log(ageNgeebi * 2, ageNgeebi / 10, 2 ** 3);
//2**3 means 2 to the power of 3 = 2*2*2

const firstName = 'Mbedobe';
const lastName2 = 'Kunji';
console.log(firstName + ' ' + lastName2);

//assignment operators
let x = 4 + 9; //x=15
x += 9; //x= x + 10 = 22
x *= 3; //x = x * 3=66
x++; //x=x+1 = 67
x--; //x=x-1=66
console.log(x);

//comparison operators
console.log(ageNgeebi > ageEsi); //>,<,>=,<=
console.log(ageNgeebi >= 18);

//precedence
const now2 = 2025;
const ageB = now - 1978;
const ageA = now - 2018;

let z, y;
z = y = 25 - 10 - 5; //z=y=10
console.log(z, y);

const averageAge = (ageB + ageA) / 2;
console.log(ageB, ageA, averageAge);

//coding challenge

//formula : BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

