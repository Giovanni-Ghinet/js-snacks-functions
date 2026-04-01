/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo
 le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let letteraDaCercare;
const lettereValide = ["A", "L", "M"];

// controllo che le lettere inserite siano quello date per avere un risultato
do {
    letteraDaCercare = prompt("Inserisci una lettera tra A, L, M:").toUpperCase();
    
    if (!lettereValide.includes(letteraDaCercare)) {

        alert("inserisci Solo A, L, M. Riprova!");
        
    }

} while (!lettereValide.includes(letteraDaCercare));

// Dichiara la funzione qui.


//funzione per stampare solo i nomi che iniziano con quella lettera
function privilegiati(nomi, iniziale) {

    const containerNomiPerLettera = []

    for (let i = 0; i < nomi.length; i++) {

        const nomePerA = nomi[i][0];

        if (nomi[i][0] === iniziale) {

            containerNomiPerLettera.push(nomi[i]);

        }
    }
    return containerNomiPerLettera;
}
// Invoca la funzione qui e stampa il risultato in console

const nomePerIniziale = privilegiati(names, letteraDaCercare);
console.log(nomePerIniziale);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]