
//useState - Hook, atualização de estado do componente

import { useState } from "react"; 

export default function ExHook(){
//js puro


    const [contador, setContador] = useState(0)
    //     inicializadora(estado atual), atualizadora(função atualizadora)

    return(
        <div>
            <p>Contador: {contador} </p>
            <button onClick={()=>setContador(contador+1)}>Incrementar</button>
     </div>
    )
}



