import Visual from "./componentes/visual"
import Link from "next/link"

export default function Home() {
    return (
        <Visual>
            <div className='bg-dark text-white p-5'>
                <h1>Links</h1>

                <p>
                    <Link href='/paginas/pagina1' passHref>
                        <button className='btn btn-outline-warning m-2'>Pagina 1</button>
                    </Link>

                    <Link href='/paginas/pagina2' passHref>
                        <button className='btn btn-outline-warning m-2'>Pagina 2</button>
                    </Link>

                    <Link href='/paginas/pagina3' passHref>
                        <button className='btn btn-outline-warning m-2'>Pagina 3</button>
                    </Link>

                    <Link href='/paginas/pagina4' passHref>
                        <button className='btn btn-outline-warning m-2'>Pagina 4</button>
                    </Link>

                    <div>
                        <h2>
                            Api
                        </h2>
                        <Link href='/sis/dados/0' passHref>
                            <button className='btn btn-outline-warning m-2'>Dados</button>
                        </Link>
                        <Link href='/sis/clientes/0' passHref>
                            <button className='btn btn-outline-warning m-2'>Clientes</button>
                        </Link>
                        <Link href='/sis/produtos/0' passHref>
                            <button className='btn btn-outline-warning m-2'>Produtos</button>
                        </Link>
                    </div>
                </p>
            </div>             
        </Visual>
    )
}
