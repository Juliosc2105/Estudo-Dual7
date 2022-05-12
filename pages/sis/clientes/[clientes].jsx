import { useState } from 'react'
import Visual from '../../componentes/visual'
import Botao from '../../componentes/botao'
import api from '../../rotinas/api'
import Respform from '../../componentes/respform'
import Cadastrar from '../../componentes/cadastrar'
import { useEffect } from 'react'

let Clientes = (props) => {

    let [obterNome, definirNome] = useState(props.variavel)
    let [obterDados, definirDados] = useState({})

    useEffect(() => {

        if(obterNome) {
            let consultar = async () => {
                let {data: dados} = await api({
                    login: 'julio', senha: '123'
                }).post(
                    'clientes/consultar', //para get e post 
                    {
                        nomeCliente: obterNome
                    } //para post
                )
                definirDados(dados[0])
            }
            consultar()
        }
    }, [obterNome])

    return (
        <Visual>
            <div name='Verificar'>
                <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-center'>
                        <h2 className='m-2'>Verificar Cadastro</h2>
                        <input
                        className='m-3'
                        type="text"
                        placeholder='Nome do cliente'
                        id=""
                        value={obterNome}
                        onChange={(campo) => {
                            definirNome(campo.target.value)
                        }} />
                    </div>
                </div>
                
                    {obterDados?.nome === obterNome
                    ?
                    <Respform nome={obterDados.nome} email={obterDados.email} telefone={obterDados.telefone}/>
                    :<div></div>}
            </div>
            <div name='Cadastar'>
            <Cadastrar api='clientes'/>
            </div>
        </Visual>
    )
}

export let getServerSideProps = (context) => {
    return { props: { variavel: context.query.clientes } }
}

export default Clientes