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


let body = document.querySelector('body')
//SPRITESHEET
//Prise 4
let sprite = document.querySelector('.image');
let scroll = document.querySelector('.is-scrolling');//

window.addEventListener("scroll", function(){
 body.classList.add('.is-scrolling');
 sprite.style.animationPlayState = 'running';
  let time = setTimeout(function(){
    body.classList.remove('.is-scrolling');
    sprite.style.animationPlayState = 'paused';
  }, 100);
})







//Prise 1

/*function sprites(){
  var sprite = document.querySelector('.image')
  for (var i = 0; i < sprite.length;i++){
    var windowHeight = window.innerHeight;
    var elementTop=sprite[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if(elementTop < windowHeight - elementVisible){
      sprite[i].classList.add("is-scrolling");
      sprite.style.animationPlayState = 'running';
    } else {
      sprite[i].classList.remove("is-scrolling");
      sprite.style.animationPlayState = 'paused';
    }
  }}
  window.addEventListener("scroll", sprites)*/

//Prise 2
/*
let isScrolling; //Déclaration pour le setTimeout
window.addEventListener('scroll', function() {
  
  let sprite = document.querySelector(".image");
  let spritePos = sprite.getBoundingClientRect().top;
  let scrollPos = window.innerHeight;
  
// au Scroll ajout de class
  if (spritePos <= scrollPos){
    
    sprite.style.animationPlayState = 'running';
    body.classList.add('.is-scrolling');
    console.log("Je scroll");
  } else{
    
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
}, false);*/



//Prise 3
/*
const img = document.querySelector('.image');
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

