const btn = document.querySelector("#boton");
const book = document.querySelector("#book");
const pag1 = document.querySelector("#p1");
const pag2 = document.querySelector("#p2");
const tar = document.querySelector("#tar");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

btn.addEventListener("click", animation);

let base = 1;
let numTapas = 1;
let maxima = numTapas + 1;


function animation() {

    if (base < maxima) {
        switch(base){
            case 1:

                book.classList.add("flipped");
                pag1.classList.add("flipped");
                pag2.classList.add("flipped");
                pag1.style.zIndex = 1;
                pag2.style.zIndex = 1;
                break;
            default:
                throw new Error("error de estado");
        }
        btn.style.display = "none";
        base++;

    }

}