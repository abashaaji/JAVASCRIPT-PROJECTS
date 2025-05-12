// Displaying the data type of a string
// Output: string
document.write(typeof 'word'); 
document.write("<br>");

// Utilizing NaN (Not-a-Number)
function myFunction() {
    document.getElementById("Test").innerHTML = 0 / 0; // Outputs: NaN
}

// Checking if a string is NaN
function myStr() {
    document.getElementById("Test").innerHTML = isNaN('this is string'); // Outputs: true
}

// Displaying Infinity and -Infinity
document.write(2E310);
document.write("<br>");
document.write(-2E310);
document.write("<br>");

// BOOLEAN LOGIC
function showLogic() {
    document.getElementById("Result").innerHTML = 5 > 2; // Outputs: true
}

// Using console.log to output to browser console
console.log(10 + 1); 

// DOUBLE EQUAL SIGNS
document.write(3 == 3); 
document.write("<br>");

// TRIPLE EQUAL SIGNS
let X = 31;
let Y = 31;
document.write(X === Y); 
document.write("<br>");

// AND OPERATOR
document.write(5 > 2 && 10 > 4); 
document.write("<br>");

// OR OPERATOR
document.write(5 > 10 || 10 > 4); 
document.write("<br>");
