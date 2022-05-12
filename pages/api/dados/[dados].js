let Dados = async (req, res) => {

    let retorno = {}

    let variavel = req.query.dados
    
    if(variavel === 'consultar') {
        retorno = {
            headers: req.headers,
            body: req.body,
            variavel: '',
            teste: 'OK'
        }
    }

    res.status(200).json(retorno)
}

export default Dados