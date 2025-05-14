function my_Function() {
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    can_vote = (Age < 18) ? "You are not old enaugh" : "You are old enaugh ";
    document.getElementById("vote").innerHTML = can_vote + " to vote";
}

// Nasted function
function outerFunction() {
    function innerFunction() {
        return "this is the nasted function";
    }
    document.getElementById("Nasted_Function").innerHTML = innerFunction();
}
