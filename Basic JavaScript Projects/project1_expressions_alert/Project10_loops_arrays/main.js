// length
let text = "Hi there!"
let length = text.length;

// for loop
let Instruments = [ "Biano", "Guitar", "Drums"];

let content = "";
let X ;
function for_Loop() {
    for (X = 0; X < Instruments.length; X++){
        content += Instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

// Documment.getELementById()
function array_Function(){
    let Array = 10;
    document.getElementById("Array").innerHTML = Array;
}

//const keyword assignment 
function constant_function(){
    const Musical_Instrument = {type: "guitar", brand: "Farnandes", color: "Yellow"};
    Musical_Instrument.color = "Green";
    Musical_Instrument.price = "$120";
    document.getElementById("Constant").innerHTML = "the price is" + "<br>" + Musical_Instrument.price;

}

//Let Keyword 
var x = 100;
document.write(x);
{
    let x = 12;
    document.write("<br>" + x);
}
document.write("<br>" + x)


//Objects
let phone = {
    make: "Iphone",
    Year: "2024",
    model: "iphone 16 pro max",
    color: "Black",
    description : function() {
        return "The phone is a " + this.model + "<br>" + this.make + this.color;
    }
};
document.getElementById("Car_Object").innerHTML = phone.description();