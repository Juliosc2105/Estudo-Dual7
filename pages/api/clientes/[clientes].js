import colecaoClientes from '../../colecoes/clientes'

let Clientes = async (req, res) => {
    
    let clientes = await colecaoClientes()

    let retorno = {}

    let variavel = req.query.clientes

    if(variavel === 'consultar') {
        let retClientes = await clientes.find({
            nome: req.body.nomeCliente
            })
        retorno = retClientes
    }

    if(variavel === 'gravar') {
        let retClientes = await clientes.insertMany({
            nome: req.body.nomeCadastro, 
            email: req.body.emailCadastro, 
            telefone: req.body.telefoneCadastro})
    }

    res.status(200).json(retorno)
}

export default Clientes