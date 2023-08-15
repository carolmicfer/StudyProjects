import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'
import manipuladorDeErros from './middlewares/manipuladorDeErros.js'

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
  console.log('Conexão com o banco feita com sucesso')
})

const app = express()

app.use(express.json())

routes(app)

//Middleware: uma função especial do Express que será executada em toda requisição feita para a API, ou então em determinadas requisições
// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros)

export default app
