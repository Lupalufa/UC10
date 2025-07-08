function ehPrimo(num) {
    if(!num){
        throw new Error('Falta parametro')
    }
    if(!Number.isInteger(num) || num <= 0){
        throw new Error('Não é possivel verificar se o valor é primo')
    }
    let number = 0
    for (let i = 2; i <= num; i++){
        if (num % i === 0){
            number++
        }
    }
    if (number === 1){
        return true
    }
    return false
}

module.exports = ehPrimo