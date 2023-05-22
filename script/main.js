console.log('principi.js loaded');

let name = document.getElementById('name');

let genera = document.getElementById('genera');

let reset = document.getElementById('reset');

console.log(km)

document.getElementById('biglietto').style.visibility='hidden'

function display_results(){
    document.getElementById('biglietto').style.visibility='visible';
    out_name.innerHTML = name.value;
    console.log(out_name);
    let km = document.getElementById('km').value;
    console.log(km);
    let prezzo = `${km * 0.21}`
    console.log(prezzo);
    prezzo_arrotondato = Math.round(prezzo * 100) / 100;

    if (document.getElementById('age_range').value == "minorenne") {
        document.getElementById('tipo_biglietto').innerHTML = 'Biglietto Under 18'
        document.getElementById('prezzo').innerHTML = `${(prezzo_arrotondato * 0.8).toFixed(2)}€`
    } else if (document.getElementById('age_range').value == "over_65") {
        document.getElementById('tipo_biglietto').innerHTML = 'Biglietto Over 65'
        document.getElementById('prezzo').innerHTML = `${(prezzo_arrotondato * 0.6).toFixed(2)}€`
    } else {
        document.getElementById('tipo_biglietto').innerHTML = 'Biglietto Standard'
        document.getElementById('prezzo').innerHTML = `${prezzo_arrotondato}€`
    }

    let num_carrozza = Math.floor((Math.random() * 6) + 1);
    document.getElementById('num_carrozza').innerHTML = num_carrozza

    let codice_cp = Math.floor(Math.random() * 99999) + 10000;
    document.getElementById('codice_cp').innerHTML = codice_cp
}

function reset_form () {
    document.getElementById('dati').reset();
}

genera.addEventListener('click', display_results);
reset.addEventListener('click', reset_form);
