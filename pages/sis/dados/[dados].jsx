import {useState} from 'react'
import Visual from '../../componentes/Visual'
import api from '../../rotinas/api'

let Dados = (props) => {

    let [obterDados, definirDados] = useState({})

    return (
        <Visual>
            Teste
            {props.variavel === 'consultar' //parte lógica
            ? //se true
            <button onClick={async () => {

                let {data: dados} = await api({
                    login: 'julio', senha: '123'
                }).post(
                    '/api/dados/' + props.variavel,     
                    /*body=*/{buscaCliente: 'Brothers'}
                )
                definirDados(dados)
            }}>
                Testar
            </button>
            : <></> //nada (false)
            }
            <p className='bg-light text-dark'>Headers {JSON.stringify(obterDados.headers)}</p>
            <p className='bg-secondary'>Body {JSON.stringify(obterDados.body)}</p>
            <p className='bg-secondary'>Var Api {JSON.stringify(obterDados.variavel)}</p>
            <p className='bg-secondary'>Var Local {props.variavel}</p>
        </Visual>
    )
}

export let getServerSideProps = (context) => {
    return {props: {variavel: context.query.dados}}
}

export default Dados