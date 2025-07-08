function determinarTriangulo(lado1, lado2, lado3) {
    // Verifica se é um triângulo válido
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        return "Não é um triângulo válido";
    }
    // Verifica se é um triângulo equilátero (todos os lados iguais)
    else if (lado1 === lado2 && lado2 === lado3) {
        return "Triângulo equilátero";
    }
    // Verifica se é um triângulo isósceles (dois lados iguais)
    else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Triângulo isósceles";
    }else {
        saida = "Triângulo escaleno";
    }
    // Se não for nenhum dos acima, é um triângulo escaleno (todos os lados diferentes)
    
    return saida
}

module.exports = determinarTriangulo