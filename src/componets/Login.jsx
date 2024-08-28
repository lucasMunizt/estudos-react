import React from 'react'
import Input from './Input'
import Butao from './Butao'
import { useState } from 'react'
import Tela from './Tela.jsx'
const Login = () => {
    const [valorr,setValor] = useState("")
    const [valorrEmail,setEmail] = useState("")
    const [valorrSenha,setSenha] = useState("")
    
    const valdosInputs = (e) =>{
  
      const result= e.target.value
      console.log(result)
      setValor(result)
    }

    const valorEmail = (e) =>{
        const result = e.target.value
        console.log(result)
        setEmail(result);
    }

    const valorSenha = (e) =>{
        const result = e.target.value
        console.log(result)
        setSenha(result);
    }

    const verfication = () =>{
        if(valorrEmail === "lucasmunizteles@gmail.com" && valorrSenha === "1234"){
            console.log("deu certo")
            return <div><Tela/></div>
        }else{
            console.log("deu ruim")
        }
    }

    const EnviarForm = (e) =>{
        e.preventDefault()
        verfication()
     
    } 

  return (
    <div>
     <Input receba="text" msn="coloque seu nome" id="nome" valor={valorr} funcao={valdosInputs}/>  
     <Input receba="email" msn="coloque seu email" id="numero" valor={valorrEmail} funcao={valorEmail}/>  
     <Input receba="password" msn="coloque sua senha" id="sua senha" valor={valorrSenha} funcao={valorSenha} /> 
     <Butao id="t" valor="Entrar" test={EnviarForm}/> 
    </div>
  )
}

export default Login