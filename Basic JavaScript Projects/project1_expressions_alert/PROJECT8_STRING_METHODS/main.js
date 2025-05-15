function concenate() {
    let text1 = "Hi";
    let text2 = "Welcome";
    let fullText = text1.concat(text2);
    document.getElementById("string").innerHTML = fullText;
}

//Slice method
function slice_method(){
    var Sentence = "You are a good person";
    var section = Sentence.slice(10, 20);
    document.getElementById("slice").innerHTML = section;
}


//toUpperCase() method.
const myString = "Hello World";
const upperCaseString = myString.toUpperCase();
//Outputs
console.log(myString); 
console.log(upperCaseString); 

//NUMBER METHODS
function string_method(){
    var X = 100;
    document.getElementById("Numebrs_to_string").innerHTML = X.toString();
}

//TOPRECISION() METHOD
function precision_method() {
    var X = 123456789;
    document.getElementById("precision").innerHTML = X.toPrecision(10);
}