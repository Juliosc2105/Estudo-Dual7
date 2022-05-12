import mongoose from "mongoose";
import criarConexao from "../rotinas/basico";

let colecaoProdutos = async () => {
    let conexao = await criarConexao();

    let odm = new mongoose.Schema({
        nome: {type: String},
        descricao: {type: String},
        preco: {type: Number},
        quantidade: {type: Number},
    })

    let colecao = conexao.model("produtos", odm);
    return colecao
}

export default colecaoProdutos