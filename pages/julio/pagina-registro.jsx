import Componente from '../componentes/componente'
import Visual from '../componentes/Visual'
import Link from "next/link"
import {registro} from '../componentes/componente'
let PaginaRegistro = (props) => {

    return (

        <Visual>
            <div className='bg- text-light p-5'>
                <h1>Página Registro</h1>
                <p>Registro de proudutos</p>
                <Componente>
                </Componente>
            </div>
        </Visual>
    )
}

export default PaginaRegistro