/*eslint-env browser*/

var x;
var y;
var myPyramid;

for(var x = 1; x <= 8; x++) {

   for(var y = 1; y <= x; y++) 
   {
       myPyramid = myPyramid + ("#");
   }
    console.log(myPyramid); 
    myPyramid = '';
}