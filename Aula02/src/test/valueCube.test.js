const valueCube = require('../modules/valueCube')

describe('Teste básico da função do volume do cubo', () => {
    test('Verificar o volume do', () => {
        expect (valueCube(4)).toBe(64)
    })
    test('Verificar se o valor reage ao 0 ou negativo', () => {
        expect (valueCube(0)).toBe('Error')
    })
    test('Verificar se ha uma mensagem de erro se o valor não for inteiro ou real', () => {
        expect (valueCube(0.5)).toBe('Error')
    })
})