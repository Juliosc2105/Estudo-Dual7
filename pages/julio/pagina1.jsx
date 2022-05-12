import Teste2 from '../componentes/teste2'

let Pagina1 = (props) => {

    let teste2 = () => {return 'teste2'}

   return (

        <div>
            {/*  */}
           {/* <Teste 
                nome='Julio'
                idade='22'
                aoAlterar={(msgTexto)=>{
                    alert(msgTexto)
                }}>

                Testando...

            </Teste>

            <Teste 
                nome='Julio'
                idade='22'>

                Testando...

            </Teste>*/}

            <Teste2></Teste2>
            
        </div>
    )

}

export default Pagina1
