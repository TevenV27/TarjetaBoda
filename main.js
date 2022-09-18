const btn = document.querySelector("#boton");
const btn2 = document.querySelector("#boton2");
const slide = document.querySelector("#slide");
const pag1 = document.querySelector("#p1");
const pag2 = document.querySelector("#p2");
const tar = document.querySelector("#tar");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

btn.addEventListener("click", click);
btn2.addEventListener("click", click2);

function click(){
  btn.style.display = "none";
  setTimeout(music,980);
  setTimeout(animation,980);
}

function click2(){
  btn.style.display = "none";
  btn2.style.display = "none";
  setTimeout(music,980);
  setTimeout(animation,980);
  setTimeout(timeSlide, 9800);
}

function timeSlide(){
  slide.style.display = "flex";
}

function music(){
  let etiquetaAudio = document.createElement("audio");
  etiquetaAudio.setAttribute("src", "music/lava.mp3");
  etiquetaAudio.play();
}
function animation() {

  pag1.classList.add("flipped");
  pag2.classList.add("flipped");
  pag1.style.zIndex = 1;
  pag2.style.zIndex = 2;

}
