const divideNumeros = require("./atividade4")

describe('Testar a função divideNumeros', () => {

    test('Testar se a função divide corretamente', () => {
        expect(divideNumeros(5,5)).toBe(1)
    })
    

    // -------------------------------- toThrow --------------------------------------- //
    test('Testar se a função retorna Entrada inválida', () => {
        expect(() => divideNumeros("5","5")).toThrow('Entrada inválida')
    })

    test('Testar se a função retorna Divisão por zero', () => {
        expect(() => divideNumeros(5,0)).toThrow('Divisão por zero')
    })
})