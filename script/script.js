
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

let body = document.querySelector('body')
//SPRITESHEET
//Prise 4
let sprite = document.querySelector('.image');
let scroll = document.querySelector('.is-scrolling');//

/*let Anim = window.addEventListener("scroll", function(){
 body.classList.add('.is-scrolling');
 sprite.style.animationPlayState = 'running';
  let time = setTimeout(function(){
    body.classList.remove('.is-scrolling');
    sprite.style.animationPlayState = 'paused';
  }, 100);
})


gsap.to(".image", {
  ScrollTrigger: {
    trigger:".image",
    start:"top top",
    end:"bottom bottom",
    scrub:true,
    
    markers:true,
    onUpdate: (e) => {
      Anim.play()
    }
  }
})*/


/*const AnimTriggerred = ScrollTrigger.create({
  trigger:".image",
  start:"top top",
  end:"bottom bottom",
  scrub:true,
  animation: Anim,
  markers:true,
  
})*/




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
const AnimA = gsap.fromTo(swirdArr, {scaleY: "1%", scaleX: "1%"}, { 
  scaleY: "150%", scaleX: "150%", duration:5.2, yoyo:true,
});

//CHAPTER1

let Anim = gsap.to(".image", {x:"98vw", y:"1vh", scaleX: "1000%", scaleY:"1000%"}, {
  x:"5vw", y:"10vh", duration:5.2, scaleY:"150%", scaleX:"150%"
})


let animCloudArr = document.querySelectorAll("#chapitre-4 #cloud")
const AnimCloud= gsap.fromTo(animCloudArr, {x:"0vw", y:"0vh"}, {
  x:"80vw", y:"0vh", duration:5
})


//Chap5
let swordAnim = gsap.timeline().fromTo('#chapitre-5 img.a',{x:'0%', y:"0%"}, 
{x: '5vw', y:"0vh",rotate:"380deg", duration: 2})



//let JumpAnim = gsap.timeline().fromTo('#chapitre-6 div.a', {x:'-15vw', y:"-120px",opacity:"0%",ease:'none', duration:0.8},
//{x: '24.42vw', y:"38vh", rotate:"90deg", duration: 11, opacity:"100%"})
//Chap6
let JumpAnim = gsap.to("#chapitre-6 div.a", {
  motionPath:{
    align:"#ligneSvg",
    path:"#ligneSvg",
    autoRotate:true,
    alignOrigin:[0.5, 0.5]
  },
  scrollTrigger:{
    scrub:true,
    markers:true,
    start: "0% 0%",
    end:"100% 100%",
    trigger:"#chapitre-6 div.a",
    
  }
});



/*.to('#chapitre-6 div.a', { x: '-2vw', y:"-10px", rotate:"30deg", duration: 0.95,ease:'none'})
.to('#chapitre-6 div.a', { x: '5.5vw', y:"55px", rotate:"45deg", duration: 0.88,ease:'none'})
.to('#chapitre-6 div.a', { x: '10.8vw', y:"108px", rotate:"52deg", duration: 0.86,ease:'none'})
.to('#chapitre-6 div.a', { x: '15.8vw', y:"188px", rotate:"58deg", duration: 0.82,ease:'none',})
.to('#chapitre-6 div.a', { x: '17.42vw', y:"213px", rotate:"60deg", duration: 0.8,ease:'none'})
.to('#chapitre-6 div.a', { x: '17.42vw', y:"163px", rotate:"60deg", duration: 1, opacity:"1%"})*/
//Chap7
let TueurDeFantome = document.querySelector('#chapitre-7 div.a')
console.log(TueurDeFantome);

let FantomKiller = gsap.fromTo(TueurDeFantome, {y: "-30vh", opacity:"0%", rotate:'90deg'}, {y: "0vh", opacity:"100%",duration: 2, rotate:'90deg'});





//SCROLLTRIGGER 2.3A


let AnimB;

let AmimC;
const AnimTrigger = ScrollTrigger.create({
  trigger: "#chapitre-2", // élément déclencheur
  start: "100% -50%", // point de départ de l'animation
  end: "100% 100%", // point de fin de l'animation
  scrub: 5.4,
  animation: AnimA,
  
  animationDirection: "reverse"
});




const chap1 = document.querySelector('#chapitre-1');
const chap2 = document.querySelector('#chapitre-2');
const chap3 = document.querySelector('#chapitre-3');
const chap4 = document.querySelector('#chapitre-4');
const chap5 = document.querySelector('#chapitre-5');
const chap6 = document.querySelector('#chapitre-6');
const chap7 = document.querySelector('#chapitre-7');
const PinTriggerA = ScrollTrigger.create({
  trigger:chap1,
  start: "top top",
  end: () => `+=${chap2.offsetHeight}`,
  pin: true,
  pinSpacing: true,
  markers: true,
  scrub:1.2,
  
  onUpdate: (e) => {
    window.addEventListener("scroll", function(){
      body.classList.add('.is-scrolling');
      sprite.style.animationPlayState = 'running';
       let time = setTimeout(function(){
         body.classList.remove('.is-scrolling');
         sprite.style.animationPlayState = 'paused';
       }, 100);
     })
  },
  animation:Anim,
  animationDirection:"reverse"
  
})
const PinTriggerB = ScrollTrigger.create({
  trigger: '#chapitre-2',
  start: "top top",
  end: () => `+=${chap2.offsetHeight}`, // Fin de l'épinglage = fin du contenu
  pin: true,
  pinSpacing: true,
  markers: true
});
const PinTriggerC = ScrollTrigger.create({
  trigger: '#chapitre-3',
  start: "top top",
  end: () => `+=${chap3.offsetHeight}`, // Fin de l'épinglage = fin du contenu
  pin: true,
  pinSpacing: true,
  markers: true
});
const PinTriggerD = ScrollTrigger.create({
  trigger: '#chapitre-4',
  start: "top top",
  end: () => `+=${chap4.offsetHeight}`, // Fin de l'épinglage = fin du contenu
  pin: true,
  pinSpacing: true,
  markers: true,
  animation: AnimCloud,
  scrub:true,
  
  
});
const PinTriggerE = ScrollTrigger.create({
  trigger: '#chapitre-5',
  start: "top top",
  end: () => `+=${chap5.offsetHeight}`, // Fin de l'épinglage = fin du contenu
  pin: true,
  pinSpacing: true,
  markers: true,
  scrub:true,
  animation: swordAnim,
});
const PinTriggerF = ScrollTrigger.create({
  trigger: '#chapitre-6',
  start: "top top",
  end: () => `+=${chap6.offsetHeight}`, // Fin de l'épinglage = fin du contenu
  pin: true,
  pinSpacing: true,
  markers: true,
  animation:JumpAnim,
  scrub:true
});
const PinTriggerG = ScrollTrigger.create({
  trigger: '#chapitre-7',
  start: "top top",
  end: () => `+=${chap7.offsetHeight}`, // Fin de l'épinglage = fin du contenu
  pin: true,
  pinSpacing: true,
  markers: true,
  animation: FantomKiller,
  scrub:true
});
//DRAWSVG

gsap.set(["#Calque_3"],{drawSVG:"0% 0%"});



tl = gsap.timeline({});

let animSvg = tl.fromTo('.st0', {drawSVG:"100% 100%"}, {duration: 10, drawSVG:"0% 100%", stagger: 0.6})
const PinTriggerDpart = ScrollTrigger.create({
  trigger: '#chapitre-4',
  start: "top top",
  end: () => `+=${chap4.offsetHeight}`,
  markers: true,
  animation: animSvg,
  scrub:true,
});


