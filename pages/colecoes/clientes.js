import mongoose from 'mongoose'
import criarConexao from '../rotinas/basico'

let colecaoClientes = async (req, res) => {
    let conexao = await criarConexao()

    let odm = new mongoose.Schema({
        nome: {type: String, required: true},
        email: {type: String},
        telefone: {type: Number},
    })

    let colecao = conexao.model('clientes', odm)
    return colecao
}   

export default colecaoClientes