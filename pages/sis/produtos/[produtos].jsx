import { useState } from 'react'
import { useEffect } from 'react'
import Visual from '../../componentes/visual'
import api from '../../rotinas/api'
import Respform from '../../componentes/respform'
import CadastrarProdutos from '../../componentes/cadastrarProdutos'


let Produtos = (props) => {                                     //Função que retorna o html da página

    let [obterNomeProduto, definirNomeProduto] = useState('')   //Definindo o estado do nome do produto
    let [obterDados, definirDados] = useState({})               //Definindo o estado do dados

    useEffect(() => {                                           //Função que executa quando o estado é alterado
        let consultar = async () => {                           //Função que consulta a api
            let {data: dados} = await api({                     //Função que pega os dados da api
                login: 'julio', senha: '123'                    //Dados de login
            }).post(                                            //Função que faz a requisição
                'produtos/consultar',                           //Para get e post
                {  
                    nomeProduto: obterNomeProduto
                }                                               //Para post
            )
            definirDados(dados[0])                              //Define o estado do dados com os dados da api
        }
        consultar()                                             //Executa a função consultar

    }, [obterNomeProduto])                                      //Variável que define quando o estado é alterado

    return (                                                    //Retorna o html da página
        <Visual>
            {/*centralizar div com bootstrap */}
            <div className='d-flex flex-column pt-5 p-3'>
                <div name='Verificar'>
                    <div className='d-flex justify-content-center'>
                        <div className='d-flex justify-content-center'>
                            <h2 className='m-2'>Verificar Cadastro de produtos</h2>
                            <input
                            className='m-3'
                            type="text"
                            placeholder='Produto'
                            id=""
                            value={obterNomeProduto}
                            onChange={(campo) => {
                                definirNomeProduto(campo.target.value)
                            }} />
                        </div>
                    </div>
                
                        {obterDados?.nome === obterNomeProduto          //Se o nome do produto for igual ao nome do produto
                        ? //se true
                    
                        <Respform
                            nome={obterDados.nome}
                            descricao={obterDados.descricao}
                            preco={obterDados.preco}
                            quantidade={obterDados.quantidade}
                            tipo='produtos'/>
                        :<div></div>/*nada (false)*/}
                </div>
                <div className='d-flex justify-content-center'>
                    <CadastrarProdutos api='produtos'/>
                </div>
            </div>
        </Visual>
    )
}

export let getServerSideProps = (context) => { //Função que retorna os dados da página
    return { props: { variavel: context.query.produtos } }
}

export default Produtos