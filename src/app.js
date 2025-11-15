import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {
  function obtenerNumeroAleatorio(max){
    return Math.floor(Math.random()* max);
    }
    function obtenerUnElemento(){
      let excuse = `${who[obtenerNumeroAleatorio (who.length)]}` + `${action[obtenerNumeroAleatorio (action.length)]}` + `${what[obtenerNumeroAleatorio (what.length)]}` + `${when[obtenerNumeroAleatorio (when.length)]}`
    document.getElementById("excuse").innerHTML = excuse;
    }
    obtenerUnElemento()
}
