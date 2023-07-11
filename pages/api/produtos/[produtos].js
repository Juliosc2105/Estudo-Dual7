import colecaoProdutos from '../../colecoes/produtos'   //Importa a coleção de produtos

let Produtos = async (req, res) => {                    //Função que gerenciará a requisição
    
    let variavel = req.query.produtos                   //Pega o valor da variável produtos

    let produtos = colecaoProdutos()                    //Cria a coleção de produtos

    let retorno = {}                                    //Objeto que será retornado

    
    if(variavel === 'consultar') {                      //Se o valor da variável for igual a consultar
        let retProduto = await produtos.find({          //Busca todos os produtos
            nome: req.body.nomeProduto                  //Pega o nome do produto
            }) 
        retorno = retProduto                            //Retorna o produto
    }

    if(variavel === 'gravar') {                         //Se o valor da variável for igual a gravar
        let retProduto = await produtos.insertMany({    //Insere os produtos
            nome: req.body.nomeCadastro,                //Pega o nome do produto
            descricao: req.body.descricaoCadastro,      //Pega a descrição do produto
            preco: req.body.precoCadastro,              //Pega o preço do produto
            quantidade: req.body.quantidadeCadastro     //Pega a quantidade do produto
            })
    }

    res.status(200).json(retorno)                       //Retorna o objeto

}

export default Produtos