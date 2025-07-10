const calculaImposto = require("./Atividade3")

describe("Testar a função calculaImposto", () => {
    test("Verificar se a renda não é negativa, se for, retorna 'Null' ", () => {
        expect(calculaImposto(-1500)).toBeNull()
    })

    test("Verificar se a renda paga 15% de imposto' ", () => {
        expect(calculaImposto(3000)).toBe(450)
    })

    test("Verificar se a renda paga 27,5% de imposto ", () => {
        expect(calculaImposto(7000)).toBeCloseTo(1925)
    })
})