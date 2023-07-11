import colecaoClientes from '../../colecoes/clientes'   //Importa a coleção de clientes

let Clientes = async (req, res) => {                    //Função que gerenciará a requisição
    
    let clientes = colecaoClientes()                    //Cria a coleção de clientes

    let retorno = {}                                    //Objeto que será retornado

    let variavel = req.query.clientes                   //Pega o valor da variável clientes

    if(variavel === 'consultar') {                      //Se o valor da variável for igual a consultar
        let retClientes = await clientes.find({         //Busca todos os clientes
            nome: req.body.nomeCliente                  //Pega o nome do cliente
            }) 
        retorno = retClientes                           //Retorna o cliente
    }

    if(variavel === 'gravar') {                         //Se o valor da variável for igual a gravar
        let retClientes = await clientes.insertMany({   //Insere os clientes
            nome: req.body.nomeCadastro,                //Pega o nome do cliente
            email: req.body.emailCadastro,              //Pega o email do cliente
            telefone: req.body.telefoneCadastro})       //Pega o telefone do cliente
    }

    res.status(200).json(retorno)                       //Retorna o objeto
}

export default Clientes                                //Exporta a função