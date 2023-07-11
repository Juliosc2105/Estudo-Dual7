let Dados = async (req, res) => {       //Função que gerenciará a requisição

    let retorno = {}                    //Objeto que será retornado

    let variavel = req.query.dados      //Pega o valor da variável dados
    
    if(variavel === 'consultar') {      //Se o valor da variável for igual a consultar
        retorno = {                     //Objeto que será retornado
            headers: req.headers,       //Pega os headers
            body: req.body,             //Pega o corpo da requisição
            variavel: '',               //Pega a variável
            teste: 'OK'                 //Pega o teste
        }
    }

    res.status(200).json(retorno)       //Retorna o objeto
}

export default Dados