export default function NumeroAleatorio(props){
    const minimo = props.min
    const maximo = props.max
    const aleatorio = parseInt(Math.random() * (maximo-minimo) + minimo)
    return(
        <>
            <h2>Valor aleatório</h2>
            <p><strong>Valor Mínimo: </strong> {minimo}</p>
            <p><strong>Valor Máximo: </strong> {maximo}</p>
            <p><strong>Valor sorteado: </strong>{aleatorio}</p>
        </>
    )
}