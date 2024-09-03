import React from 'react'
import cartaoCredito from '../assets//400-icones-cartoes-de-credito-removebg-preview.png'
import Butao from './Butao'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
         <div className="iform-rodape">
            <div className="horarios">
                <ul>
                    <li>
                        <h2>Horário de Funcionamento</h2>
                    </li>
                    <li>
                        <h4>Segunda a Sexta 8:00 - 17:30</h4>
                    </li>    
                    <li>
                        <h4>Sábado 8:00 - 14:30</h4>
                    </li>
                </ul>

            </div>



            <div className="forma-pagamento">
                <ul>
                    <li>
                        <h2>Formas de Pagamentos</h2>
                    </li>

                    <li>
                        <img src={cartaoCredito} alt="Imagem mostrando as bandeiras dos cartões"/>
                    </li>
                </ul>
            </div>
        </div>
        <div className="contato">
            {/* <a href="https://wa.me/5585999948957" target="_blank"><i className="fa fa-whatsapp"></i></a>  */}
            <Butao a="https://wa.me/5585999948957" target= "_blank" text={<i className="fa fa-whatsapp"></i>}></Butao>
        </div>
    </div>
  )
}

export default Footer