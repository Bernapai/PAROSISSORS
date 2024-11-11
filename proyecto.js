/*Juego de piedra, papel o tijera 
function jugarPiedraPapelTijera() {
  let eleccion = prompt("Usuario 1 elige: piedra, papel o tijera").toLowerCase();
  let elecciondos = prompt("Usuario 2 elige: piedra, papel o tijera").toLowerCase();

  while (
    (eleccion !== "piedra" && eleccion !== "papel" && eleccion !== "tijera") ||
    (elecciondos !== "piedra" && elecciondos !== "papel" && elecciondos !== "tijera")
  ) {
    console.log("Elección inválida. Por favor, elige: piedra, papel o tijera.");
    eleccion = prompt("Usuario 1 elige: piedra, papel o tijera").toLowerCase();
    elecciondos = prompt("Usuario 2 elige: piedra, papel o tijera").toLowerCase();
  }
  while (
    (eleccion === "piedra" && elecciondos === "piedra") ||
    (eleccion === "tijera" && elecciondos === "tijera") ||
    (eleccion === "papel" && elecciondos === "papel")
  ) {
    console.log("Empate vuelvan a elegir")
    eleccion = prompt("Usuario 1 elige: piedra, papel o tijera").toLowerCase();
    elecciondos = prompt("Usuario 2 elige: piedra, papel o tijera").toLowerCase();
  }

  if (eleccion === "piedra" && elecciondos === "tijera") {
    console.log("El ganador es el usuario 1");
  } else if (eleccion === "piedra" && elecciondos === "papel") {
    console.log("El ganador es el usuario 2");
  } else if (eleccion === "papel" && elecciondos === "piedra") {
    console.log("El ganador es el usuario 1");
  } else if (eleccion === "papel" && elecciondos === "tijera") {
    console.log("El ganador es el usuario 2");
  } else if (eleccion === "tijera" && elecciondos === "papel") {
    console.log("El usuario 1 es el ganador");
  } else if (eleccion === "tijera" && elecciondos === "piedra") {
    console.log("El usuario 2 es el ganador");
  }
}

// Llamar a la función para jugar
jugarPiedraPapelTijera();
*/ 
/*DOM ARENA*/
document.addEventListener("DOMContentLoaded", function() {
  // Código relacionado con la primera parte del DOM
  const piedra = document.getElementById("rock");
  const papel = document.getElementById("paper");
  const tijera = document.getElementById("scissors");
  const piedra2 = document.getElementById("rock2");
  const papel2 = document.getElementById("paper2");
  const tijera2 = document.getElementById("scissors2")
  const buttons = document.querySelectorAll(".opcion button");

  let eleccion1 = null;
  let eleccion2 = null;

  piedra.onclick = () => makeChoice("rock", 1);
  papel.onclick = () => makeChoice("paper", 1);
  tijera.onclick = () => makeChoice("scissors", 1);
  piedra2.onclick = () => makeChoice("rock2", 2);
  papel2.onclick = () => makeChoice("paper2", 2);
  tijera2.onclick = () => makeChoice("scissors2", 2);

  const resultado = document.getElementById("resultado");
  const empate = "Empate vuelvan a elegir";
  const winUsu1 = "El usuario 1 es el ganador";
  const winUsu2 = "El usuario 2 es el ganador";

  function makeChoice(choice, playerNumber) {
    const sonido = document.getElementById("ruidito");
    sonido.currentTime = 0;
    sonido.play();

    if (playerNumber === 1) {
      eleccion1 = choice;
    } else {
      eleccion2 = choice;
    }

    if (eleccion1 !== null && eleccion2 !== null) {
      checkResult();
    }
  }

  function checkResult() {
    if (
      (eleccion1 === "rock" && eleccion2 === "rock2") ||
      (eleccion1 === "paper" && eleccion2 === "paper2") ||
      (eleccion1 === "scissors" && eleccion2 === "scissors2")
    ) {
      resultado.textContent = empate;
      Toastify({
        text: "empate",
        duration: 1500
      }).showToast();
    } else if (
      (eleccion1 === "rock" && eleccion2 === "scissors2") ||
      (eleccion1 === "paper" && eleccion2 === "rock2") ||
      (eleccion1 === "scissors" && eleccion2 === "paper2")
    ) {
      resultado.textContent = winUsu1;
      Toastify({
        text: "El usuario 1 es el ganador",
        duration: 1500
      }).showToast();
      const winUsu1Count = localStorage.getItem("winUsu1Count") || 0;
      localStorage.setItem("winUsu1Count", parseInt(winUsu1Count) + 1);
    } else if (
      (eleccion1 === "rock" && eleccion2 === "paper2") ||
      (eleccion1 === "paper" && eleccion2 === "scissors2") ||
      (eleccion1 === "scissors" && eleccion2 === "rock2")
    ) {
      resultado.textContent = winUsu2;
      Toastify({
        text: "El usuario 2 es el ganador",
        duration: 1500
      }).showToast();
      const winUsu2Count = localStorage.getItem("winUsu2Count") || 0;
      localStorage.setItem("winUsu2Count", parseInt(winUsu2Count) + 1);
    }
    eleccion1 = null;
    eleccion2 = null;
  };
  } );

  // Código relacionado con la segunda parte del DOM (Skins)
  class Skins {
    constructor(id, color, image) {
      this.id = id;
      this.color = color;
      this.image = image;
    }
  }

  const skin1 = new Skins(1, "Blue", "https://i.pinimg.com/474x/78/8b/44/788b44e53ad791e04812962bf13f50e4.jpg");
  const skin2 = new Skins(2, "Yellow", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUPEhIVFRUPEA8PEA8PDw8PDw8PFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFy0dHR0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0rLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAABAAIDBAUG/8QAJRABAQEBAAEDAgcBAAAAAAAAAAERAjEDEiFBUWGBscHR4fBx/8QAGwEBAQEBAQADAAAAAAAAAAAAAQACAwQFBgf/xAAhEQEBAQEAAgEEAwAAAAAAAAAAARECITESMkFRcRMzYf/aAAwDAQACEQMRAD8A9sn4PT6Po/Vvn0M+bP7V63/j8/tz2+89d/LxGvj6eN+30dJy5cx39Plw76t8uV8N8cz7OvPP4DlvlxtcbWpzGpzBG5HO1zpkhkikakZtYpkMijUrNrFUkXwacAUjXPMPtwtfR5vti3fTOGckudtqGIrABiw4sSEOHEkzYG8GBLBYcUK0YnT2VN/Dr8D5R+a651mcvTzwb6b2fN8p88cJHXiNT03Xnlm9M9dM8unMGOnEYtcrVI1CnPWNMaEakDNUjUUTLJMUaHpmmJFmsjUYcSUjTNqlGMlJJKpBEpJBCU4jLiX5oYT8+vysfI5aweFuvS9zXwIZFaApG9YnJwUVr3Nwc8unLNrFqnLXMKgkvXpi0WmBqQXwE1FIWBSgZAyYVhQGErGdAWHEkETjXM1ayojBUgYbAGUidL5RkTc5erXstBnJzGozrOs2KRvGdALXuc7W5zjU40Vvm58jdYtai66+0Zz7tRqVmNxyophkUjUYZqkMUKZRBjNCKICFMPhvnjfP2Gsz4BR673xPSgSTDSOgyoLEdQT5s5b55Mhei16bWbARiQ0SNInWeYa1IsWrRG4MMZZrUjXIh1lmtwxmRqRmsVoiRqM1lLEkBpBkSWlYAkmsCTONIVJURQ0pIFJ5JDVQ6u4rNjpILG8ybVrGH2tJnTow4ZENGiQyNTkjRokanKkbkFrNoxqIxnWKjBpgCVakBvOTaNUixpMoSHEgkCKkFiipQoRxFJfJSeRuT6mTA9OfD37dLdFoJjFtvmn0zixvDIzq1jnlqRrEtGjFIVAEZEgCQYvYJ5+D4Z1v6P2x7aWswuduk1MmBNIIJIaCmtZ6q0IxQ0RT5ak2+FSjk+/6fym/4uvwPlHmhohVdkZFhkAUIpkASMhwASFJJYcKGs6KlhqSSxJJEgBQUxIgatSKGhFDSCSJTIj6SSQTnOUVjTWiGnFIhqkNiQChQoRxKFqc2i1JVRmo0FAJCpE6NBSSq1akNCWkpJpuc6tZKTNSagkaZFCOBBzTOtRtuxEUwJJJAgnw1zzvmi1CJLrrfE9KRqJmUuaVUSSVSRQWoasOHWbVQcMhIka1uc+NvoWrx/oCB11qkJkEajApS0WgEDaUnGGQQxt0JoQChSQKCCKSSWJBJrUItWDGqyiEKDgJWCqpoo6zVAmiFqBWoBNRM6UMOFhLCwRTzWmiqYGrzk8sqEFgohIFBJLVEtSVRQSWjFDmoi0+GdavOftRFJkhGjEkYEkUlqCwEYiUMRTGtSYvCdbnH+1e1KoMUcr5LcTMpAaQUAKwxLQMWFJasBUU8oHwrfszXX6PXse1aqDHNpJasSSVCRwIlBKLUVqtFotWHD7qmUsRQlVRV6UFJR1rWTAy0QgCdCCKB1BaIYtSCVoRSxIpaNVRQ1SmjU0VrOpDF1RpWNc86dwSHVaK111PUUICYOKFJJKJJGFIClqJCsipIIwRJI9ipJQKJEpqJKgRm/ukoVWakTCUklD2k68/10fdijpJzjUCSaaf/9k=");
  const skin3 = new Skins(3, "Amatista", "/img/amatista.png");
  const skin4 = new Skins(4, "Red", "https://img.freepik.com/fotos-premium/abstracto-diseno-fondo-hd-luz-alfabeto-color-rojo_851755-122930.jpg");
  const skin5 = new Skins(5, "Green", "/img/green.png");
  const skin6 = new Skins(6, "Brown", "https://img.freepik.com/foto-gratis/fondo-degradado-marron_53876-104923.jpg");
  const skin7 = new Skins(7, "Pink", "/img/pink.png");
  const skin8 = new Skins(8, "Gold", "/img/gold.png");
  const skin9 = new Skins(9, "Diamond", "/img/diamante.png");

  const skinArray = [skin1, skin2, skin3, skin4, skin5, skin6, skin7, skin8, skin9];
  let cardSkin = document.getElementById("cartas");
  let cardContainer = document.getElementById("skins");

  if (cardSkin && cardContainer) {
    cardSkin.classList.add("col-md-9", "mb-9");
    cardContainer.classList.add("d-flex", "justify-content-center", "align-items-center");
  }

  for (const skin of skinArray) {
    cardSkin.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${skin.image}" class="card-img-top" alt="${skin.color} Skin" style="max-height: 150px; max-width: 100%;">
        <div class="card-body">
          <h5 class="card-title">${skin.color}</h5>
          <p class="card-text"></p>
          <a href="#" class="btn btn-primary pickear">Seleccionar</a>
        </div>
      </div>
    `;
  }

  /*DOM SKINS*/
  const pickButtons = document.getElementsByClassName("pickear");
  const botones = document.querySelectorAll("#paper, #rock, #scissors,#paper2,#rock2,#scissors2");
  const sonidoSkin= document.getElementById("elegirSkin")

  let selectedButton = null;

  function cargarSkinSeleccionado() {
    const skinIndex = localStorage.getItem("selectedSkinIndex");
    if (skinIndex !== null) {
      seleccionarSkin(parseInt(skinIndex));
    }
  }
  
  function seleccionarSkin(index) {
    const skin = skinArray[index];
    botones.forEach(boton => {
      boton.style.backgroundImage = `url('${skin.image}')`;
    });
  }

  cargarSkinSeleccionado();

  for (let index = 0; index < pickButtons.length; index++) {
    const pickButton = pickButtons[index];

    pickButton.onclick = () => {
      if (selectedButton) {
        selectedButton.textContent = "Seleccionar";
        selectedButton.style.backgroundColor = "#0078a0";
        sonidoSkin.currentTime = 0;
        sonidoSkin.play();
      }

      pickButton.textContent = "Select";
      pickButton.style.backgroundColor = " #4c2882";

      const skin = skinArray[index];

      botones.forEach(boton => {
        boton.style.backgroundImage = `url('${skin.image}')`;
      });

      selectedButton = pickButton;
      localStorage.setItem("selectedSkinIndex", index.toString());
    };
  }











/*console.table(skinArray);
// for each //
skinArray.forEach((skhins) => console.log(skhins.color));
// find //
const buscar = skinArray.find((skhins) => skhins.color === "pink");
console.log(buscar);


if (buscar === undefined) {
  console.log("Skin inexistente");
} else {
  console.log("Skin encontrada");
}
//filter//
let tokenMax = (prompt("Ingrese los tokens maximo que esta dispuesto a pagar por una skin"));
const tokenBajo = skinArray.filter((skhins) => skhins.tokens < tokenMax);
console.log(tokenBajo);
// Slice//
const piel = skinArray.slice(skinArray);
console.log(piel);*/

/* Ejemplo promesas con fetch
function obtenerDatosDeSkins() {
    const urlAPI = "https://api.ejemplo.com/skins"; 

    return fetch(urlAPI)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      });
  }

  
  function actualizarTarjetasDeSkins(datosDeSkins) {
    const elementosDeTarjeta = document.querySelectorAll(".card");
    
    for (let i = 0; i < datosDeSkins.length; i++) {
      const skin = datosDeSkins[i];
      const tarjeta = elementosDeTarjeta[i];
      const elementoImagen = tarjeta.querySelector(".card-img-top");
      const elementoTitulo = tarjeta.querySelector(".card-title");

      elementoImagen.src = skin.image;
      elementoImagen.alt = `${skin.color} Skin`;
      elementoTitulo.textContent = skin.color;
    }
  }

  
  obtenerDatosDeSkins()
    .then(datosDeSkins => {
      actualizarTarjetasDeSkins(datosDeSkins);
    })
    .catch(error => {
      console.error(error);
    });
});
+
*/

















