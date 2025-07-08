function filtrarMaiores(listar, limite){
    if(!Array.isArray(listar) || listar.length === 0 || typeof limite !== 'number')
        throw new Error('Não é possivel realizar a operação')
    if(listar.some(num => typeof num !== 'number'))
        throw new Error('Não é possivel realizar a operação')
    return listar.filter((num) => num > limite)

}

module.exports = filtrarMaiores