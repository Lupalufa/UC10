const ProdutoModel = require("../models/produto.model")

class ProdutoControllerApi {
    static async criarProduto(req, res){
        try {
            const {nome, preco, estoque} = req.body
            const produto = ProdutoModel.create({nome, preco, estoque})

            res.status(201).json({msg: "Produto criado com sucesso", produto: produto})
        } catch (error) {
            
        }
    }
}

module.exports = ProdutoControllerApi