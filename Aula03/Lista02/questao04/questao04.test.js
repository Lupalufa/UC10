const mensagemDeBoasVindas = require('./questao04')




describe('Testes para a função mensagemDeBoasVindas', () => {
    test('Testar se exibe corretamente a mensagem de boas-vindas', () =>{
        expect(mensagemDeBoasVindas('Joel')).toContain('Joel');
        expect(mensagemDeBoasVindas('Olá Joel')).toMatch(/Olá/)
    })

    test("Testar se retorna uma mensagem de erro em relação a parametros incorretos", () => {
        expect(() => mensagemDeBoasVindas()).toThrow('Erro ao exibir mensagem.')
        expect(() => mensagemDeBoasVindas(1)).toThrow('Erro ao exibir mensagem.')
        expect(() => mensagemDeBoasVindas([])).toThrow('Erro ao exibir mensagem.')
        expect(() => mensagemDeBoasVindas({nome: "Joel"})).toThrow('Erro ao exibir mensagem.')
    })
})