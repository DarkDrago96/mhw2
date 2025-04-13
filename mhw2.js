
/* Per il menu */
let apri_menu = document.querySelector("#apri_menu");
function scorrimenu(event){
  let menu_pt1 = document.querySelector(".navbar-menu");
  let menu_pt2 = document.querySelector(".navbar-accesso");
  let mostralo = true;
  for(let classe of menu_pt1.classList){
    if("invisibile_mobile" === classe){
      menu_pt1.classList.remove("invisibile_mobile"); /* 4) modificare dinamicamente la classe degli elementi agendo sulla proprietà classList; */
      menu_pt2.classList.remove("invisibile_mobile")  /* 5) mostrare o nascondere dinamicamente parti della pagina assegnando o rimuovendo classi CSS che modificano la proprietà display; */
      mostralo = false;
      break
    }
  }
  if(mostralo === true){
    menu_pt1.classList.add("invisibile_mobile");
    menu_pt2.classList.add("invisibile_mobile");
  }
}
apri_menu.addEventListener("click", scorrimenu); /* 1) usare addEventListener() per gestire eventi nella pagina; */

/* Per le foto */
let n_foto = 1
let linkfoto = ["https://cdn-images.dzcdn.net/images/cover/9302627a46a9cd026a87a62ae37a323f/1900x1900-000000-80-0-0.jpg",
            "https://cdn-images.dzcdn.net/images/cover/34a4a702b269e61bdceaa2310c74e1d2/1900x1900-000000-80-0-0.jpg",
            "https://cdn-images.dzcdn.net/images/cover/3e367415f942f9cf2b8d74e3139caa9f/1900x1900-000000-80-0-0.jpg",
            "https://cdn-images.dzcdn.net/images/artist/83cfc9a714e2dca84dfa1a0c4f380110/1900x1900-000000-80-0-0.jpg"
  ]
function scorrifoto(event){
  const box_foto = event.currentTarget;
  box_foto.src = linkfoto[n_foto]
  n_foto++;
  if(n_foto === linkfoto.length){
    n_foto=0;
  }
}
function caricaFoto(event){
  // so che element.style o element.style.* sono da evitare, in questo caso li utilizzo solo per dimostrare al volo la capacità di utilizzo di document.createElement() e element_img.src
  let cornice_foto = document.querySelector("#con_js");
  let h1_foto = document.createElement("h1"); /* 2) usare document.createElement() per creare dinamicamente oggetti HTML a partire da contenuti definiti in JavaScript; */
  h1_foto.textContent = "Foto (cliccare sulle foto per cambiarle)";
  h1_foto.style = "text-align: center; margin: 10px 0px; gowun-batang-regular";
  cornice_foto.appendChild(h1_foto);
  let box_foto = document.createElement("img");
      /* 3) modificare dinamicamente l’URL di un’immagine tramite l’attributo src; */
      // cambiare una o più immagini della pagina quando l’utente clicca o si muove sopra certi elementi;
  box_foto.src = "https://cdn-images.dzcdn.net/images/cover/9302627a46a9cd026a87a62ae37a323f/1900x1900-000000-80-0-0.jpg";
  box_foto.classList.add("box_foto");
  box_foto.id = "foto_modificabili";
  cornice_foto.appendChild(box_foto);
  event.currentTarget.removeEventListener("click", caricaFoto); 

  box_foto.addEventListener("click", scorrifoto);
}
let button_aggiungi_elementi = document.querySelector("#foto");
button_aggiungi_elementi.addEventListener("click", caricaFoto);

/* 6) utilizzare attributi data-*    */
function ingrandisci_bordo_ico(event){
  event.currentTarget.dataset.poggiaMouse = 1;
}
function riduci_bordo_ico(event){
  event.currentTarget.dataset.poggiaMouse = 0;
}
const poggia_mouse = document.querySelector(".hamburger[data-poggia-mouse]");
poggia_mouse.addEventListener("mouseover", ingrandisci_bordo_ico);
poggia_mouse.addEventListener("mouseout", riduci_bordo_ico);
