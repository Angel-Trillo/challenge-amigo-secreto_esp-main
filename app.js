// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

// Referencias al "componente" (nodos del DOM)
const entradaAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const salidaResultado = document.getElementById('resultado');

function agregarAmigo() {
  let nombreAmigo = entradaAmigo.value.trim();

  if (entradaAmigo.value === '') {
    alert("Por favor, Inserte un nombre.");
  } else {
    amigos.push(nombreAmigo);
    entradaAmigo.value = '';
  }
  actualizarLista();
}

//actualizar lista corregido.
function actualizarLista() {
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = amigos[i];
    listaAmigos.appendChild(item);
  }

}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos a un amigo antes de sortear.");
  } else {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceAleatorio];
    salidaResultado.innerHTML = ` El amigo secreto es ${ganador}`;
  }
}

