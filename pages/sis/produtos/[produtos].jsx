import { useState } from 'react'
import { useEffect } from 'react'
import Visual from '../../componentes/visual'
import api from '../../rotinas/api'
import Respform from '../../componentes/respform'
import CadastrarProdutos from '../../componentes/cadastrarProdutos'


let Produtos = (props) => {

    let [obterNomeProduto, definirNomeProduto] = useState(props.variavel)
    let [obterDados, definirDados] = useState({})

    useEffect(() => {
        let consultar = async () => {
            let {data: dados} = await api({
                login: 'julio', senha: '123'
            }).post(
                'produtos/consultar',
                {
                    nomeProduto: obterNomeProduto
                }
            )
            definirDados(dados[0])
        }
        consultar()

    }, [obterNomeProduto])

    return (
        <Visual>
            
            <h1>Produtos</h1>
            <div name='Verificar'>
                <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-center'>
                        <h2 className='m-2'>Verificar Cadastro</h2>
                        <input
                        className='m-3'
                        type="text"
                        placeholder='Nome do cliente'
                        id=""
                        value={obterNomeProduto}
                        onChange={(campo) => {
                            definirNomeProduto(campo.target.value)
                        }} />
                    </div>
                </div>
                
                    {obterDados?.nome === obterNomeProduto
                    ?
                    <Respform nome={obterDados.nome} email={obterDados.email} telefone={obterDados.telefone}/>
                    :<div></div>}
            </div>
            <CadastrarProdutos api='produtos'>
            </CadastrarProdutos>
        </Visual>
    )
}

export let getServerSideProps = (context) => {
    return { props: { variavel: context.query.produtos } }
}

export default Produtos