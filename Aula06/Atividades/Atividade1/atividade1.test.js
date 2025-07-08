const validarSenha = require("./atvidade1")

describe('Teste de validação de senha', () => {
    test('verificar se a senha é uma string', () => {
        expect(validarSenha(1245)).toBeFalsy()
    })

    test('verificar se a senha é menor que 8', () => {
        expect(validarSenha("Pedro12")).toBeFalsy()
    })
    
    test('verificar se a senha não tem letra maiscula ou minuscula', () => {
        expect(validarSenha("12345678")).toBeFalsy()
    })
    
    test('verificar se a senha tem metacaractere (tabs ou espaços)', () => {
        expect(validarSenha("Pedro 123")).toBeFalsy()
    })

    test('verificar se a senha não tem numeros (tabs ou espaços)', () => {
        expect(validarSenha("Pedrolucas")).toBeFalsy()
    })

    test('verificar se a senha é verdadeira', () => {
        expect(validarSenha("Pedro123")).toBeTruthy()
    })
    
    
})