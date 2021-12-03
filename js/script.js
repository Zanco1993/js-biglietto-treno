let biglietto = document.getElementById("output");

let numeroKm = prompt("Quanti kilometri vuoi fare?");
let age = parseInt(prompt("Qual è la tua età?"));

console.log(numeroKm);
console.log(age);

let prezzoBiglietto = 0.21 * numeroKm;
const scontoMinorenne = prezzoBiglietto * 0.2;
const scontoOver = prezzoBiglietto * 0.4;
let prezzoFinaleBiglietto;

if (age < 18) {
    prezzoFinaleBiglietto = prezzoBiglietto - scontoMinorenne;
    biglietto.innerHTML = `Il costo del biglietto se sei minorenne è di ${prezzoFinaleBiglietto}€`;
    Math.round(prezzoFinaleBiglietto * 100) / 100;

} else if (age > 65) {
    prezzoFinaleBiglietto = prezzoBiglietto - scontoOver;
    biglietto.innerHTML = `Il costo del biglietto se sei over 65 è di ${prezzoFinaleBiglietto}€`;
    Math.round(prezzoFinaleBiglietto * 100) / 100;

} else {
    prezzoFinaleBiglietto = prezzoBiglietto
    biglietto.innerHTML = `Il costo del tuo biglietto è di ${prezzoFinaleBiglietto}€`;
    Math.round(prezzoFinaleBiglietto * 100) / 100;

}

