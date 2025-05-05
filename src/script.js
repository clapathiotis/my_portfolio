function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

function toggleDetails() {
  var overlay = document.getElementById("details-overlay");
  var detailsText = document.querySelector(".project-details");

  overlay.classList.toggle("show-details");
  detailsText.classList.toggle("show-details");
}

document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('section');
  
    function checkScroll() {
      sections.forEach(function(section) {
        var sectionTop = section.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
          section.classList.add('show');
        } else {
          section.classList.remove('show');
        }
      });
    }
  
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
  
    // Check initially in case some sections are already visible on page load
    checkScroll();
  });
  