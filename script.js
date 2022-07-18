//toggle between two type

const interestType = {
    SI: 0,
    CI: 1
}

var selectedType = interestType.SI;

var Si = document.getElementById('si');
var Ci = document.getElementById('ci');

document.getElementById('freq').style.display = 'none';
document.getElementById('result').style.display = 'none';

function changeActiveMode() {
    if (selectedType === interestType.CI) {
        Ci.classList.add('active');
        Si.classList.remove('active');
        document.getElementById('freq').style.display = 'block';
    }
    else {
        document.getElementById('freq').style.display = 'none';
        Si.classList.add('active');
        Ci.classList.remove('active');
    }
}

function reset() {
    document.getElementById('rate').value = '';
    document.getElementById('time').value = '';
    document.getElementById('principal').value = '';
    document.getElementById('frq').value = '';

    document.getElementById('result').style.display = 'none';
}

Si.addEventListener('click', () => {
    reset();
    selectedType = interestType.SI;
    changeActiveMode();
})

Ci.addEventListener('click', () => {
    reset();
    selectedType = interestType.CI;
    changeActiveMode();
})


// Logic Part

var btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    let p = document.getElementById('principal').value;
    let r = document.getElementById('rate').value / 100;
    let t = document.getElementById('time').value;
    let f = document.getElementById('frq').value;
    let res = 0.0;

    if (!p || !r || !t) {
        alert("All fields are required.");
        return;
    }

    if (selectedType === interestType.CI && !f) {
        alert("Please enter Compounding Frequency.")
        return;
    }

    if (selectedType === interestType.SI) {
        res = Math.round(p * (1 + (r * t)));
        document.getElementById('result').style.display = 'block';
    }
    else {
        res = (p * Math.pow((1 + r / f), (f * t))).toFixed(2);
        document.getElementById('result').style.display = 'block';
    }

    let result = document.getElementById('res');
    result.innerHTML = `Total Amount : ${res}`;
})