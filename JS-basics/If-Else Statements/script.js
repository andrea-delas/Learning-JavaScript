var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
	console.log(firstName + ' is married!');
} else {
	console.log (firstName + ' will hopefully marry soon :)');

}

var isMarried = true;
if (isMarried) {
	console.log(firstName + ' is married!');
} else {
	console.log (firstName + ' will hopefully marry soon :)');

}

var massMark = 112;
var heightMark = 1.75;

var massJohn = 105;
var heightJohn = 1.80;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
	console.log('Mark\'s BMI is higher than John\'s.');
} else {
	console.log('John\'s BMI is higher than Mark\'s.');
}