const calcularMedia = require('./questao01')

describe('Testes para a função calcularMedia', () => {
    test('testar se a função calcular corretamente a média', ()=>{
        expect(calcularMedia([8,8,2])).toBe(6); 
    })

    test('testar se a função retorna null ao receber um array vazio', ()=> {
        expect(calcularMedia([])).toBeNull()
    })
    
    test('Testar se a função retorna erro quando o tipo de dado não é um array', ()=>{
        expect(() => calcularMedia('dado')).toThrow('Não é possivel realizar o calculo')
    })

    // test('Testar se a função retornar erro quando nenhum dado é passado como parâmetro')
})