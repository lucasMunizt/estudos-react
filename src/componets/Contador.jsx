import React from 'react'
import { useState } from 'react'
import Butao from './Butao'
const Contador = () => {
    const[contador,setContador] = useState(0)
   
    const incrementar = () => {
        setContador(contador + 1)
    }

    const diminuir = () =>{
        setContador(contador - 1);
    }

    return (
    <div>
        <h1>Aperte o butão para atualizar</h1>
        <p>Contador: {contador}</p>
        <button onClick={incrementar}>Click</button>
        <br />
        <br />
        <Butao id="t" valor="deu certo" test={diminuir}/>
    </div>
  )
}

export default Contador