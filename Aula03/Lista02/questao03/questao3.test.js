const ehPrimo = require("./questao3")

describe('Testes para validar a função ehPrimo', () => {
    test('Testar se retornar corretamente true para um número primo', () => {
        expect(ehPrimo(7)).toBeTruthy();
    })
    test('Testar se retornar corretamente true para um número primo', () => {
        expect(ehPrimo(8)).toBeFalsy();
    })

    test('Testar se a função retorna erro quando não há dados dentro do parâmetro', ()=>{
        expect(() => ehPrimo()).toThrow('Falta parametro')
    })
    test('Testar se a função retorna erro quando o dado é passado no formato incorreto', ()=>{
        expect(() => ehPrimo(-7)).toThrow('Não é possivel verificar se o valor é primo')
        expect(() => ehPrimo('sete')).toThrow('Não é possivel verificar se o valor é primo')
        expect(() => ehPrimo([7])).toThrow('Não é possivel verificar se o valor é primo')
    })
})