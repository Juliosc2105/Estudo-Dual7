import { useState } from 'react'
import Visual from '../componentes/Visual'
import Botao from '../componentes/botao'

let Respform = (props) => {
    let ret = () =>{
        let retorno
        if (props.tipo === 'clientes') {
            retorno =
                <div className='border border-warning rounded rounded-5
                d-flex flex-row mb-3 justify-content-center'>
                    <p className='m-2'>nome: {props.nome} </p>
                    <p className='m-2'> || </p>
                    <p className='m-2'>email: {props.email}</p>
                    <p className='m-2'> || </p>
                    <p className='m-2'>telefone: {props.telefone}</p>
                </div>
        }
        if (props.tipo == 'produtos')
        {
            retorno =
            <div className='d-flex justify-content-center'>
                    <div className='border border-warning rounded rounded-5
                    d-flex flex-wrap mb-3 justify-content-center'
                    style={{width:'750px'}}>
                        <p className='m-2'><strong className='text-warning'>nome:</strong> {props.nome} </p>
                        <p className='m-2'><strong className='text-warning'>descrição:</strong> {props.descricao}</p>
                        <p className='m-2'><strong className='text-warning'>preço:</strong> R${props.preco}</p>
                        <p className='m-2'><strong className='text-warning'>quantidade:</strong> {props.quantidade}</p>
                    </div>
                </div>
        }
        return retorno
    }

    return (
        <Visual>
            <div>
                {ret()}
            </div>
        </Visual>
    )
}

export default Respform