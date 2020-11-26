$(document).ready(
  function(){

//     Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

function generateNumber(min, max) {
  return Math.floor(Math.random()* (max - min) + min);
};

// function userPrompt(){
//   for (var i = 0; i <5; i++) {
//     parseInt(prompt("inserisci un numero"));
//   }
//  }



    var arrayNumeri = [];

    for (var i = 0; i < 5; i++) {
     var random = generateNumber(1, 50);
     arrayNumeri.push(random);
     console.log(arrayNumeri);
    }

    alert(arrayNumeri);


  }
);
