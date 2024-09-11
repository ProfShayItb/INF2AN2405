import './modelo.css'

export default function Modelo(props){


    return(
       <div>
            <div>{props.titulo}</div>
            <div>{props.children}</div>
       </div>
    )
}