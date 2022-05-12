import { useState } from 'react'
import Visual from '../componentes/Visual'
import Botao from '../componentes/botao'
import api from '../rotinas/api'

let CadastrarProdutos = (props) => {

    let [obterNomeCadastro, definirNomeCadastro] = useState('')
    let [obterDescricaoCadastro, definirDescricaoCadastro] = useState('')
    let [obterPrecoCadastro, definirPrecoCadastro] = useState('')
    let [obterQuantidadeCadastro, definirQuantidadeCadastro] = useState('')

    return (
        <Visual>
            <div>
                <input 
                    type='text' 
                    placeholder='Produto'
                    value={obterNomeCadastro}
                    onChange={(campo) =>{
                        definirNomeCadastro(campo.target.value)
                    } } />
                <input
                    type='text'
                    placeholder='Descrição'
                    value={obterDescricaoCadastro}
                    onChange={(campo) => {
                        definirDescricaoCadastro(campo.target.value)
                    }}/>
                <input
                    type='number'
                    placeholder='Preço'
                    value={obterPrecoCadastro}
                    onChange={(campo) => {
                        definirPrecoCadastro(campo.target.value)
                    }}/>
                <input
                    type='number'
                    placeholder='Quantidade'
                    value={obterQuantidadeCadastro}
                    onChange={(campo) => {
                        definirQuantidadeCadastro(campo.target.value)
                    }}/>
                <Botao
                    tipo=''
                    tamanho='pequeno'
                    aoClicar={async () => {
                        let {data: dados} = await api({
                            login: 'julio', senha: '123'
                        }).post(
                            props.api + '/gravar',
                            {
                                nomeCadastro: obterNomeCadastro,
                                descricaoCadastro: obterDescricaoCadastro,
                                precoCadastro: obterPrecoCadastro,
                                quantidadeCadastro: obterQuantidadeCadastro
                            }
                        )
                        alert(JSON.stringify(dados))
                    }}
                >Cadastrar</Botao>
            </div>
        </Visual>
    )
}

export default CadastrarProdutos