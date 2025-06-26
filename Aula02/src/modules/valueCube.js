function valueCube(lado){
    if(typeof lado !== 'number' || lado <= 0){
        return "Não é possivel calcular o volume do cubo sem ser tipo numérico ou menor que 0"
    }
    return lado ** 3
}

module.exports = valueCube