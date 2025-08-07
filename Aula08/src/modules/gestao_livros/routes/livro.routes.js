const express = require("express")
const LivroController = require("../controller/livro.controller")
const Livro = require("../models/livro.model")

const router = express.Router()


router.post('/livros', LivroController.criar)
router.get('/livros', LivroController.listarTodos)
router.get('/livros/busca', LivroController.listarLivrosPorNome)
router.get('/livros/:id', LivroController.listarLivrosPorID)
router.put('/livros/:id', LivroController.editarLivros)
router.delete('/livros/:id', LivroController.deletarLivrosPorID)

module.exports = router