import { useState } from 'react'
import { useEffect } from 'react'
import Visual from '../../componentes/visual'
import api from '../../rotinas/api'
import Respform from '../../componentes/respform'
import Cadastrar from '../../componentes/cadastrar'

let Clientes = (props) => { //função que retorna o html da página

    let [obterNome, definirNome] = useState(props.variavel) //definindo o estado do nome
    let [obterDados, definirDados] = useState({})           //definindo o estado do dados

    useEffect(() => {                                       //função que executa quando o estado é alterado

        if(obterNome) {                                     //se o nome for diferente de vazio
            let consultar = async () => {                   //função que consulta a api
                let {data: dados} = await api({             //função que pega os dados da api
                    login: 'julio', senha: '123'            //dados de login
                }).post(                                    //função que faz a requisição
                    'clientes/consultar',                   //para get e post 
                    { 
                        nomeCliente: obterNome              //nome do cliente
                    }                                       //para post
                )
                definirDados(dados[0])                      //define o estado do dados com os dados da api
            }
            consultar()                                     //executa a função consultar
        }
    }, [obterNome])                                         //variável que define quando o estado é alterado

    return (                                                //retorna o html da página
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
                    <Respform 
                        nome={obterDados.nome} 
                        email={obterDados.email} 
                        telefone={obterDados.telefone}  
                        tipo='clientes'/>
                    :<div></div>}
            </div>
            <div name='Cadastar'>
            <Cadastrar api='clientes'/>
            </div>
        </Visual>
    )
}

export let getServerSideProps = (context) => {              //função que retorna os dados da página
    return { props: { variavel: context.query.clientes } }  //retorna os dados da página
}

export default Clientes 