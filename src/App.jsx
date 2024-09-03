import { useState } from 'react'
import './App.css'
import Hearder from './components/Hearder'
import Butao from './components/Butao'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import Galeria from './components/Galeria'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {

  return (
    <>
     <Hearder/>
     <div>
      <section>
        <main>
        <div className="nome">
                <h1>CLV Assistência Técnica</h1>
                <span id="descrisao">Em Eletrodoméstico</span>
                <br />
                <span>Rua Damião Fernandes 433 - Parquelândia</span>
                <Butao a="https://wa.me/5585999948957" target="_blank" text="WhatsApp (85)99994-8957" className="butao"/>
                
            </div>
            <div className=" quadrado">
                <div className="descrisao-loja">
                    <h2>Descrição</h2><br/>
                    <p> 
                      A Clv Assistência Técnica é uma empresa
                        genuinamente familiar, criada em 2020.
                        A equipe técnica possui uma vasta experiência profissional no mercado.
                        Atuamos em toda Fortaleza e região metropolitana.
                        Realizamos conserto de eletrodomésticos em geral,
                        com atendimento na Empresa e à domicílio, no caso de máquinas de lavar e geladeira.
                        O serviço é realizado com rapidez, garantia e preço justo.
            
                    </p>
                </div>
            </div>
            <div className="galeria-container">
                <h2>Galeria</h2>
                <div className="galeria-foto">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
            <Galeria/>
        </main>

      </section>
      <Card/>
     </div>
     <Footer/>
    </>
  )
}

export default App
