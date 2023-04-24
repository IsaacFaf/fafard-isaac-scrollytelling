const scrollDown = document.querySelector('.scroll-down');
const height = window.innerHeight;
let lastScrollPos = 0;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPos > lastScrollPos && currentScrollPos > height) {
    scrollDown.classList.add('hidden');
  } else {
    scrollDown.classList.remove('hidden');
  }
  lastScrollPos = currentScrollPos;
});

window.addEventListener('load', () => {
  scrollDown.style.opacity = '1';
});



//SPRITESHEEET
