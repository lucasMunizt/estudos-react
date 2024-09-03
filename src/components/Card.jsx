import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import './Card.css';
const Card = () => {
    const comentarios = [
        {
            id: '1',
            nome: "Leandro Braga",
            comentario: "Excelente profissional, preço justo pelo serviço. Trocou a placa da lavadoura Consul 12kg da minha mãe, ficou nova de novo. Recomendo esse profissional",
            via: "google"
        },
        
        {
            id: "2",
            nome: "Arthur De Britto",
            comentario: "Tenho um Maquina já antiga mas muito boa, e vinha apresentando alguns defeitos devido tempo de uso. Como barulho terrível e nível da água e por último vazamento. Ficou nova, indicarei sempre o Profissional, extremamente pontual , simpático e comprometido. Faz a coleta e entrega exatamente no horário combinado. Serviço 10",
            via:"google"
        },

        {
            id: "3",
            nome: "Nicolle Christina",
            comentario: "Profissional super atencioso e entendedor do assunto, super indico, além de ter avaliado toda a máquina ainda me explicou tudo.",
            via: "google"
        }
    ]

  return (
    <div>
        <h1>Comntarios</h1>
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            comentarios.map (comentario => (
                <SwiperSlide key={comentario.id}>
                    <div className="card">
                    <h5>{comentario.nome}</h5>
                    <p>{comentario.comentario}</p>
                    <p>{comentario.via}</p>
                    </div>
                
                </SwiperSlide>
            ))};
       
       
      </Swiper>
    </div>
  )
}

export default Card