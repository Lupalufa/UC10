let res = ''

function sum(a, b) {


    if (typeof a !== 'number' || typeof b !== 'number') {
        return res = "Não é possível fazer soma com String"
    }
    else {
        return a + b;
    }
}

module.exports = sum;

