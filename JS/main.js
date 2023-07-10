/*_Esercizio Finale JS: Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare
 l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€

_Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo 
finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è 
valido e il prezzo finale viene calcolato senza applicare sconti.I codici sconto sono:
- YHDNU32
- JANJC63
- PWKCN25
- SJDPO96
- POCIE24
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” 
(con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send.
*/

//Dichiariamo l'array con i codici sconto 
    
    let arrayDiscount = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


    function calcolaPrezzo (event) {
        event.preventDefault()
    //Dichiriamo le nostre variabile che ci serviranno col form
        let hoursRequested = parseInt(document.getElementById("hours").value);
        let workOffer = parseInt(document.getElementById("type-of-work").value);
        let codPerSconto =(document.getElementById("discount-code").value);
    //Dichiariamo la variabile del prezzo finale il quale sarà soggetto a calcoli di prezzo e infine di sconto.
        let prezzoWork = 0 
        /*
        if (workOffer=="1") {
            prezzoWork=hoursRequested*20.5
            console.log("Il prezzo della sua work offer è: " + prezzoWork)
        } else if (workOffer=="2") {
            prezzoWork=hoursRequested*15.3
            console.log("Il prezzo della sua work offer è: " + prezzoWork)
        } else if (workOffer=="3") {
            prezzoWork=hoursRequested*33.6
            console.log("Il prezzo della sua work offer è: " + prezzoWork)
        } else {
            console.log("Scegliere un type of work!")
        }
        */
        //Meglio usare lo switch per giocare con le condizioni e non mettere tanti IF
        switch (workOffer) {
            case 1 :
                //Backend
                prezzoWork = hoursRequested * 20.5;
                console.log("Il prezzo della sua work offer è: " + prezzoWork);
                break;
            case 2 :
                //Frontend
                prezzoWork = hoursRequested * 15.3;
                console.log("Il prezzo della sua work offer è: " + prezzoWork);
                break;
            case 3 :
                //Proyect Analisys 
                prezzoWork = hoursRequested * 33.6;
                console.log("Il prezzo della sua work offer è: " + prezzoWork);
                break;               
        }
        
        //Applichiamo lo sconto al prezzo precedentemente calcolato con le diverse ore 
        let DiscountCodePresent = false;
        for (let i = 0 ; i < arrayDiscount.length; i++) {
            if (arrayDiscount[i] == codPerSconto) {
            DiscountCodePresent = true;
            }
        }
        if (DiscountCodePresent) {
            prezzoWork = prezzoWork * 0.75;
            
            }
        console.log("Il prezzo finale con codice sconto della sua work offer è: " + prezzoWork);
        /*Richiamiamo il nostro prezzo con il toFixed per far il programma prendere solo i primi due numeri 
        dopo la virgola. Inseriamo il nostro messaggio e il risultato finale del prezzo dentro il nostro html*/
        prezzoWork = prezzoWork.toFixed(2)
        document.getElementById("price").innerHTML = "Il prezzo della sua work offer è: " + prezzoWork + "€";
    }
