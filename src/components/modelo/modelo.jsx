import './modelo.css'

export default function Modelo(props){


    return(
       <div className='card'>
            <div className='titulo'>{props.titulo}</div>
            <div className='conteudo'>{props.children}</div>
       </div>
    )
}