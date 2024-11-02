document.addEventListener("DOMContentLoaded", function () {
  const arrowHead = document.querySelector('.scroll-down');
  const aboutSection = document.getElementById('about-us');

  if (arrowHead && aboutSection) {
    arrowHead.addEventListener('click', function () {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  } else {
    console.warn('Arrow or about section not found');
  }
});