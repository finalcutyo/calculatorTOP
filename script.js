const LDISPLAY = document.querySelector('#l-display');
const RDISPLAY = document.querySelector('#r-display')

const ACBUTTON = document.querySelector('#allClear');
const CEBUTTON = document.querySelector('#entryClear');
const SOLVE = document.querySelector('#solve');

const DIVIDE = document.querySelector('#div');
const EXPO = document.querySelector('#exponent');
const MULT = document.querySelector('#multiply');
const ADD = document.querySelector('#addition');
const SUBT = document.querySelector('#minus');

const POSNEG = document.querySelector('#value');
const DECIMAL = document.querySelector('#decimal');

let solveFunc = '';

const NINE = document.querySelector('#nine');
const EIGHT = document.querySelector('#eight');
const SEVEN = document.querySelector('#seven');
const SIX = document.querySelector('#six');
const FIVE = document.querySelector('#five');
const FOUR = document.querySelector('#four');
const THREE = document.querySelector('#three');
const TWO = document.querySelector('#two');
const ONE = document.querySelector('#one');
const ZERO = document.querySelector('#zero');

ACBUTTON.addEventListener('click', () => {
    RDISPLAY.innerText = '';
    LDISPLAY.innerText = '';
    }
);
CEBUTTON.addEventListener('click', () => {
    RDISPLAY.innerText = '';
    }
);

DIVIDE.addEventListener('click', () => {
    solveFunc = 'div';
    transferDisplay();
});
EXPO.addEventListener('click', () => {
    solveFunc = 'pow';
    transferDisplay();
});
MULT.addEventListener('click', () => {
    solveFunc = 'mult';
    transferDisplay();
});
ADD.addEventListener('click', () => {
    solveFunc = 'add';
    transferDisplay();
});
SUBT.addEventListener('click', () => {
    solveFunc = 'minus';
    transferDisplay();
});


SOLVE.addEventListener('click', () => {
    let a = parseFloat(LDISPLAY.innerText);
    let b = parseFloat(RDISPLAY.innerText);

    switch (solveFunc) {
        case 'div':
            LDISPLAY.innerText = RDISPLAY.innerText;
            RDISPLAY.innerText = divideNum(a, b);
            solveFunc = '';
            break;
        case 'mult':
            LDISPLAY.innerText = RDISPLAY.innerText;
            RDISPLAY.innerText = multiplyNum(a, b);
            solveFunc = '';
            formatDisplay();
            break;
        case 'add':
            LDISPLAY.innerText = RDISPLAY.innerText;
            RDISPLAY.innerText = addNum(a, b);
            solveFunc = '';
            formatDisplay();
            break;
        case 'minus':
            LDISPLAY.innerText = RDISPLAY.innerText;
            RDISPLAY.innerText = subtractNum(a, b);
            solveFunc = '';
            break;
        case 'pow':
            LDISPLAY.innerText = RDISPLAY.innerText;
            RDISPLAY.innerText = power(a, b);
            solveFunc = '';
            formatDisplay();
            break;
        default:
            break;
    }
    }
);

NINE.addEventListener('click', () => {
    if (checkDisplay()) {
        RDISPLAY.innerText += 9;
    }
})
EIGHT.addEventListener('click', () => {
    if (checkDisplay()) {
        RDISPLAY.innerText += 8;
    }
})
SEVEN.addEventListener('click', () => {
    if (checkDisplay()) {
        RDISPLAY.innerText += 7;
    }
})
SIX.addEventListener('click', () => {
    if (checkDisplay()) {
        RDISPLAY.innerText += 6;
    }
})
FIVE.addEventListener('click', () => {
    if (checkDisplay()) {
        RDISPLAY.innerText += 5;
    }
})
FOUR.addEventListener('click', () => {
    if (checkDisplay()) {
        RDISPLAY.innerText += 4;
    }
})
THREE.addEventListener('click', () => {
    if (checkDisplay()) {
        RDISPLAY.innerText += 3;
    }
})
TWO.addEventListener('click', () => {
    if (checkDisplay()) {
        RDISPLAY.innerText += 2;
    }
})
ONE.addEventListener('click', () => {
    if (checkDisplay()) {
        RDISPLAY.innerText += 1;
    }
})
ZERO.addEventListener('click', () => {
    if (checkDisplay()) {
        RDISPLAY.innerText += 0;
    }
})

DECIMAL.addEventListener('click', () => {
    if (RDISPLAY.innerText.length <= 7) {
        RDISPLAY.innerText += '.';
    }
})


function divideNum (x, y) {
    if (y == 0) {
        LDISPLAY.innerText = '';
        return 'Cannot Div Zero';
    }
    let value = x / y;
    return value;
}

function multiplyNum (x, y) {
    let value = x * y;
    return value; 
}

function addNum (x, y) {
    let value = x + y;
    return value;
}

function subtractNum (x, y) {
    let value = x - y;
    return value;
}

function power (x, y) {
    let value = Math.pow(x,y)
    return value;
}


function formatDisplay () {
    let right = parseFloat(RDISPLAY.innerText);
    let left = parseFloat(LDISPLAY.innerText);

    if (right > 99999999 || left > 99999999) {
        LDISPLAY.innerText = ''
        RDISPLAY.innerText = "ERROFLOW"
    }

}

function checkDisplay () {
    if (RDISPLAY.innerText.length >= 8){ 
        return false;
    }
    if (LDISPLAY.innerText.length >= 8) {
        return false;
    }
    return true; 
}


function transferDisplay () {
    LDISPLAY.innerText = RDISPLAY.innerText;
    RDISPLAY.innerText = '';    
}