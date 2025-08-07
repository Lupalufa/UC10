const usuarioRoutes = require("./src/routes/usuario.routes")
const express = require("express")


const app = express()


const port = process.env.PORT;

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Iniciando o banco na porta:${port}`)
})


module.exports = app

