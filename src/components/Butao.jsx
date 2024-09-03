import React from 'react'
import './Butao.css'
const Butao = ({a,target,text,className}) => {
  return (
    <div>
        <div className={className}>
      <a href={a} target={target}>{text}</a>
        </div>
    </div>
  )
}

export default Butao
