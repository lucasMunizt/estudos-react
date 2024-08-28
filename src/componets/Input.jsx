import { useState } from 'react'
import './Input.css'
const Input = ({receba,msn,id,valor,funcao}) => {
    
  return (
    <div>
        <input type={receba} placeholder={msn} id={id} value={valor} onChange={funcao}/>
    </div>
  )
}

export default Input