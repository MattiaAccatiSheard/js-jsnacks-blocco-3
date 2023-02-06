// Snack1
// Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.

let min = parseInt(prompt("inserisci un numero:"))
let max = parseInt(prompt("inserisci un numero maggiore di quello precedente"))
console.log("numero basso:" + min);
console.log("numero alto:" + max);

const num = Math.floor(Math.random()*(max+min)-min);
console.log(num);

