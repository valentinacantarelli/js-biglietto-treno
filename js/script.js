// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
//  Questo richiederà un minimo di ricerca.

var km = parseInt(prompt("Ciao!Quanti Km vuoi percorrere?"));

var eta = parseInt(prompt("Quanti anni hai?"));

var prezzoBiglietto = km * 0.21 ;

var bigliettoMinorenne;  

var bigliettoSenior;


if ( eta <= 18){
    bigliettoMinorenne = prezzoBiglietto - prezzoBiglietto * 20 / 100;
} else if (eta >= 65){
    bigliettoSenior = prezzoBiglietto - prezzoBiglietto *40 / 100;
} else {

}


if (bigliettoMinorenne){
    document.getElementById("prezzo_biglietto").innerHTML += ("Prezzo con riduzione Under 18:"+ " " + bigliettoMinorenne.toFixed(2) + '€');
   
} else if(bigliettoSenior){
    document.getElementById("prezzo_biglietto").innerHTML += ("Prezzo con riduzione Over 65:"+ " " + bigliettoSenior.toFixed(2) + '€');
}else {
    document.getElementById("prezzo_biglietto").innerHTML += ("Prezzo a tariffa intera:"+ " " + prezzoBiglietto.toFixed(2) + '€');
}