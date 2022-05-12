import {useState} from 'react'
import Visual from '../componentes/Visual'

let Teste2 = (props) => {

    let [obterNome, definirNome] = useState()
    let [obterCidade, definirCidade] = useState()
    let [obterAnimal, definirAnimal] = useState()
    let [obterNomeAluno, definirNomeAluno] = useState()


    let pessoas = {
        pessoa0: {
            tipo: 'documento',
            cpf: '99.999.999-11',
            nome: 'Fulano',
            idade: 15
        },
        pessoa1: {
            tipo: 'documento',
            cpf: '99.999.999-11',
            nome: 'Ciclano',
            idade: 45,
            rg: '123.456.789-0'
        },
        pessoa2: {
            tipo: 'documento',
            cpf: '99.999.999-11',
            nome: 'Beltrano',
            idade: 25,
            rg: '987.654.321-0'
        }

    }

    let cidades = [
        'Araçatuba',
        'Araraquara',
        'Assis',
        'Buritama',
        'Bauru',
        'Bertioga',
        'Blumenau',
        'Bragança Paulista',
        'Campinas',
        'Canoas',
        'Cotia',
        'Curitiba',
        'Diadema',
        'Embu',
        'Foz do Iguaçu',
        'Franca',
        'Guarulhos',
    ]

    let animais = {
        mamiferos: [
            'cachorro',
            'gato', 
            'leão', 
            'lhama'],
        repteis: [
            'jacaré', 
            'tartaruga', 
            'crocodilo', 
            'cobra'],
        aves: [
            'pato', 
            'gavião', 
            'pinguim', 
            'pombo'],
        anfibios: [
            'salamandra',
            'sapo',
            'rã',
        ]
    }

    let boletim = [
        {
            nome: 'Julio',
            idade: 22,
            matematica: 8.4,
            portugues: 7.8,
            historia: 8.8,
            fisica: 4.8,
            geografia: 6.8,
            biologia: 7.1,
            quimica: 9.0,
            ingles: 4.0,
        },
        {
            nome: 'Fulano',
            idade: 14,
            matematica: 4.8,
            portugues: 3.8,
            historia: 5.8,
            fisica: 8.8,
            geografia: 6.8,
            biologia: 7.1,
            quimica: 9.0,
            ingles: 3.0,
        },
        {
            nome: 'Ciclano',
            idade: 44,
            matematica: 8.4,
            portugues: 7.8,
            historia: 8.8,
            fisica: 4.8,
            geografia: 6.8,
            biologia: 7.1,
            quimica: 9.0,
            ingles: 3.0,
        },
        {
            nome: 'Beltrano',
            idade: 24,
            matematica: 4.8,
            portugues: 3.8,
            historia: 5.8,
            fisica: 8.8,
            geografia: 6.8,
            biologia: 7.1,
            quimica: 9.0,
            ingles: 3.0,
        },
        {
            nome: 'Isis',
            idade: 20,
            matematica: 10,
            portugues: 10,
            historia: 10,
            fisica: 10,
            geografia: 6.8,
            biologia: 7.1,
            quimica: 9.0,
            ingles: 3.0,
        }
    ]
    
    //Criar uma função que soma dois números
    let somar = (num1, num2) => {
        return num1 + num2
    }
    
    //função para procurar o nome da pessoa
    let procurarNome = (nome) => {
        let retorno = 'O nome não foi encontrado'
        //converter obj em lista
        Object.keys(pessoas).map(retNome => {
            if(pessoas[retNome].nome === nome){
                let idade = pessoas[retNome].idade
                let cpf = pessoas[retNome].cpf
                let nomePessoa = pessoas[retNome].nome
                retorno = `O nome ${nomePessoa} foi encontrado com o CPF ${cpf} e idade ${idade} anos`
            }
        })
        return retorno
    }

    //função para procurar a cidade
    let procurarCidade = (cidade) => {
        let retorno = 'A cidade não foi encontrada'
        cidades.map(retCidade => {
            if(retCidade === cidade)
            {
                retorno = `A cidade ${cidade} foi encontrada`
            }           
        })
        /*if(cidades[1] === cidade)
        {
            retorno = `A cidade ${cidade} foi encontrada`
        }else
        {
            retorno = `A cidade na posição 1 é ${cidades[8]}`
        }*/
        return retorno
    }

    //função para procurar o animal e dizer se é mamífero, repteiro, ave ou anfibio
    let procurarAnimal = (animal) =>{
        let retorno = 'O animal não foi encontrado'

        Object.keys(animais).map((retAnimal, idxAnimal) => {
            for (let index in retAnimal) {
                if(animais[retAnimal][index] === animal){
                    retorno = `${animal} foi encontrado e é do tipo ${retAnimal}`
                }
            }            
        })

        return retorno
    }


    let procurarBoletim = (nomeAluno) => {
        let retorno = 'Aluno não encontrado'
        boletim.map(retBoletim => {
            if(retBoletim.nome === nomeAluno){
                retorno = {
                    nome: retBoletim.nome,
                    idade: retBoletim.idade,
                    media: (retBoletim.matematica + retBoletim.portugues + retBoletim.  historia + retBoletim.fisica + retBoletim.geografia + retBoletim.biologia + retBoletim.quimica + retBoletim.ingles) / 8
                }
            }
        })

        return retorno
    }

    let funcao = (num1, num2, callback) => {
        let objeto = undefined
        num1 = objeto?.num1 || 100
        let soma = num1 + num2
        let resultado = callback ? callback(soma) : soma

        let logico = ''

        if(!logico){
            true
        }

        if(callback !== undefined){
            resultado = callback(soma)
        } else {
            resultado = soma
        }

        return resultado
    }

    let retornoBoletim = (nomeAluno) => {
        let retorno = 'Aluno não encontrado'
        boletim.map(retBoletim => {
            if (retBoletim.nome === nomeAluno) {
                if (procurarBoletim(nomeAluno).media >= 7) {
                    retorno = 
                        <div>
                            <p className='d-inline'>{'O(a) ' + nomeAluno + ' foi aprovado com média '}</p>
                            <p className='d-inline text-success'>{procurarBoletim(nomeAluno).media}</p>
                        </div>                   
                }else
                {
                    retorno = 
                    <div className=''>
                        <p className='d-inline'>{'O(a) ' + nomeAluno + ' foi reprovado(a) com média '}</p>
                        <p className='d-inline text-danger'>{procurarBoletim(nomeAluno).media}</p>
                    </div>
                }
            }
        })
        return retorno

    }

    //contrução do html
    return (
        <Visual>

            <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
            }}>
                {/*Teste de pesquisa de nomes */}
                <div 
                    className='border border-white rounded-3 m-1 p-2 '
                    style={{
                    height: 'auto',
                    width: '500px',
                    }}
                >
                    <h1 
                        className=''
                        style={{
                            textAlign: 'center',
                        }}>
                            <i className="fas fa-user"></i>
                            Pesquise um nome:
                    </h1>
                    <input
                        type="text"
                        placeholder='Digite o nome'
                        style={{
                            width: '400px',
                            margin: '0px 0px 0px 40px',
                        }}
                        value={obterNome}
                        onChange={(campo) => {
                            definirNome(campo.target.value)
                        }}
                        />
                    <p
                        style={{
                            textAlign: 'center',
                        }}>
                            {procurarNome(obterNome)}
                    </p>
                </div>

                {/*Teste de pesquisa de cidades*/}
                <div 
                    className='border border-white rounded-3 m-1 p-2'
                    style={{
                        height: 'auto',
                        width: '500px',
                    }}>
                    <h2 
                        className=''
                        style={{
                            textAlign: 'center',
                        }}>
                            <i className="fas fa-city"></i>
                            Pesquise uma cidade:</h2>
                    <input
                        type="text"
                        placeholder='Digite a cidade'
                        style={{
                            width: '400px',
                            margin: '0px 0px 0px 40px',
                        }}
                        value={obterCidade}
                        onChange={(campo) => {
                            definirCidade(campo.target.value)
                        }}/>
                    <p
                        style={{
                            textAlign: 'center',
                        }}>
                            {procurarCidade(obterCidade)}
                    </p>
                </div>

                {/*Teste de pesquisa de Animais*/}
                <div 
                    className='border border-white rounded-3 m-1 p-2'
                    style={{
                        height: 'auto',
                        width: '500px',
                    }}>
                    
                    <h2 
                        className=''
                        style={{
                            textAlign: 'center',
                        }}>
                            <i className="fad fa-paw"></i>
                            Pesquise um animal:</h2>
                    <input
                        type="text"
                        placeholder='Digite o animal'
                        style={{
                            width: '400px',
                            margin: '0px 0px 0px 40px',
                        }}
                        value={obterAnimal}
                        onChange={(campo) => {
                            definirAnimal(campo.target.value)
                        }}/>
                    <p
                        style={{
                            textAlign: 'center',
                        }}>
                            {procurarAnimal(obterAnimal)}
                    </p>
                </div>
                
                {/*Teste de pesquisa de boletim*/}
                <div 
                    className='border border-white rounded-3 m-1 p-2'
                    style={{
                        height: 'auto',
                        width: '500px',
                    }}>
                    <h2 
                        className=''
                        style={{
                            textAlign: 'center',
                        }}>
                            <i className="fas fa-graduation-cap"></i>
                            Pesquise o nome de um aluno:</h2>
                    <input
                        type="text"
                        placeholder='Digite o nome'
                        style={{
                            width: '400px',
                            margin: '0px 0px 0px 40px',
                        }}
                        value={obterNomeAluno}
                        onChange={(campo) => {
                            definirNomeAluno(campo.target.value)
                        }}/>
                    <p
                        style={{
                            textAlign: 'center',
                        }}>
                            {retornoBoletim(obterNomeAluno)}
                    </p>
                </div>

                {/*Teste de botão*/}
                <div>
                    <button
                        className='btn btn-light btn-lg'
                        style={{
                            margin: '0px 0px 0px 40px',
                        }}
                        onClick={() => {
                            definirNome('')
                            definirCidade('')
                            definirAnimal('')
                            definirNomeAluno('')
                        }}
                    >
                        <i className="fal fa-file-alt"></i>
                        Limpar
                    </button>
                </div>
            </div>

            <h1>{funcao(undefined, 3, )}</h1>
        </Visual>
    )
}

let verificar = (numero) => {
    if (numero > 10) {
        return 'Maior que 10'
    }
    else if (numero < 10) {
        return 'Menor que 10'
    }
}
export default Teste2