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
    let numberBtns = document.querySelectorAll('.numberButtons')
    let operatorBtns = document.querySelectorAll('.operatorButtons')

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
    // beim Betätigen einer number-Button, soll die Anzeige auf dem Display sich dementsprechend ändern
    // beim Betätigen der erase-Buttons, soll das Display dementsprechend (delete / clear) gereinigt werden
    // beim Betätigen der operator-buttons (einschließlich Komma-Button), soll sich das display dementsprechend anpassen und die Funktion hinter der jeweiligen operators ausführen
    // die Funktionen hinter den operator-Buttons einpflegen

function showNumberButtonValue(event) {
    const value = event.target.value;

    if (display.textContent === '0') {
        display.textContent = value;
    }
    else {
        display.textContent += value;
    }
}

function showOperatorButtonValue(event) {
    const value = event.target.value;

    if (display.textContent !== '0') {
        display.textContent += ` ${value} `;
    }
}

function clearDisplay() {
    display.textContent = 0;
}

function deleteDisplay() {
    // überprüft, ob etwas außer 0
        // falls ja => entferne letztes Zeichen, wenn nur noch ein Zeichen, entferne dieses und mach eine Null hin
            // überprüfe, ob Zahl oder Operator
                // falls Operator (außer Komma) => lösche drei Zeichen
                // falls Zahl (einschließlich Komma) => lösche ein Zeichen
        // falls nein => bleibt gleich
    let content = display.textContent;

    if (content.length <= 1) {
        display.textContent = '0';
    }
    else if (content.length > 1) {
        if (content.endsWith(' ')) {
            display.textContent = display.textContent.slice(0, -3);
        }
        else {
            display.textContent = display.textContent.slice(0, -1);
        }
    }
}

function add(x, y) {
    return x + y;
}

function minus(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}



numberBtns.forEach(btn => {
    btn.addEventListener('click', showNumberButtonValue)
})

operatorBtns.forEach(btn => {
    btn.addEventListener('click', showOperatorButtonValue)
})

clearBtn.addEventListener('click', clearDisplay)

deleteBtn.addEventListener('click', deleteDisplay)



// Ausgabe
    // Das Display soll das Ergebnis der Operation anzeigen