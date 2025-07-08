const calcularDesconto = require('./questao05')

describe('Testes para validar a função calcularDesconto', () => {
    test('Testar se calcula corretamente o desconto', () => {
        expect(calcularDesconto(100,10)).toBe(90.00);
        expect(calcularDesconto(100, 10)).toBeLessThan(100)
    })

    test('Testar se exibe mensagem de erro ao passar tipos de parametros diferentes', () => {
        expect(() => calcularDesconto()).toThrow('Não é possivel realizar o calculo de desconto')
    })

    test('Testar se exibe mensagem de erro ao passar tipos de parametros negativos', () => {
        expect(() => calcularDesconto(-100,-10)).toThrow('Não é possivel realizar o calculo de desconto')
    })

    test('Testar se exibe mensagem de erro ao passar tipos de parametros do tipo texto', () => {
        expect(() => calcularDesconto('-100', '-10')).toThrow('Não é possivel realizar o calculo de desconto')
    })
})