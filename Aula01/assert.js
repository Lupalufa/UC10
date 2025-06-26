function assertEquals(actual, expect, message = ''){
    if(actual !== expect){
        throw new Error(`❌ Falhou: ${message} - Esperado: ${expect}, recebido: ${actual}`)
    }

    console.log(`✌️ Passou: ${message}`)
}

function sum(a, b){
    return a + b
}

function multiplicar(a, b){
    return a * b
}

function verificarPar(a){

    if(a % 2 === 0){
        return 'par'
    }
    else {
        return 'impar'
    }
}

function InvertString(texto){
    return texto.split('').reverse().join('')
}

function contarVogais(texto){
    const vogais = 'aeiouAEIOU'
    let contador = 0

    for(let i = 0; i < texto.length; i++){
        if(vogais.includes(texto[i])) {
            contador++
        }
    }
    return contador
}

assertEquals(multiplicar(2,2), 4, 'Multiplicação de 2 x 2')
assertEquals(verificarPar(12), 'par', 'verificação para ver se o numero é par')
assertEquals(InvertString('Joel'), 'leoJ', 'Inversão do nome Joel = leoJ')
assertEquals(contarVogais('peito'), 3, 'Contar vogais')
