import { useEffect, useState } from "react"

const minhaLista = [ //array com os dados da lista
    { id: '1', value: 'Fruta' },
    { id: '2', value: 'Legume' },
    { id: '3', value: 'Carne' },
]

export default function MinhaLista() {

    const [produtos, setProdutos] = useState(minhaLista) //recebe variavel lista como parametro
    const [pesquisa, setPesquisa] = useState('') //valor do campo de pesquisa

    useEffect(
        () => {
            if(pesquisa){ //se houver pesquisa, rodar o filtro...se não, manter lista original
                const novaLista = minhaLista.filter( (item) => {
                    return item.value.toLowerCase().includes(pesquisa.toLowerCase()) //verifica se a string digitada está contida em algum item da minhaLista
                })
                setProdutos(novaLista)
            }
            else{
                setProdutos(minhaLista)
            }

        },
        [pesquisa]
    )

    return (
        <div>
            <h1>Efeitos colaterais</h1>
            <input 
                value={pesquisa}
                onChange={ (e) => setPesquisa(e.target.value)}
            type="text" placeholder="Pesquise aqui" />
            {
                produtos.map((item) => { //função anonima (arrow function)
                    return (
                        <div key={item.id}>
                            <p>{item.value}</p>
                        </div>
                    )
                })
            }
        </div>
    )
        
}