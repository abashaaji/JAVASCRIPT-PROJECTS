var button = document.getElementById("myButton");

// when button clicked 
button.onclick = function() {
    var message = button.getAttribute("data-message");
    alert(message);
};