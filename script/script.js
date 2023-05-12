
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

let body = document.querySelector('body')
//SPRITESHEET
//Prise 4
let sprite = document.querySelector('.image');
let scroll = document.querySelector('.is-scrolling');//





let spriteDeux = document.querySelector('#chapitre-4 div.a');
window.addEventListener("scroll", function(){
  body.classList.add('.is-scrolling');
  spriteDeux.style.animationPlayState = 'running';
   let time = setTimeout(function(){
     body.classList.remove('.is-scrolling');
     spriteDeux.style.animationPlayState = 'paused';
   }, 100);
 })



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





// Variables qui reprends les chapitres
const chap1 = document.querySelector('#chapitre-1');
const chap2 = document.querySelector('#chapitre-2');
const chap3 = document.querySelector('#chapitre-3');
const chap4 = document.querySelector('#chapitre-4');
const chap5 = document.querySelector('#chapitre-5');
const chap6 = document.querySelector('#chapitre-6');
const chap7 = document.querySelector('#chapitre-7');

//PIN DES CHAPITRES ET ANIMATIONS SCROLLTRIGGER
//CHAPITRE-1
let Anim = gsap.to(".image", {x:"98vw", y:"1vh", scaleX: "1000%", scaleY:"1000%"}, {//ANIMATION POUR CHAPITRE 1
  x:"5vw", y:"10vh", duration:5.2, scaleY:"150%", scaleX:"150%"
})
const Chapitre1 = ScrollTrigger.create({
  trigger:chap1,
  start: "top top",
  end: () => `+=${chap2.offsetHeight}`,//PERMET DE SET LA FIN DU SCROLL A UN MOMENT QUI ME PLAIT. JE RISQUE DE PRENDRE LA MÊME VALEUR POUR CHAQUE CHAPITRE. BOTTOM BOTTOM ME CAUSAIT QUELQUES SOUCIS
  pin: true,
  pinSpacing: true,
  //markers: true,
  scrub:1.2,
  animation:Anim,//ANIMATION APPELÉ
  animationDirection:"reverse",
  onUpdate: (e) => {//AJOUT DE LA CLASSE IS-SCROLLING POUR SPRITESHEET
    window.addEventListener("scroll", function(){
      body.classList.add('.is-scrolling');
      sprite.style.animationPlayState = 'running';
       let time = setTimeout(function(){
         body.classList.remove('.is-scrolling');
         sprite.style.animationPlayState = 'paused';
       }, 100);
     })
  },
});


//CHAPITRE-2
let swirdArr = document.querySelectorAll("#chapitre-2 img");
const AnimA = gsap.fromTo(swirdArr, {scaleY: "1%", scaleX: "1%"}, { //ANIMATION POUR CHAPITRE 2
  scaleY: "150%", scaleX: "150%", duration:2.2, yoyo:true,repeat:-1//ANIMATION ÉXÉCUTÉE PUIS JOUÉ EN BOUCLE
});

const Chapitre2 = ScrollTrigger.create({
  trigger: '#chapitre-2',
  start: "top top",
  end: () => `+=${chap2.offsetHeight}`, 
  pin: true,
  pinSpacing: true,
  //markers: true,
  animation: AnimA,
});


//CHAPITRE-3
const Chapitre3 = ScrollTrigger.create({
  trigger: '#chapitre-3',
  start: "top top",
  end: () => `+=${chap3.offsetHeight}`, 
  pin: true,
  pinSpacing: true,
  //markers: true,
});


//CHAPITRE-4
let animCloudArr = document.querySelectorAll("#chapitre-4 #cloud")//Animation nuage
const AnimCloud= gsap.fromTo(animCloudArr, {x:"0vw", y:"0vh"}, {
  x:"80vw", y:"0vh", duration:5
})

const Chapitre4 = ScrollTrigger.create({
  trigger: '#chapitre-4',
  start: "top top",
  end: () => `+=${chap4.offsetHeight}`, 
  pin: true,
  pinSpacing: true,
  //markers: true,
  animation: AnimCloud,//ANIMATION APPELÉ
  scrub:true,
});
//Appel du DrawSVG
gsap.set(["#Calque_3"],{drawSVG:"0% 0%"});
tl = gsap.timeline({});
let animSvg = tl.fromTo('.st0', {drawSVG:"100% 100%"}, {duration: 10, drawSVG:"0% 100%", stagger: 0.6})
//
const PinTriggerDpart = ScrollTrigger.create({
  trigger: '#chapitre-4',
  start: "top top",
  end: () => `+=${chap4.offsetHeight}`,
  //markers: true,
  animation: animSvg, //Execution du DrawSVG <-----------
  scrub:true,
});



