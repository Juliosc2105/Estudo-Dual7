import Componente from '../componentes/componente'
import Visual from '../componentes/Visual'
import Link from "next/link"
let Pagina2 = (props) => {

    return (

        <Visual>
            <div className='bg- text-light p-5'>
                <h1>Página Inicial</h1>
                <Link href='pagina-registro' passHref>
                    <button className="btn btn-outline-warning m-2">
                        Registro
                    </button>
                </Link>
                <Link href='pagina-produtos' passHref>
                    <button className="btn btn-outline-warning">
                        Produtos
                    </button>
                
                </Link>
            </div>
        </Visual>
    )
}

export default Pagina2