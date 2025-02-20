'use strict'

// Ziel des Algorithmus
    // Ein Taschenrechner, der alle grundlegenden mathematischen Operatoren enthält, die man so typischerweise kennt

// Eingabe
    // das Display
    let display = document.querySelector('#display')

    // erase-Buttons
    let clearBtn = document.querySelector('#clear')
    let deleteBtn = document.querySelector('#delete')

    // Button-Klasse
    let btns = document.querySelectorAll('.buttons')
    let numberBtns = document.querySelector('.numberButtons')
    let operatorBtns = document.querySelector('.operatorButtons')

    // number-Buttons
    let zeroBtn = document.querySelector('#zero')
    let oneBtn = document.querySelector('#one')
    let twoBtn = document.querySelector('#two')
    let threeBtn = document.querySelector('#three')
    let fourBtn = document.querySelector('#four')
    let fiveBtn = document.querySelector('#five')
    let sixBtn = document.querySelector('#six')
    let sevenBtn = document.querySelector('#seven')
    let eightBtn = document.querySelector('#eight')
    let nineBtn = document.querySelector('#nine')

    // operater-Buttons
    let divideBtn = document.querySelector('#divide')
    let multiplyBtn = document.querySelector('#multiply')
    let minusBtn = document.querySelector('#minus')
    let plusBtn = document.querySelector('#plus')
    let euqalBtn = document.querySelector('#equal')
    let commaBtn = document.querySelector('#comma')


// Verarbeitung
    // beim Betätigen einer number-Button (einschließlich Komma-Button), soll die Anzeige auf dem Display sich dementsprechend ändern
    // beim Betätigen der erase-Buttons, soll das Display dementsprechend (delete / clear) gereinigt werden
    // beim Betätigen der operator-buttons, soll sich das display dementsprechend anpassen und die Funktion hinter der jeweiligen operators ausführen
    // die Funktionen hinter den operator-Buttons einpflegen

function showButtonValue(event) {
    const value = event.target.value;

    if (display.textContent === '0') {
        display.textContent = value;
    }
    else {
        display.textContent += value;
    }
    
}

btns.forEach(btn => {
    btn.addEventListener('click', showButtonValue)
});






// Ausgabe
    // Das Display soll das Ergebnis der Operation anzeigen