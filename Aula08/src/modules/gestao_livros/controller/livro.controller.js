const LivroModel = require("../models/livro.model")
const { Op } = require("sequelize");

// Criar Livro ->
// 1° Não deve criar livro com ano inválido (Acho q vai)
// 2° Não deve criar livro com preço negativo (Acho que vai)
// 3° Não deve criar livro com título muito curto (Eu sei q vai)
// 4° Não deve criar livro com gênero inválido (Esse aqui vai)
// 5° Não deve criar livro com preço não numérico (Já vai automaticamente por causa do Sequelize)



class LivroController {
    static async criar(req, res) {
        try {
            const { titulo, autor, ano_publicacao, genero, preco } = req.body;

            if (!titulo || !autor || !ano_publicacao || !genero || !preco) {
                return res.status(400).json({ msg: "Todos os campos são obrigatórios" });
            }

            const injPattern = /(['";])/;

            if (injPattern.test(titulo)) {
                return res.status(400).json({ msg: "Título inválido" });
            }

            if (injPattern.test(autor)) {
                return res.status(400).json({ msg: "Autor inválido" });
            }

            if (injPattern.test(genero)) {
                return res.status(400).json({ msg: "Gênero inválido" });
            }

            if (titulo.length < 2) {
                return res.status(400).json({ msg: "Título deve ter pelo menos 2 caracteres" });
            }

            const ano = Number(ano_publicacao);
            if (isNaN(ano)) {
                return res.status(400).json({ msg: "Ano de publicação deve ser um número" });
            }
            if (ano < 1000 || ano > 2025) {
                return res.status(400).json({ msg: "Ano de publicação deve estar entre 1000 e 2025" });
            }

            const precoFloat = Number(preco);
            if (isNaN(precoFloat)) {
                return res.status(400).json({ msg: "Preço deve ser um número" });
            }
            if (precoFloat <= 0) {
                return res.status(400).json({ msg: "Preço deve ser maior que zero" });
            }

            const generosPermitidos = ['Romance', 'Conto', 'Biografia', 'Fantasia', 'Ficção', 'Suspense', 'Terror', 'Aventura', 'Drama'];
            if (!generosPermitidos.includes(genero)) {
                return res.status(400).json({ msg: "Gênero inválido" });
            }

            const novoLivro = await LivroModel.create({
                titulo,
                autor,
                ano_publicacao: ano,
                genero,
                preco: precoFloat
            });

            return res.status(201).json({ msg: "Livro criado com sucesso", novoLivro });

        } catch (error) {
            return res.status(500).json({ msg: "Erro ao cadastrar um novo livro. Tente novamente mais tarde!", error: error.message });
        }
    }


    // 1° Deve listar todos os livros
    // 2° Deve buscar livro por nome
    // 3° Deve retornar 404 se livro não encontrado na busca por nome
    // 4° Deve buscar livro por ID
    // 5° Deve retornar 404 se ID inexistente
    static async listarTodos(req, res) {
        try {
            const livros = await LivroModel.findAll()
            if (livros.length === 0) {
                return res.status(400).json({ msg: "Não há livros" })
            }
            res.status(200).json(livros)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao cadastrar um novo livro. Tente novamente mais tarde!", error: error.message })
        }
    }

    static async listarLivrosPorNome(req, res) {
        try {

            const titulo = req.query.titulo
            const livro = await LivroModel.findOne({
                where:
                {
                    titulo: {
                        [Op.like]: `%${titulo}%`
                    }
                }
            })
            if (!livro) {
                return res.status(404).json({ msg: "Livro não encontrado" })
            }
            res.status(200).json({ msg: "Livro encontrado", livro})
        } catch (error) {
            console.error("Erro ao buscar livro:", error)
            res.status(500).json({ msg: "Erro ao listar o livro pelo nome. Tente novamente mais tarde!", error: error.message })
        }
    }

    static async listarLivrosPorID(req, res) {
        try {
            const id = req.params.id
            const livro = await LivroModel.findByPk(id)
            if (!livro) {
                return res.status(404).json({ msg: "Livro não encontrado" })
            }
            res.status(200).json({ msg: "Livro encontrado", livro })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao cadastrar um novo livro. Tente novamente mais tarde!", error: error.message })
        }
    }


    // Deve atualizar livro por ID
    // Não deve atualizar livro com dados inválidos
    // Deve retornar 404 ao tentar atualizar livro inexistente

    static async editarLivros(req, res) {
        try {
            const id = req.params.id
            const { titulo, autor, ano_publicacao, genero, preco } = req.body
            if (!titulo || !autor || !ano_publicacao || !genero || !preco) {
                return res.status(400).json({ msg: "Dados inválidos para atualização" })
            }
            const [livroAtualizado] = await LivroModel.update({ titulo, autor, ano_publicacao, genero, preco }, { where: { id: id } })
            if (livroAtualizado === 0) {
                return res.status(404).json({ msg: "Livro não encontrado" })
            }
            const livro = await LivroModel.findByPk(id)
            res.status(200).json({ msg: "Livro atualizado com sucesso", livro })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao cadastrar um novo livro. Tente novamente mais tarde!", error: error.message })
        }
    }

    // Deve deletar livro por ID
    // Deve retornar 404 ao tentar deletar livro inexistente
    static async deletarLivrosPorID(req, res) {
        try {
            const id = req.params.id
            const deletar = await LivroModel.destroy({
                where: {
                    id: id
                }
            })
            if (deletar === 0) {
                return res.status(404).json({ msg: "Livro não encontrado" })
            }
            res.status(200).json({ msg: "Livro deletado com sucesso"})
        } catch (error) {
            res.status(500).json({ msg: "Erro ao cadastrar um novo livro. Tente novamente mais tarde!", error: error.message })
        }
    }
}

module.exports = LivroController