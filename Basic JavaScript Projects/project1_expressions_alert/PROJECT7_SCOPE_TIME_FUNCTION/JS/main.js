
//Global variable
var X = 10; 
function Add_numbers_1(){
    document.write(20 + X + "<br>");
}

function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Local Variable

function Add_numbers_1(){
    var X = 10; 
    document.write(20 + X + "<br>");
}

function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();


//IF STATEMENTS

function get_Date(){
    if (new Date().getHours() < 17) {
        document.getElementById("Greeting").innerHTML = "How are you today?"
    }
}

// MY OWN IF STATEMENT ASSIGNMENT

function checkNumber() {
    let number = 10;

    if (number > 5) {
        document.getElementById("result").innerHTML = "The number is bigger than 5";
    }
}

// Function to check age using if and else
function checkAge() {
    let age = document.getElementById("ageInput").value; // Get value from input

    if (age >= 18) {
        document.getElementById("resultText").innerHTML = "You are old enough to vote.";
    } else {
        document.getElementById("resultText").innerHTML = "You are too young to vote.";
    }
}


function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "it is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon time.";

    }
    else {
        Reply = "its evening time"
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}