function mySelf() {
    let firstName = "Abas";
    let lastName = "Haji";
    let message = "Hello ";
    message += firstName + " " + lastName; // += appends name to message
    document.getElementById("button").innerText = message;
}
