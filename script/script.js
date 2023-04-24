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

let isScrolling; //Déclaration pour le setTimeout
window.addEventListener('scroll', function() {
  let sprite = document.querySelector('.image');
  
  let spritePos = sprite.getBoundingClientRect().top;
  let scrollPos = window.innerHeight;
  
// au Scroll ajout de class
  if (spritePos <= scrollPos){
    
    sprite.style.animationPlayState = 'running';
    body.classList.add('is-scrolling');
    console.log("Je scroll")
  } else {
    
    sprite.style.animationPlayState = 'paused';
    body.classList.remove('is-scrolling')
    console.log("Code éxécuté")
  }
  //Variable de temps
  this.window.clearTimeout(isScrolling); //Annuler le minuteur
  isScrolling = setTimeout(function(){
    document.body.classList.remove('is-scrolling');
    minuteur = "Valeur de ma variable";
    console.log(minuteur);
  }, 100);
}, false);


/*const img = document.querySelector('.image');
let timeL = gsap.timeline({
  scrollTrigger:{
    trigger:Image,
    start:'top center+=200',
    end:'bottom center-=200',
    onEnter:() =>{
      document.body.classList.add('is-scrolling');
      timeL.play();
    },
    onLeaveBack: () => {
      document.body.classList.remove('is-scrolling');
      timeL.pause();
    }
  }
});
timeL.to('.image', {backgroundPositionX:'-4096', duration:0.2, repeat:-1})

*/

