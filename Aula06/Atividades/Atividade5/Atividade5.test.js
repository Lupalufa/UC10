const verificaIntervalo = require("./Atividade5")

describe('Testar a função verificafrIntervalo', () => {
    test('Testar se a função retorna false se "n" não for numero', () => {
        expect(verificaIntervalo('0')).toBeFalsy()
    })

    test('Testar se a função retorna true se "n" estiver entre 10 e 20', () => {
        expect(verificaIntervalo(15)).toBeTruthy()
    })
})