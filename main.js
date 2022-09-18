const btn = document.querySelector("#boton");
const btnBox = document.querySelector("#blur");
const infor = document.querySelector("#information");
const pag1 = document.querySelector("#p1");
const pag2 = document.querySelector("#p2");
const tar = document.querySelector("#tar");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

btn.addEventListener("click", click);

function click(){
  btn.style.display = "none";
  btnBox.style.display = "none";
  setTimeout(music,3000);
  setTimeout(animation,3000);
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
