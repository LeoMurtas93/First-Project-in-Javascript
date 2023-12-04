

document.addEventListener("DOMContentLoaded", function() {


//----------------METTO SFONDO ALL'HEADER DOPO SCROLL + TORNA SU----------------------------
  
window.addEventListener("scroll", changeBackground);

  const backUp = document.querySelector("img.button-up");

  function changeBackground() {
    const menu = document.querySelector("header");
    
    let scrollValue = window.scrollY;
    if (scrollValue > 150) {
      menu.classList.remove("box-menu");
      menu.classList.add("change-backgroundColor");
      backUp.style.opacity = "100%";
    } else {
      menu.classList.remove("change-backgroundColor");
      menu.classList.add("box-menu");
      backUp.style.opacity = "0";
    }}

    backUp.addEventListener("click", () => {
      window.scrollTo(0, 0)
    });

//----------------------FINE EVENTO SCROLL-------------------------------





//-----------------------EVENTO VOLUME TRAILER JOKER---------------------------------

const videoJoker = document.querySelector("div.trailer video");
const buttonVol = document.querySelector("button.play");
const volOff = document.querySelector("img.off");
const volUp = document.querySelector("img.on"); 

buttonVol.addEventListener("click", () => {
  videoJoker.muted = !videoJoker.muted;
  console.log(volUp.style.display);

  if(volUp.style.display == "none") {
    console.log("deve esserci on");
    volUp.style.display = "block";
    volOff.style.display = "none";
  }else{
    console.log("deve esserci off");
    volOff.style.display = "block";
    volUp.style.display = "none";
  }
});


//------------------------FINE EVENTO VOLUME JOKER----------------------------------







//-------CICLO FOR PER ENTRARE NEI .COVER E GESTIRE LA TRAMA HOVER---------

  const cover = document.querySelectorAll(".cover");

  for(let i = 0; i < cover.length; i++) {

    cover[i].addEventListener("mouseover", () => {
      cover[i].childNodes[2].nextSibling.style.opacity = "90%";
    })
    cover[i].addEventListener("mouseout", () => {
      cover[i].childNodes[2].nextSibling.style.opacity = "0";
})}

//------------FINE EVENTI ANTEPRIMA IN HOVER SU .COVER---------





//-----------------------GESTIONE EVENTi POPUP----------------------------

const godPop = document.querySelector("div.god-popup");
const logButton = document.querySelector("a.login");
const contactsButton = document.querySelector("a.contacts");
const contacts = document.querySelector("div.form-contatti");
const createButton = document.querySelector("div div.create");
const popupLog = document.querySelector("div.popup-container");
const popupCreate = document.querySelector("div.create-container");
const recPasswordBox = document.querySelector("div.recupera-pass");
const recPassBtn = document.querySelector("div.rec-password");
const goBack = document.querySelector("h3.go-back");
const goBackLog = document.querySelector("h3.go-backLog");
const formLogin = document.querySelector("form.registration-box");
const inputLogin = document.querySelector("form.registration-box input.email");
const passwordLogin = document.querySelector("form.registration-box input.password");

logButton.addEventListener("click", () => {
  popupLog.style.display = "block";
  godPop.style.display = "block";
  popupCreate.style.display = "none";
  recPasswordBox.style.display = "none";
  contacts.style.display = "none";
  document.body.style.overflow = "hidden";
})

contactsButton.addEventListener("click", () => {
  contacts.style.display = "block";
  godPop.style.display = "block";
  popupLog.style.display = "none";
  popupCreate.style.display = "none";
  recPasswordBox.style.display = "none";
  document.body.style.overflow = "hidden";
})

createButton.addEventListener("click", () => {
  popupLog.style.display = "none";
  popupCreate.style.display = "block";
  document.body.style.overflow = "hidden";
})

goBack.addEventListener("click", () => {
  popupCreate.style.display = "none";
  popupLog.style.display = "block";
  document.body.style.overflow = "hidden";
})

recPassBtn.addEventListener("click", () => {
  recPasswordBox.style.display = "block";
  popupLog.style.display = "none";
  document.body.style.overflow = "hidden";
})

goBackLog.addEventListener("click", () => {
    popupLog.style.display = "block";
    recPasswordBox.style.display = "none";
    document.body.style.overflow = "hidden";
})



// DICHIARAZIONE CONST PER POPUP SLIDER + GESTIONE EVENTI----------------------------

const primoBlocco = document.querySelector("div.first-slider");
const popupSlider = document.querySelector("div.box-film-serieTV");
const span = document.querySelectorAll("div.descrizione span");
const popupTlou = document.querySelector("div.box-tlou");
const popupInter = document.querySelector("div.box-inter");
const popupWolf = document.querySelector("div.box-wolf");
const popupStranger = document.querySelector("div.box-stranger");
const popupMile = document.querySelector("div.box-mile");
const closePop = document.querySelectorAll("img.close-pop");
const closePopMedia = document.querySelector("img.close-pop-media");
const video = document.querySelectorAll("div.box-film-serieTV video");


for(let i = 0; i < 8; i++) {


  primoBlocco.addEventListener("click", (e) => {

    if(e.target == span[1]){
      closePopMedia.style.display = "block"
      popupTlou.style.display = "block";
      popupSlider.style.display = "block";
      popupInter.style.display = "none";
      popupWolf.style.display = "none";
      popupStranger.style.display = "none";
      popupMile.style.display = "none";
      backUp.style.display = "none";
      godPop.style.display = "block";
      document.body.style.overflow = "hidden";
    }
    
    if(e.target == span[2]){
      closePopMedia.style.display = "block"
      popupInter.style.display = "block";
      popupSlider.style.display = "block";
      popupTlou.style.display = "none";
      popupWolf.style.display = "none";
      popupStranger.style.display = "none";
      popupMile.style.display = "none"
      backUp.style.display = "none";
      godPop.style.display = "block";
      document.body.style.overflow = "hidden";
    }

    if(e.target == span[3]){
      closePopMedia.style.display = "block"
      popupWolf.style.display = "block";
      popupSlider.style.display = "block";
      popupInter.style.display = "none";
      popupTlou.style.display = "none";
      popupStranger.style.display = "none";
      popupMile.style.display = "none"
      backUp.style.display = "none";
      godPop.style.display = "block";
      document.body.style.overflow = "hidden";
    }

    if(e.target == span[5]){
      closePopMedia.style.display = "block"
      popupStranger.style.display = "block";
      popupSlider.style.display = "block";
      popupInter.style.display = "none";
      popupWolf.style.display = "none";
      popupTlou.style.display = "none";
      popupMile.style.display = "none"
      backUp.style.display = "none";
      godPop.style.display = "block";
      document.body.style.overflow = "hidden";
    }

    if(e.target == span[6]){
      closePopMedia.style.display = "block"
      popupMile.style.display = "block";
      popupSlider.style.display = "block";
      popupInter.style.display = "none";
      popupWolf.style.display = "none";
      popupStranger.style.display = "none";
      popupTlou.style.display = "none"
      backUp.style.display = "none";
      godPop.style.display = "block";
      document.body.style.overflow = "hidden";
    }   
})
}
      
for(let i = 0; i < video.length; i++) { 
    closePopMedia.addEventListener("click", (e) => { 
      if(e.target == closePopMedia){
        video[i].pause();
        video[i].currentTime = 0;
        video[i].load();
        popupSlider.style.display = "none";
        godPop.style.display = "none";
        backUp.style.display = "block";
        document.body.style.overflowY = "scroll";
      }
      else{
        popupSlider.style.display = "block";
        godPop.style.display = "block";
        backUp.style.display = "none";
      }
  })
}

for(let i = 0; i < closePop.length; i++) {

closePop[i].addEventListener("click", (e) => {

  if(e.target == closePop[i]) {
  godPop.style.display = "none";
  document.body.style.overflowY = "scroll";
  }
  else{
  godPop.style.display = "block";
  document.body.style.overflow = "hidden";
  }
})
}

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const loginEspressione = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;
  if (!loginEspressione.test(inputLogin.value)) {
    alert('Inserisci un indirizzo email valido');
    return;
  }

  const passwordEspressione = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordEspressione.test(passwordLogin.value)) {
    alert('La password deve contenere almeno 8 caratteri, una lettera e un numero');
    return;
  }

  alert('Accesso effettuato con successo!');

})

