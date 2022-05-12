import { useState } from 'react'
import Visual from '../componentes/Visual'
import Botao from '../componentes/botao'
import api from '../rotinas/api'

let Cadastrar = (props) => {

    let [obterNomeCadastro, definirNomeCadastro] = useState('')
    let [obterEmailCadastro, definirEmailCadastro] = useState('')
    let [obterTelefoneCadastro, definirTelefoneCadastro] = useState('')

    return (
        <Visual>
            <div className='border border-warning rounded rounded-5
            d-flex flex-wrap mb-3 justify-content-center'>
                <input 
                    type="text" 
                    className='m-2 p-0' 
                    placeholder='Nome'
                    value={obterNomeCadastro}
                    onChange={(campo) =>{
                        definirNomeCadastro(campo.target.value)
                    }} />
                <input 
                    type="email" 
                    className='m-2 p-0' 
                    placeholder='Email'
                    value={obterEmailCadastro}
                    onChange={(campo) =>{
                        definirEmailCadastro(campo.target.value)
                    }} />
                <input 
                    type="tel" 
                    className='m-2 p-0' 
                    placeholder='Telefone'
                    value={obterTelefoneCadastro}
                    onChange={(campo) =>{
                        definirTelefoneCadastro(campo.target.value)
                    }} />
                <Botao 
                    tipo='linha' 
                    tamanho='pequeno'
                    aoClicar= {async() => { 
                        let {data: dados} = await api({
                            login: 'julio', senha: '123'
                        }).post(
                            props.api + '/gravar', //para get e post 
                            {
                                nomeCadastro: obterNomeCadastro,
                                emailCadastro: obterEmailCadastro,
                                telefoneCadastro: obterTelefoneCadastro
                            } //para post
                        )
                        alert(JSON.stringify(dados))
                    }}
                >Cadastrar</Botao>
            </div>
        </Visual>
    )
}

export default Cadastrar