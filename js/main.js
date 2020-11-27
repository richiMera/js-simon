$(document).ready(
  function(){

//     Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

    var arrayNumeri = [];

    while (arrayNumeri.length < 5) {
      var numeroCaso = generateNumber(1, 100);
      if (arrayNumeri.includes(numeroCaso) == false) {
        arrayNumeri.push(numeroCaso);
      }
    }
    alert(arrayNumeri);

    // for (var i = 0; i < array.length; i++) {
    //   array[i]
    // }


    setTimeout(
      function () {

        var arrayNumeriUtente = [];

        while (arrayNumeriUtente.length < 5) {
          var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"))
          if (arrayNumeriUtente.includes(numeroUtente) == false) {
            arrayNumeriUtente.push(numeroUtente);
            console.log(arrayNumeriUtente);
          }
        };

        var numeriGiusti = [];

        for (var i = 0; i < arrayNumeriUtente.length; i++) {
          var numero = arrayNumeriUtente[i];
          if (arrayNumeri.includes(numero) == true) {
            numeriGiusti.push(numero);
            console.log(numeriGiusti);
          }
        };

        alert(" hai indovinato " + numeriGiusti.length + " e sono " + numeriGiusti )

      }, 4000);


    function generateNumber(min, max) {
      return Math.floor(Math.random()* (max - min) + min);
    };





  }
);
