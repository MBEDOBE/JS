// Coding Challenge 1

/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀 */

// solution
//dataset 1
const markWeight = 78;
const markHeigt = 1.69;
const johnWeight = 92;
const johnHeigt = 1.95;

const markBMI = markWeight / markHeigt ** 2;
const johnBMI = johnWeight / johnHeigt ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

//dataset 2
const markWeight2 = 95;
const markHeigt2 = 1.88;
const johnWeight2 = 85;
const johnHeigt2 = 1.76;

const markBMI2 = markWeight2 / (markHeigt2 * markHeigt2);
const johnBMI2 = johnWeight2 / johnHeigt2 ** 2;
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markBMI2, johnBMI2, markHigherBMI2);
