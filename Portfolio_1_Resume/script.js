
  function resizeVideoText() {
    const section = document.querySelector('.Video_Text');
    if (!section) return;

    // Make it cover the whole screen height
    section.style.height = window.innerHeight + 'px';
    section.style.display = 'flex';
    section.style.flexDirection = 'column';
    section.style.justifyContent = 'center';
    section.style.alignItems = 'center';
    section.style.textAlign = 'center';
  }

  // Run on load and resize
  window.addEventListener('load', resizeVideoText);
  window.addEventListener('resize', resizeVideoText);

  // script.js
document.querySelectorAll('.Navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  

