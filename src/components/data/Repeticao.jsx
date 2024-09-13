import alunos from "./alunos"


export default function Repeticao(props){
//JS puro
    const lista = alunos.map((pessoa)=>{
        return(
            <li key={pessoa.id}>{pessoa.id} -- {pessoa.nome} -- {pessoa.nota} </li>
        )
    })


    return(
        <ul>
            {lista}
        </ul>
    )
}