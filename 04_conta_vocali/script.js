/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

let ParolaUtente = prompt("Inserisci una parola");

// Dichiara la funzione qui.

function contatoreDiVocali(parola) {

    const vocali = "aeiouAEIOUàèìòùÀÈÌÒÙ";

    let contatore = 0;

    const listaVocali = [];

    for (let i = 0; i < parola.length; i++) {
        
        if (vocali.includes(parola[i])) {

            contatore++;

            listaVocali.push(parola[i]);
        }
    }
    return {contatore, listaVocali}

}

// Invoca la funzione qui e stampa il risultato in console

const vocaliDellaParola = contatoreDiVocali(ParolaUtente);
console.log((vocaliDellaParola.contatore), (vocaliDellaParola.listaVocali.join(", ")));




//Risultato atteso se si passa 'javascript': 3 (a, a, i)