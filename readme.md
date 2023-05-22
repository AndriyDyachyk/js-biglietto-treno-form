PROBLEMA: RICEVENDO L'IMPUT DI NOME, DISTANZA DA PERCORRERE E RANGE DI ETA' ATTRAVERSO UN FORM, GENERARE UN BIGLIETTO DEL TRENO CON IL NOMINATIVO INSERITO, IL TIPO DI BIGLIETTO IN BASE AL RANGE DI ETA' UN NUMERO DI CARROZZA, UN CODICE UNIVOCO DEL BIGLIETTO A 5 CIFRE, CON IL CONSEGUENTE PREZZO SCONTATO O MENO DIPENDENTEMENTE DALLA CATEGORIA

1 - ricevere gli imput dall'utente
    1.1 Creare un form per l'inserimento del nome e del cognome
    1.2 Creare un form per l'inserimento della distanza da percorrere
    1.3 Creare un form per l'inserimento della fascia di età
2 - salvare i dati inseriti mediante un pulsante di submit
3 - creare un tasto di reset in si volessero annullare gli imput precedentemente inseriti
4 - creare una sezione "biglietto" che viene calcolata e generate in base agli imput precedenti
    4.1 Creare un output del nome inserito dall'utente
    4.2 Creare un output della tipologia di biglietto in base alla fascia di età selezionata
    4.3 Creare un output randomico per il numero di carrozza da 1 a 6 (media trenitalia)
    4.4 Creare un output randomico di codice seriale numerico composto da 5 cifre
    4.5 Creare un output del prezzo del biglietto in base alle caratteristiche indicate all'inizio
        4.5.1 Prendere l'imput della distanza e moltiplicarlo per 0,21€ per kilometro
        4.5.2 Creare un output del risultato del punto precedente
        4.5.3 Rendere visibile il risultato del punto precedente e se la fascia di età inserita risulta essere "Maggiorenne"
        4.5.4 Applicare una variazione di prezzo con sconto pari al 20% del valore di output del punto 4.5.2 se la fascia di età risulta essere "Minorenne"
        4.5.5 Applicare una variazione di prezzo con sconto pari al 40% del valore di output del punto 4.5.2 se la fascia di età risulta essere "Over 65"