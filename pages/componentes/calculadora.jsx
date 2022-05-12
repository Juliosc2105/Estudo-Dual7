import { useState } from 'react'
import Visual from '../componentes/Visual'
import Botao from '../componentes/botao'

let Calculadora = (props) => {

    let [obterVisor, definirVisor] = useState('')


    let calcular = (operacao) => {
        let visor = operacao
        let partes
        let resultado



        if (visor.includes('/')) {
            resultado = multiplicacaoDivisao(visor)
            /*partes = visor.split('/')
            visor = partes[0] / partes[1]*/
        }else if (visor.includes('x')) {
            resultado = multiplicacaoDivisao(visor)
            /*partes = visor.split('x')
            resultado = partes[0] * partes[1]*/
        }else if (visor.includes('-', 1)) {
            partes = visor.split('-')
            resultado = partes[0] - partes[1]
        }else if (visor.includes('+')) {
            partes = visor.split('+')
            resultado = parseInt(partes[0]) + parseInt(partes[1])
        }


        return resultado
    }

    let multiplicacaoDivisao = (operacao) => {
        let visor = operacao
        let partes, subPartes
        let retorno
        
        if (visor.includes('/') || visor.includes('x')) {

            if (visor.includes('/')) {
                partes = visor.split('/')
                /*if (partes.length >= 3){
                    retorno = partes[partes.length - 2] / partes[partes.length - 1]
                }*/
                retorno = partes[0] / partes[1]
            }

            if (visor.includes('x')) {
                partes = visor.split('x')

                retorno = partes[0] * partes[1]
            }
        }
        return retorno
    }

    return (
        <Visual>
            <div className='d-flex flex-wrap justify-content-center'>
                <div className='m-3 p-2 border border-warning border-2 bg-dark
                '
                    style={{
                        margin: '0px 0px 0px 500px',
                        width: "325px",
                        display: 'flex',
                        justifyContent: 'center'}}>
                    <div className=''
                    style={{
                    }}>
                
                        <div className="m-2 p-2 border border-warning border-2 rounded-3">
                            <h2 className="">{obterVisor}</h2>
                        </div>
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <Botao tipo='linha' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '7')}} >7</Botao>
                            <Botao tipo='linha' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '8')}} >8</Botao>
                            <Botao tipo='linha' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '9')}} >9</Botao>
                            <Botao tipo='' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '/')}} >/</Botao>
                        </div>
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <Botao 
                                tipo='linha' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '4')}} >4</Botao>
                            <Botao tipo='linha' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '5')}} >5</Botao>
                            <Botao tipo='linha' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '6')}} >6</Botao>
                            <Botao tipo='' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + 'x')}} >x</Botao>
                        </div>
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <Botao tipo='linha' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '1')}} >1</Botao>
                            <Botao tipo='linha' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '2')}} >2</Botao>
                            <Botao tipo='linha' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '3')}} >3</Botao>
                            <Botao tipo='' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '+')}} >+</Botao>
                        </div>
                        <div className="d-flex flex-row bd-highlight mb-3">
                            <Botao tipo='' tamanho='grande' aoClicar={() => {
                                definirVisor("")
                            }}>C</Botao>
                            <Botao tipo='linha' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '0')}} >0</Botao>
                            <Botao tipo='' tamanho='grande' aoClicar={ () => {
                                definirVisor(calcular(obterVisor))}}>=</Botao>
                            <Botao tipo='' tamanho='grande' aoClicar={() => {
                                definirVisor(obterVisor + '-')}} >-</Botao>
                
                        </div>
                    </div>
                </div>
            </div>
        </Visual>
    )
   
}

export default Calculadora