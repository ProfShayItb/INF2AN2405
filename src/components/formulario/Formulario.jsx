import {useState} from 'react'


export default function Formulario(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState( )
    const [user, setUser] = useState({})//{nome: 'Matheus', idade: '16', email: 'matheuso@gmail.com'}

//()=>{}
    function registrar(e){
        e.preventDefault()
        setUser({
            nome: nome,
            email: email,
            idade: idade
        })
    }

    return(
        <div>
            <form onSubmit={registrar}>
                <h1>Cadastrando usuário</h1>
                <label htmlFor="txtnome">Nome:</label>
                <input type="text" placeholder="Digite seu nome" id="txtnome" value={nome} onChange={(e)=> setNome(e.target.value)}/><br/><br/>

                <label htmlFor="txtemail">Email:</label>
                <input type="email" name="txtemail" id="txtemail" placeholder="Digite seu email"  value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>

                <label htmlFor="idade">Idade:</label>
                <input type="number" name="idade" id="idade" value={idade} onChange={(e)=>setIdade(e.target.value)}/><br/><br/>

                <button type="submit">Registrar</button>
            </form>

            <div>
                <span>Bem vindo(a) {user.nome}!</span><br/><br/>
                <span>Email: {user.email} </span><br/><br/>
                <span>Idade: {user.idade}</span><br/><br/>
            </div>
        </div>
    )
}