var massMark = 85;
var heightMark = 1.75;

var massJohn = 105;
var heightJohn = 1.80;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark);
console.log(bmiJohn);

var higherMark = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's? " + higherMark);