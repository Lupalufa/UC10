const classificaTemperatura = require("./atividade2")

describe('Fazer o teste de classificarTemperatura', () => {
    test('teste para verificar se a saída da frio', () =>{
        expect(classificaTemperatura(14)).toMatch('Frio')
    })
    test('teste para verificar se a saída da Agradavel', () =>{
        expect(classificaTemperatura(25)).toMatch('Agradável')
    })
    test('teste para verificar se a saída da frio', () =>{
        expect(classificaTemperatura(27)).toMatch('Quente')
    })
})