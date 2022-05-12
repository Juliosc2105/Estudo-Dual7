import { useState } from 'react'
import Visual from '../componentes/Visual'

let Botao = (props) => {

    let [obterQuantidade, definirQuantidade] = useState(0)

    let tipoBotao = () => {
        let retorno = ''
        if (props.tipo === 'linha') {
            retorno = 'outline-'
        }
        return retorno
    }

    let tamanhoBotao = () => {
        let retorno = ''
        if (props.tamanho === 'pequeno') {
            retorno = 'btn-sm'
        } else if (props.tamanho === 'medio') {
            retorno = 'btn-md'
        } else if (props.tamanho === 'grande') {
            retorno = 'btn-lg'
        }
        return retorno
    }


    return (
        <div>
            <button className={'btn btn-'+tipoBotao()+'warning m-2 '+tamanhoBotao()}
            onClick={() => {
                props.aoClicar()
            }}>
                {props.children}
            </button>
        </div>
    )
}

export default Botao