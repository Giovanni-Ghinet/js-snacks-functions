/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nameProva = 'Mario';


// Dichiara la funzione qui.

function SalutoDinamico(nome) {

    const ora = Math.floor(Math.random() * 24);

    let saluto;

    if (ora < 13){
        saluto = "Buongiorno";

    } else if (ora < 17){
        saluto = "Buon pomeriggio";

    } else {
        saluto = "Buonasera";

    }

    return `${saluto} ${nome} ora: ${ora}`;
    
}
// Invoca la funzione qui e stampa il risultato in console

console.log(SalutoDinamico(nameProva));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.