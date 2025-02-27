/*jsnack2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/


let word = [];
for (let i = 0; i < 2; i++) {
    word[i] = prompt(`Inserisci la parola ${i + 1}:`);
}

if (word[0].length < word[1].length) {
    console.log(word[0], word[1]);
} else if (word[1].length < word[0].length) {
    console.log(word[1], word[0]);
} else {
    console.log("Le parole hanno la stessa lunghezza:", word[0], word[1]);
}