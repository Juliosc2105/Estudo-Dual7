import mongoose from 'mongoose'

//Criar conexão com o banco de dados
let criarConexao = () => {

    let conexao = mongoose.createConnection(
        'mongodb://127.0.0.1:27017/teste2',
        {useUnifiedTopology: true, useNewUrlParser: true}
    )
    return conexao
}
export default criarConexao

