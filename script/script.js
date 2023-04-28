
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

let spriteDeux = document.querySelector('#chapitre-4 div.a');
window.addEventListener("scroll", function(){
  body.classList.add('.is-scrolling');
  spriteDeux.style.animationPlayState = 'running';
   let time = setTimeout(function(){
     body.classList.remove('.is-scrolling');
     spriteDeux.style.animationPlayState = 'paused';
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

//TimeLine





//INSTRUCTION 4 - Animation de base de quelques images


//header
let defilement = document.querySelector('.defile');
let detect = document.querySelector('header span');


//variable de controle

//
console.log(detect)
window.addEventListener("scroll", function(){
  detect.classList.remove('defile');
  if (defilement != null) {
    detect.classList.add("ChangeOpa")
    gsap.to(detect, {opacity: 0, duration: 0.1, repeat:-1});
 }
});

if (defilement == null){
  detect.classList.add("ChangeOpa")
}
else{
  gsap.fromTo(defilement, {scaleY: "100%", scaleX: "100%", opacity:"100%" }, { 
      scaleY: "51%", scaleX: "51%", duration:1.8, repeat:-1,yoyo:true, opacity:"65%"
  });
}



let swirdArr = document.querySelectorAll("#chapitre-2 img");

//Chap2
gsap.fromTo(swirdArr, {scaleY: "100%", scaleX: "100%", opacity:"100%" }, { 
  scaleY: "1%", scaleX: "1%", duration:2.2, repeat:-1,yoyo:true, opacity:"36%"
});
//Chap5
gsap.timeline().fromTo('#chapitre-5 img.a',{x:'0%', y:"0%"}, 
{x: '35vw', y:"20vh",rotate:"6deg", duration: 2})
.to('#chapitre-5 img.a', { x: '-35vw', y:"20vh", rotate:"30deg", duration: 2})
.to('#chapitre-5 img.a', { x: '35vw', y:"-20vh", rotate:"-375deg", duration: 2})
.to('#chapitre-5 img.a', { x: '-35vw', y:"-20vh", rotate:"5deg", duration: 2})
.to('#chapitre-5 img.a', { x: '0vw', y:"-25vh", rotate:"25deg",duration:2})
.to('#chapitre-5 img.a', { x: '0vw', y:"0vw", rotate:"0deg", duration: 2})
.to('#chapitre-5 img.a', { scaleX:'150%', scaleY:'150%',rotate:"360deg", duration: 2, repeat:-1})


//Chap6
gsap.timeline().fromTo('#chapitre-6 div.a', {x:'-15vw', y:"-120px",opacity:"0%",ease:'none', duration:0.8},
{x: '-9vw', y:"-58px",rotate:"6deg",opacity:"100%", duration: 1.1, ease:'none'})
.to('#chapitre-6 div.a', { x: '-2vw', y:"-10px", rotate:"30deg", duration: 0.95,ease:'none'})
.to('#chapitre-6 div.a', { x: '5.5vw', y:"55px", rotate:"45deg", duration: 0.88,ease:'none'})
.to('#chapitre-6 div.a', { x: '10.8vw', y:"108px", rotate:"52deg", duration: 0.86,ease:'none'})
.to('#chapitre-6 div.a', { x: '15.8vw', y:"188px", rotate:"58deg", duration: 0.82,ease:'none',})
.to('#chapitre-6 div.a', { x: '17.42vw', y:"213px", rotate:"60deg", duration: 0.8,ease:'none'})
.to('#chapitre-6 div.a', { x: '17.42vw', y:"163px", rotate:"60deg", duration: 1, opacity:"1%"})
//Chap7
let TueurDeFantome = document.querySelector('#chapitre-7 div.a')
console.log(TueurDeFantome);
gsap.fromTo(TueurDeFantome, {y: "-30vh"}, {y: "0vh", duration: 2});

