import React from 'react'
import './Butao.css'
const Butao = ({valor,id,test}) => {
  return (
    <div>
        <button id={id}onClick={test}>{valor}</button>
    </div>
  )
}

export default Butao