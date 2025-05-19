// This function counts down from a number entered by the user
function countdown() {
    let seconds = document.getElementById("seconds").value;
// this runns evry sencond 
    function tick() {
        seconds--;
        document.getElementById("timer").innerText = seconds;

        // If time is not up, run tick() again in 1 second
        if (seconds >= 0) {
            setTimeout(tick, 1000);
        } else {
            // When time is up, show an alert
            alert("Time is up!");
        }
    }

    // Start the countdown
    tick();
}


let current = 0;

function showSlide(index) {
  const slides = document.getElementsByClassName("slide");

  if (index >= slides.length) {
    current = 0;
  } else if (index < 0) {
    current = slides.length - 1;
  } else {
    current = index;
  }

  // Hide all images
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current image
  slides[current].style.display = "block";
}

// Change slide by +1 or -1
function changeSlide(n) {
  showSlide(current + n);
}

// Show first slide on load
showSlide(current);
