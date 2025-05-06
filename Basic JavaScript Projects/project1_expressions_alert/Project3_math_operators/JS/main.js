let = 7; 
let = 5;
sum = 7 + 5;

// Addition
function addNumbers(){
    document.getElementById("Math").innerText = "7 + 5 = " + sum;
}

// subtraction
function subNumbers(){
    let sub = 12-2;
    document.getElementById("mathSub").innerHTML = " 12 -2 = " + sub;
}

// Multiplication
function multNumbers(){
    let sub = 6 * 6;
    document.getElementById("mathMult").innerHTML = " 6 * 6 = " + sub;
}

//Divisor 
function diviNumbers(){
    let sub = 12 % 6;
    document.getElementById("mathDivi").innerHTML = " 12 % 6 = " + sub;
}

// Negation 
function negation_Operator(){
let x = 20;
document.getElementById("Math").innerHTML = -x;

}

//Decrement and Increment
function incrementDecrement() {
    let x = 5;
    x++; 
    let y = 5;
    y--; 

    document.getElementById("increment").innerText = "Incremented: " + x;
    document.getElementById("decrement").innerText = "Decremented: " + y;
}

//Random Number
window.alert(Math.random() * 100);

//Math object method.
console.log(Math.abs(-5)); 
console.log(Math.ceil(4.2)); 
console.log(Math.floor(4.8)); 