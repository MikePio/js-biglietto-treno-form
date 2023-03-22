/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/


// - salvo in una variabile i dati del input che chiede Num. di kilometri da percorrere in treno
// - salvo in una variabile i dati del input che chiede il nome e il cognome del passeggero
// - salvo in una variabile i dati dell'option nella select che chiede se il passeggero è maggiornenne o minorenne o over65
// - salvo in una varibile il prezzo del biglietto standard che è definito in base ai km (0.21 € al km) 
// - creo una condizione if dove salvo in una varibile uno sconto del 20% per i minorenni
// - creo una condizione else if dove salvo in una varibile uno sconto del 40% per gli over 65
// - creo una condizione else dove salvo in una varibile il prezzo del biglietto standard per adulti che è definito in base ai km (0.21 € al km)
// - creo una variabile con la Math random per generare un numero casuale random da 1 a 5 per le carrozze 
// - creo una variabile con la Math random per generare un numero casuale random da 1 a 99999 per il codice CP 
// - creo un EventListener per generare l'output cioè mostrare i dati inseriti negli input nel momento in cui viene cliccato il pulsante "Genera"
// - creo una variabile booleana ed un EventListener per nascondere e mostrare i dati del biglietto nel momento in cui viene cliccato il pulsante "Genera"
// - creo un EventListener per resettare tutti i dati e far sparire il biglietto generato

const nameInput = document.getElementById('name-input');
const kmInputs = document.getElementById('km-inputs');
const ageSelect = document.getElementById('age-select');
const generateBtn = document.querySelector('.generate-btn');
const resetBtn = document.querySelector('.reset-btn');

let userPrice;
let underagePrice;
let over65Price;

let ticketGenerated = true;


console.log(nameInput);
console.log(kmInputs);
console.log(ageSelect);
console.log(generateBtn);
console.log(resetBtn);

// prezzo (0.21 * i km) generato per ogni volta che si clicca il pulsante generateBtn
generateBtn.addEventListener('click', function(){
  const kmValue = parseFloat(kmInputs.value);
  userPrice = .21 * kmValue;
  console.log(userPrice);
  console.log(`Il prezzo standard per ${kmValue}km è ${userPrice.toFixed(2)}€`);

  const nameValue = nameInput.value;
  document.querySelector('.name').innerHTML = `${nameValue}`;
  
  // sconto del 20% per minorenni
  
  let ageValue = ageSelect.value;
  if(ageValue == 'underage' ){ 
    underagePrice = userPrice - (userPrice * .20);
    console.log('underagePrice', underagePrice);
    console.log(`Il prezzo finale scontato del 20% per minorenni è di ${underagePrice.toFixed(2)}€`);
    document.querySelector('.ticket-cost').innerHTML = `${underagePrice.toFixed(2)}€`;
    document.querySelector('.offer').innerHTML = `Biglietto scontato del 20% per minorenni`;

    }

  // sconto del 40% per over65
  else if(ageValue == 'over65'){
    over65Price = userPrice - (userPrice * .40);
    console.log('over65Price', over65Price);
    console.log(`Il prezzo finale scontato del 40% per gli over 65 è di ${over65Price.toFixed(2)}€`);
    document.querySelector('.ticket-cost').innerHTML = `${over65Price.toFixed(2)}€`;
    document.querySelector('.offer').innerHTML = `Biglietto scontato del 40% per over 65`;

  }

  else{
    console.log(`Il prezzo finale per un adulto è di ${userPrice.toFixed(2)}€`);
    document.querySelector('.ticket-cost').innerHTML = `${userPrice.toFixed(2)}€`;
    document.querySelector('.offer').innerHTML = `Biglietto standard`;
  }



  // * Far comparire e sparire il biglietto
  // toggle ticket
  const ticket = document.querySelector('.ticket');
  // se il flag vedo testo è true aggiungo la classe d-none
  if(ticketGenerated){
    ticket.classList.remove('d-none');
    // tutte le volte che clicco il flag diventa il contrario di se stesso quindi da true a false e da false a true
    ticketGenerated = !ticketGenerated;
    // console.log('true');
    // altrimenti la rimuovo
  }else{
    ticket.classList.add('d-none');
    // tutte le volte che clicco il flag diventa il contrario di se stesso quindi da true a false e da false a true
    ticketGenerated = !ticketGenerated;
    // console.log('false');
  }



});






















































