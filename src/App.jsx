import Primeiro from "./components/Primeiro/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import NumeroAleatorio from "./components/basicos/NumeroAleatorio"
import Modelo from "./components/modelo/modelo"

function App() {

  return (

    <div>
      <Modelo>
        <NumeroAleatorio max={0} min={10}/>
        <NumeroAleatorio max={10} min={100}/>
        <NumeroAleatorio max={100} min={1000}/>

      </Modelo>

      <Modelo titulo="Com Parâmetro">
        <ComParametro subtitulo="Hoje é Quarta-feira" titulo="11/09/2024" />
      </Modelo>

      <Modelo titulo="Fragmento">
        <Fragmento />
      </Modelo>

      <Modelo titulo="Primeiro Componente">
        <Primeiro />
      </Modelo>



    </div>

  )

}

export default App
