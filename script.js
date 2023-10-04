document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".text", {
      strings: ["Gamer", "Coder", "Youtuber"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
  });
});

document.getElementById('burgerButton').addEventListener('click', function () {
  document.querySelector('.navbar').classList.toggle('active');
});

// Add an event listener to each navigation link
var navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
      document.querySelector('.navbar').classList.remove('active');
  });
});
