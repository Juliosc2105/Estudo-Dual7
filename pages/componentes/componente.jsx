import { useState} from 'react';
import Visual from '../componentes/Visual';
import {soma} from '../rotinas/basico'

let Componente = (props) => {

    let[obterProduto, definirProduto] = useState('')
    let[obterQuantidade, definirQuantidade] = useState('')
    let[obterCadastro, definirCadastro] = useState([])

    return (
        <Visual>
            <div className={'m-2 ' + props.className}>
                <input 
                    type="text"
                    value={obterProduto}
                    placeholder="Produto"
                    onChange={(campo) => {
                        definirProduto(campo.target.value)
                    }}
                    className="form-control m-2"
                    />
                <input 
                    type="number"
                    required
                    value={obterQuantidade}
                    placeholder="Quantidade"
                    onChange={(campo) => {
                        definirQuantidade(campo.target.value)
                    }}
                    className="form-control m-2"
                    />

                <button
                    className='btn btn-outline-warning m-2'
                    onClick={() => {
                        let cadastro = [... obterCadastro]
                        console.log(obterProduto, obterQuantidade)
                        //alert(obterProduto + ' - ' + obterQuantidade)
                        
                        if (obterProduto !== '' && obterQuantidade !== '') {

                            //alert('entrou no if')
                            
                            //alert(obterProduto + ' - ' + obterQuantidade)
                            
                            cadastro.unshift({
                                produto: obterProduto, 
                                quantidade: soma(obterQuantidade, 10)
                            })
                            
                            definirCadastro(cadastro)

                            definirProduto('')
                            definirQuantidade('')
                        }
                    }}
                    >
                    Confirmar Cadastro
                </button>
                <h2>Produto; Quantidade</h2>
                <p>
                    {/*mostrarCadastro(obterCadastro)*/}

                    {obterCadastro.map((retCadastro, idxCadastro) => (
                        // eslint-disable-next-line react/jsx-key
                        <p>{retCadastro.produto + ':' + retCadastro.quantidade}</p>
                    ))}
                </p>
            </div>
        </Visual>
    )
}

export default Componente