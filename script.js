'use strict'

// Ziel des Algorithmus
    // Ein Taschenrechner, der alle grundlegenden mathematischen Operatoren enthält, die man so typischerweise kennt

// Eingabe
    // Variablen
    let num1 = ''
    let operator = ''
    let num2 = ''

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

    if (operator === '') {
        if (value === '.' && num1.includes('.')) return;
        num1 += value;
        display.textContent = num1;
    }
    else {
        if (value === '.' && num2.includes('.')) return;
        num2 += value;
        display.textContent = num2;
    }
}

function showOperatorButtonValue(event) {
    if (num1 !== '' && operator === '') {
        operator = event.target.value;
        display.textContent = ` ${num1} ${operator} `;
    }
}

function clearDisplay() {
    display.textContent = 0;
    num1 = '';
    operator = '';
    num2 = '';
}

function deleteDisplay() {
    // überprüft, ob etwas außer 0
        // falls ja => entferne letztes Zeichen, wenn nur noch ein Zeichen, entferne dieses und mach eine Null hin
            // überprüfe, ob Zahl oder Operator
                // falls Operator (außer Komma) => lösche drei Zeichen
                // falls Zahl (einschließlich Komma) => lösche ein Zeichen
        // falls nein => bleibt gleich
    if (operator === '') {
        num1 = num1.slice(0, -1);
        display.textContent = num1 === '' ? '0' : num1;
    }
    else if (num2 === '') {
        operator = '';
        display.textContent = num1;
    }
    else {
        num2 = num2.slice(0, -1);
        display.textContent = num2 === ''
            ? `${num1} ${operator}`
            : `${num1} ${operator} ${num2}`;
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

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return minus(num1, num2);
        case '/':
            return divide(num1,num2);
        case '*':
            return multiply(num1, num2);
        default:
            return 'Fehler';
    }
}

function calculateResult() {
    let result = operate(operator, parseFloat(num1), parseFloat(num2))
    display.textContent = result;
    num1 = result.toString();
    operator = '';
    num2 = '';
}

numberBtns.forEach(btn => {
    btn.addEventListener('click', showNumberButtonValue)
})

operatorBtns.forEach(btn => {
    btn.addEventListener('click', showOperatorButtonValue)
})

clearBtn.addEventListener('click', clearDisplay)

deleteBtn.addEventListener('click', deleteDisplay)

euqalBtn.addEventListener('click', calculateResult)



// Ausgabe
    // Das Display soll das Ergebnis der Operation anzeigen