const isEmpty = require('./questao6')

describe('Testes para a função isEmpty', () => {
    test('Testar se retorna true para uma entrada (" ") vazia', () => {
        expect(isEmpty('')).toBeTruthy()
    })
    test('Testar se retorna true para a entrada []', () => {
        expect(isEmpty([])).toBeTruthy()
    })
    test('Testar se retorna true para a entrada null', () => {
        expect(isEmpty(null)).toBeTruthy()
    })

    test("testar se retorna false para uma entrada não vazia", () => {
        expect(isEmpty("null")).toBeFalsy()
    })
})