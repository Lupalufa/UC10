function mensagemDeBoasVindas(nome){
    if(!nome || typeof nome !== 'string')
        throw new Error('Erro ao exibir mensagem.')

        return `Olá ${nome}! Senha Bem-vindo(a)`
}

module.exports = mensagemDeBoasVindas