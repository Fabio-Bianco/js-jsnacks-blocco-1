/*
jsnack1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

let number= [];
for (let i = 0; i < 2; i++) {
    number[i] = parseFloat(prompt(`Inserisci il numero ${i + 1}:`));
}
if (number[0] > number[1]) {
    console.log((alert `Il numero maggiore è: ${number[0]}`));
} else if (number[1] > number[0]) {
    console.log((alert`Il numero maggiore è: ${number[1]}`));
} else {
    console.log(alert ("I numeri sono uguali."));
}


