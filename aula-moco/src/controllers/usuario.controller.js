const UsuarioModel = require("../models/usuario.model")

class usuarioController {
    static async cadastrar(req, res){
        try {
            const {nome, senha} = req.body
            if(!nome || !senha){
                return res.status(400).json({msg: "Todos os campos devem ser preenchidos"})
            }
            const usuario = await UsuarioModel.salvarUsuario({nome, senha})
            res.status(201).json({msg: "usuario cadastrado com sucesso"})
        } catch (error) {
            res.status(500).json({msg: "Erro interno do servidor", error: error.message})
        }
    }

    static async listarUsuarios(req, res){
        try {
            const usuarios = await usuarioModel.listarUsuarios()
            res.status(200).json(usuarios)
        } catch (error) {
            
        }
    }
}