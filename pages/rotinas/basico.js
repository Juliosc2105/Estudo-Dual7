import mongoose from 'mongoose'

/*
export let mostrarCadastro = (obterCadastro) => {
    let retorno = ''
    let a
    for (let i in obterCadastro) {
        a = (
        <p>
            {obterCadastro[a].produto}; {obterCadastro[a].quantidade}
            {a}
        </p>
        )
        retorno = a
    }
    return retorno
} 
*/

export let soma = (a, b) => {
    return parseInt(a) + parseInt(b)
}


let criarConexao = async () => {

    let conexao = mongoose.createConnection(
        'mongodb://127.0.0.1:27017/teste2',
        {useUnifiedTopology: true, useNewUrlParser: true}
    )
    return conexao
}
export default criarConexao
