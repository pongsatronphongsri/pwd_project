let result = '';

function appendToResult(value) {
    result += value;
    document.getElementById('result').value = result;
}

function calculate() {
    try {
        result = eval(result).toString();
        document.getElementById('result').value = result;
    } catch (error) {
        result = '';
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    result = '';
    document.getElementById('result').value = '';
}