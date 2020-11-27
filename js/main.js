$(document).ready(
  function(){

//     Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

function generateNumber(min, max) {
  return Math.floor(Math.random()* (max - min) + min);
};

function userPrompt(){
  var arrayNumeriUtente = [];

  while (arrayNumeri.length < 5) {
    var numeroCaso = generateNumber(1, 100);
    if (arrayNumeri.includes(numeroCaso) == false) {
      arrayNumeri.push(numeroCaso);
    }
  }
  }
 }
var arrayNumeri = [];

while (arrayNumeri.length < 5) {
  var numeroCaso = generateNumber(1, 100);
  if (arrayNumeri.includes(numeroCaso) == false) {
    arrayNumeri.push(numeroCaso);
  }
}
alert(arrayNumeri);


setTimeout(userPrompt, 4000);



  }
);
