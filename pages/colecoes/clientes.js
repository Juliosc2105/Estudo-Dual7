import mongoose from 'mongoose'
import criarConexao from '../rotinas/basico'

let colecaoClientes = () => {                   //Função que cria a coleção de clientes
    let conexao = criarConexao()                //Cria a conexão com o banco de dados

    let odm = new mongoose.Schema({             //Cria a estrutura da coleção
        nome: {type: String, required: true},   //Nome do cliente
        email: {type: String},                  //Email do cliente
        telefone: {type: Number},               //Telefone do cliente
    })

    let colecao = conexao.model('clientes', odm) //Cria a coleção no banco de dados
    return colecao                              //Retorna a coleção
}   

export default colecaoClientes