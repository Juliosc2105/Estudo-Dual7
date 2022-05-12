import { useState } from 'react'
import Visual from '../componentes/Visual'
import Botao from '../componentes/botao'

let Respform = (props) => {
    
    return (
        <Visual>
            <div className='border border-warning rounded rounded-5
            d-flex flex-row mb-3 justify-content-center'>
                <p className='m-2'>nome: {props.nome} </p>
                <p className='m-2'> || </p>
                <p className='m-2'>email: {props.email}</p>
                <p className='m-2'> || </p>
                <p className='m-2'>telefone: {props.telefone}</p>
            </div>
        </Visual>
    )
}

export default Respform