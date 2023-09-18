//arquivo para estabelecer a conexão com o banco
import mongoose from 'mongoose'

// eslint-disable-next-line no-undef
mongoose.connect(process.env.STRING_CONEXAO_DB)

//variável que contém a conexão
let db = mongoose.connection

export default db
