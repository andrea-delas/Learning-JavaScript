// CODING CHALLENGE 4

/*
We are going to compare Mark's and John's BMIs.
1. For each of them, create an object with properties for their
full name, mass and height.
2. Then, add a method to each object to calculate the BMI.
Save the BMI to the object and also return it from the method.
3.  In the end, log to the console who has the highest BMI,
together with the full name and the respective BMI.
Don't forget they might have the same BMI.
*/



var john = {
	fullName: 'John Smith',
	mass: 95,
	height: 1.95,
	calcBmi: function(mass, height) {
		this.bmi = this.mass / (this.height * this.height);
	}
};

var mark = {
	fullName: 'Mark Johnson',
	mass: 75,
	height: 1.90,
	calcBmi: function(mass, height) {
		this.bmi = this.mass / (this.height * this.height);
	}	
};

john.calcBmi();
mark.calcBmi();


if (john.bmi > mark.bmi) {
	console.log(john.fullName + ' has the higher BMI then ' + mark.fullName + ' with BMI of: ' + john.bmi);
} else if (mark.bmi > john.bmi) {
	console.log(mark.fullName + ' has the higher BMI then ' + mark.fullName + ' with BMI of: ' + mark.bmi);
} else {
	console.log('They both have the same BMI.');
};


