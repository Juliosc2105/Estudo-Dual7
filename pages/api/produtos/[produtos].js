import colecaoProdutos from '../../colecoes/produtos'

let Produtos = async (req, res) => {

    let produtos = await colecaoProdutos()

    let retorno = {}

    
    if(variavel === 'consultar') {
        let retProduto = await produtos.find({
            nome: req.body.nomeProduto
            })
        retorno = JASON.stringfy(retProduto)
    }

    if(variavel === 'gravar') {
        let retProduto = await produtos.insertMany({
            nome: req.body.nomeCadastro,
            descricao: req.body.descricaoCadastro,
            preco: req.body.precoCadastro,
            quantidade: req.body.quantidadeCadastro
            })
    }

    res.status(200).json(retorno)

}

export default Produtos