import React from 'react'
import logoPrincipal from '../assets/logoPrincipal.png'
import './Header.css'
import Butao from './Butao'
const Hearder = () => {
  return (
    <div className='nav'>
        <div className="barra">
           <img src={logoPrincipal} alt="" className='img-logo'/>
           <input type="checkbox" id="check"/>
        <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <ul>
            <li><Butao a="https://wa.me/5585999948957" target="_blank" text="WhatsApp"/></li>
            <li><Butao a="tel:+55-85-999948957" text="Ligar Agora"/></li>
        </ul>
            

        </div>  
    </div>
  )
}
export default Hearder