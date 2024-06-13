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

  const skin1 = new Skins(1, "Blue", "/img/blue.png");
  const skin2 = new Skins(2, "Yellow", "/img/yellow.png");
  const skin3 = new Skins(3, "Amatista", "/img/amatista.png");
  const skin4 = new Skins(4, "Red", "/img/red.png");
  const skin5 = new Skins(5, "Green", "/img/green.png");
  const skin6 = new Skins(6, "Brown", "/img/brown.png");
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

















