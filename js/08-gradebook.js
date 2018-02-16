/*eslint-env browser*/

//GLOBAL VARIABLES
var gradeUrsula, gradePaul, gradeHenry, gradeTabitha, gradeLucy;
var grades;
var gradeAlpha;
var gradeAverage = 0;

//COLLECT STUDENTS SCORES
gradeUrsula = parseInt(window.prompt("Enter the points for Ursula."));
gradePaul = parseInt(window.prompt("Enter the points for Paul."));
gradeHenry = parseInt(window.prompt("Enter the points for Henry."));
gradeTabitha = parseInt(window.prompt("Enter the points for Tabitha."));
gradeLucy = parseInt(window.prompt("Enter the points for Lucy."));

//CALCULATE CLASS AVERAGE
var grades = [gradeUrsula, gradePaul, gradeHenry, gradeTabitha, gradeLucy];

for(var i = 0; i < grades.length; i++) {
    gradeAverage += grades[i];
}
{
    var avg = gradeAverage / grades.length;
}
//CONVERT GRADES TO ALPHA
if < 60 {
    var gradeAlpha = "F";
}
else if < 70 {
    var gradeAlpha = "D";
}
else if < 80 {
    var gradeAlpha = "C";
}
else if < 90 {
    var gradeAlpha = "B";
}
else if < 100 {
    var gradeAlpha = "A";
}

console.log("Ursula's grade is " + gradeAlpha);
console.log("Paul's grade is " + gradeAlpha);
console.log("Henry's grade is " + gradeAlpha);
console.log("Tabitha's grade is " + gradeAlpha);
console.log("Lucy's grade is " + gradeAlpha);
console.log("Average Points: " + (avg));



