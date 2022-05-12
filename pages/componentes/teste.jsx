import {useState, useEffect} from 'react'

let Teste = (props) => {

    let [obterNome, definirNome] = useState()
    let [obterCampo, definirCampo] = useState('campo')    

    let lista = ['Item5', 'Item6']

    //minhaFuncao('', 0, (QtdReg) => {if(QtdReg >= 10){alert('Mais de 10 registros')}})

    let minhaFuncao = (nome, idade, minhaOutraFuncao) => {

        let meuTeste = 'String'

        //minhaOutraFuncao(meuTeste)

        lista.map((retLista, idxLista) => {
            
        })

        for(let idxLista in lista){
            let retLista = lista[idxLista]
        }

        return {resultado: undefined}

    }

    let valor = undefined
    let valor2 = {prop1: 'teste'}

    let ternario = valor == 1 ? true : false
    let valor3 = valor?.prop
    let valor4 = valor || valor2

    
    

    useEffect(() => {

        
        ///alert('Alterou o Nome')

    }, [obterNome])


    let teste = {
        prop1: {
            prop2: 'minhaFuncao()',
            prop3: lista,
            prop4: [
                'Lista Pos 1',
                'Lista Pos 2'
            ]
        }
    }   

    let temp = 'nomes'

    let pessoas = [
        {id: '1', nomes: ['Julio', 'Isis']},
        {id: '2', nome: 'Rodrigo'}
    ]

    return (       

        <div>

            <input 
                type='text'
                name='Nome'
                value={obterNome}
                onChange={(campo) => {
                    definirNome(campo.target.value)
                    definirCampo(campo.target.name + ': ')
                }}/>

            <h1>
                
                {obterCampo + obterNome}

            </h1>

            <p>

                {'Idade: ' + props.idade}

            </p>

            <p>
                
                {props.children}

            </p>

            <p style={{
                    color: 'red',
                    backgroundColor: 'silver',
                    fontSize: '20px'
                }}>

                <strong>{teste.prop1.prop2}</strong>                

            </p>

            {teste.prop1.prop4.map((retLista, idxLista) => (
                <label key={'lista' + idxLista}>
                    <p>{retLista}</p>
                </label>
            ))}

            

            <p>{'RESULTADO: ' + minhaFuncao()?.resultado}</p>

            <p>{pessoas[0][temp][1]}</p>

            <p>{'Logica ' + (typeof(valor) === 'undefined')}</p>

            <button onClick={() => {
                if(props.aoAlterar) {
                    props.aoAlterar('Testando...')
                }
            }}>

                Teste

            </button>

        </div>

    )

}

export default Teste