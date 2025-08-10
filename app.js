// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

// Referencias al "componente" (nodos del DOM)
const entradaAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const salidaResultado = document.getElementById('resultado');

function agregarAmigo(){
  let nombreAmigo = entradaAmigo.value.trim();

if(entradaAmigo.value === ''){
  alert("Porfavor, Inserte un nombre");
}else{
  amigos.push(nombreAmigo);
  entradaAmigo.value = '';
}
actualizarLista();
}
function actualizarLista(){
  amigos.innerHTML = "";
  for(let i = 0; i < amigos.length; i++){
  let item = document.createElement("li");
  item.innerHTML = amigos[i];
  listaAmigos.appendChild(item);  
  }
  
  }
  

