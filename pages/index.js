import Visual from "./componentes/visual"
import Link from "next/link"

export default function Home() {
    return (
        <Visual>

            <div className='bg-dark text-white p-5'>
                <h1>Links</h1>

                <p>
                    <Link href='/julio/pagina1' passHref>
                        <button className='btn btn-outline-warning m-2'>Pagina 1</button>
                    </Link>

                    <Link href='/julio/pagina2' passHref>
                        <button className='btn btn-outline-warning m-2'>Pagina 2</button>
                    </Link>

                    <Link href='/julio/pagina3' passHref>
                        <button className='btn btn-outline-warning m-2'>Pagina 3</button>
                    </Link>

                    <Link href='/julio/pagina4' passHref>
                        <button className='btn btn-outline-warning m-2'>Pagina 4</button>
                    </Link>

                    <div>
                        <h2>
                            Api
                        </h2>
                        <Link href='/julio/dados/0' passHref>
                            <button className='btn btn-outline-warning m-2'>Dados</button>
                        </Link>
                        <Link href='/sis/clientes/0' passHref>
                            <button className='btn btn-outline-warning m-2'>Clientes</button>
                        </Link>
                    </div>
                </p>
            </div>             

        </Visual>
    )
}
