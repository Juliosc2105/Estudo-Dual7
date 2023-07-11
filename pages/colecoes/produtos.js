import mongoose from "mongoose";
import criarConexao from "../rotinas/basico";

let colecaoProdutos = () => {                       //Função que cria a coleção de produtos
    let conexao = criarConexao();                   //Cria a conexão com o banco de dados

    let odm = new mongoose.Schema({                 //Cria a estrutura da coleção
        nome: {type: String},                       //Nome do produto
        descricao: {type: String},                  //Descrição do produto
        preco: {type: Number},                      //Preço do produto
        quantidade: {type: Number},                 //Quantidade do produto
    })

    let colecao = conexao.model("produtos", odm);   //Cria a coleção no banco de dados
    return colecao                                  //Retorna a coleção
}

export default colecaoProdutos