//CHAPITRE-5
let swordAnim = gsap.timeline().fromTo('#chapitre-5 img.a',{x:'0%', y:"0%"}, //ANIMATION POUR CHAPITRE-5
{x: '5vw', y:"0vh",rotate:"380deg", duration: 2});

const Chapitre5 = ScrollTrigger.create({
  trigger: '#chapitre-5',
  start: "top top",
  end: () => `+=${chap5.offsetHeight}`, 
  pin: true,
  pinSpacing: true,
  //markers: true,
  scrub:true,
  animation: swordAnim,//ANIMATION APPELÉ
});

//CHAPITRE-6
//MOTION PATH (CHAPITRE-6)
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
const Chapitre6 = ScrollTrigger.create({
  trigger: '#chapitre-6',
  start: "top top",
  end: () => `+=${chap6.offsetHeight}`, 
  pin: true,
  pinSpacing: true,
  //markers: true,
  animation:JumpAnim,// MOTION PATH (IL EST EN BAS, IL Y A UN COMMENTAIRE MOTION PATH À CETTE SECTION) <------------
  scrub:true
});


//CHAPITRE-7
let TueurDeFantome = document.querySelector('#chapitre-7 div.a')//ANIMATION POUR CHAPITRE-7
console.log(TueurDeFantome);
let FantomKiller = gsap.fromTo(TueurDeFantome, {y: "-30vh", opacity:"0%", rotate:'90deg'}, {y: "0vh", opacity:"100%",duration: 2, rotate:'90deg'});

const Chapitre7 = ScrollTrigger.create({
  trigger: '#chapitre-7',
  start: "top top",
  end: () => `+=${chap7.offsetHeight}`, 
  pin: true,
  pinSpacing: true,
  //markers: true,
  animation: FantomKiller,//ANIMATION APPELÉ
  scrub:true
});

//RIEN POUR CHAPITRE-8


//MORPHING (CHAPITRE-3)
let morphing = gsap.to("#Vector-morph", { 
  morphSVG:"#Katana-morph",
  scrollTrigger:{
    trigger:'#chapitre-3',
    start:"top top",
    end:()=>`+=${chap3.offsetHeight}`,
    scrub:true,
    markers:true,
  }
});


//Apres faut que j'optimise le web



//PARALLAXE SECTION (CHAPITRE-1)
let parallaxA = gsap.fromTo(".parallax-1", {y: "1vh", x:"25vw"}, { y:"-4.5vh", x:"5vw", duration:2});
let parallaxB = gsap.fromTo(".parallax-2", {y:"-1vh", x:"25vw"}, {y:"-6.5vh", x:"17.8vw", duration:2})
let parallaxC = gsap.fromTo(".parallax-3", {y:"1vh", x:"-25vw"}, {y:"-3.2vh", x:"-10vw", duration:2})
let parallaxD = gsap.fromTo(".parallax-4", {y:"0vh", x:"9.5vw"}, {y:"-0.2vh", x:"9vw", duration:2})//DECLARATIONS DES ANIMATIONS POUR PARALLAX



const parallax_A = ScrollTrigger.create({//CHACUN DES SCROLLTRIGGERS CONTRÔLENT UNE IMAGE DU PARALLAXE ILS SONT EN ORDRE AUSSI. LE 1 EST L'ÉLÉMENT LE PLUS LOIN ET LE 4 LE PLUS PROCHE
  trigger:chap1,
  start: "top top",
  end: () => `+=${chap2.offsetHeight}`,
  
  //markers: true,
  scrub:1.2,
  animation:parallaxA,//APPELS DES ANIMATIONS
  animationDirection:"reverse"
  
});
const parallax_B = ScrollTrigger.create({
  trigger:chap1,
  start: "top top",
  end: () => `+=${chap2.offsetHeight}`,
  //markers: true,
  scrub:1.2,
  animation:parallaxB,
  animationDirection:"reverse"
  
});
const parallax_C = ScrollTrigger.create({
  trigger:chap1,
  start: "top top",
  end: () => `+=${chap2.offsetHeight}`,
  //markers: true,
  scrub:1.2,
  animation:parallaxC,
  animationDirection:"reverse"
  
});
const parallax_D = ScrollTrigger.create({
  trigger:chap1,
  start: "top top",
  end: () => `+=${chap2.offsetHeight}`,
  
  //markers: true,
  scrub:1.2,
  animation:parallaxD,
  animationDirection:"reverse"
  
});