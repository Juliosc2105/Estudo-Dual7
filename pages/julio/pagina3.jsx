import Visual from '../componentes/Visual'
import Botao from '../componentes/botao'

let Pagina3 = (props) => {
    return (
        <Visual>
            <h1>Botão</h1>
            
            <Botao tipo='linha' tamanho='pequeno' aoClicar={(numero) => {
                alert("Teste")
            }}>Teste</Botao>
        </Visual>

    )
}

export default Pagina3