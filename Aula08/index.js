const express = require('express')
const {sequelize} = require("./src/config/configDB")
const dotenv = require("dotenv")
const livroRouter = require("./src/modules/gestao_livros/routes/livro.routes")

dotenv.config()


const app = express()
const port = process.env.PORT;
app.use(express.json())
app.use(livroRouter)


// sequelize.sync().then(async () => {
//     try {
//         await sequelize.authenticate()
//         console.log('Conexão com o banco de dados estabelecida com sucesso')

        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`)
        })
//     } catch (error) {
//         console.error("Não foi possível conectar ao banco de dados")
//     }
// })

module.exports = app