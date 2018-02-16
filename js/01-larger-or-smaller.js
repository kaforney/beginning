/*eslint-env browser*/

//GLOBAL VARIABLES
var numOne, numTwo;


//COLLECT VALUES FROM USER
numOne = window.prompt("Enter an integer.", "0");
numTwo = window.prompt("Enter another integer.", "0");

//CALCULATE LARGER INTEGER
if (parseInt(numOne, 10) > parseInt(numTwo, 10)) 
    { 
        document.write(numOne);
    }
else
    if (parseInt(numTwo, 10) > parseInt(numOne, 10))
    {
        document.write(numTwo);
}
else
    {
        document.write("The values of " + numOne + " and " + numTwo + " are equal.");
    }
 
