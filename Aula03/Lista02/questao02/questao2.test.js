const filtrarMaiores = require("./questao2")

describe('testes para a função filtrarMaiores', () => {
    test('testar se retorna o resultado corretamente', () => {
        expect(filtrarMaiores([10,30,80,70], 20)).toEqual([30,80,70])
        expect(filtrarMaiores([10,30,80,70], 20)).toContain(30)
    })
    test('testar se retornar o resultado corretamente e parametro numero real', () => {
        expect(filtrarMaiores([10,30,80,70], 20.6)).toEqual([30,80,70])
        expect(filtrarMaiores([10,30,80,70], 20.6)).toContain(30)
    })
    test('testar se retornar erro em relação parametros', () => {
        expect(() => filtrarMaiores()).toThrow('Não é possivel realizar a operação')
        expect(() => filtrarMaiores([], 5)).toThrow('Não é possivel realizar a operação')
        expect(() => filtrarMaiores([10,30,80,70], 'teste')).toThrow('Não é possivel realizar a operação')
    })
})