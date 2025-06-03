
// function /button//
function submittButton() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;


    //conditional statement
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }
  // Emial input
    if (email === "") {
      alert("Please enter your email.");
      return false;
    }

    // alert 
    alert("Form submitted successfully!");
    return true;
  }