//---------------------FINE CICLO FOR + EVENTI POPUP-------------------
  
  

//--------GESTIONE SLIDER: DICHIARAZIONE COSTANTI E GESTIONE EVENTI------

  const boxSlider = document.querySelector(".container-slider");
  const nextArrow = document.querySelector("div.next");
  const previousArrow = document.querySelector("div.previous");
  const secondoBlocco = document.querySelector(".second-slider");

  nextArrow.addEventListener("click", nextPage);
  previousArrow.addEventListener("click", prevPage);
  boxSlider.addEventListener("mouseover", arrowVisible)
  boxSlider.addEventListener("mouseout", arrowInvisible) 

  function arrowVisible(){
      nextArrow.style.opacity = "80%";
  }
        
  function arrowInvisible(){
      nextArrow.style.opacity = "";
  }
  
  function nextPage() {
    primoBlocco.classList.remove("alCentro")
    primoBlocco.classList.add("slitta-Sx");
    secondoBlocco.classList.add("alCentro");
    previousArrow.style.opacity = "80%"
    previousArrow.style.transition = "8s"
    nextArrow.style.display = "none";
  }
  
  function prevPage() {
    primoBlocco.classList.remove("slitta-Sx");
    primoBlocco.classList.add("alCentro")
    secondoBlocco.classList.remove("alCentro")
    secondoBlocco.classList.add("slitta-Dx");
    previousArrow.style.opacity = "0"
    previousArrow.style.transition = "none";
    nextArrow.style.display = "block";
  }

//-------------------------FINE GESTIONE EVENTI----------------------


})