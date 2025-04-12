// JavaScript for smooth scroll behavior
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Adding an animation effect to the header text
window.addEventListener('load', function () {
  const header = document.querySelector('header h1');
  header.classList.add('animate__animated', 'animate__fadeIn');
});
