import { useState,useEffect } from 'react';
import './App.css';
import Card from './components/card';
import fruta from './assets/fruta.jpg';
import fruta2 from './assets/fruta.jpeg';
 import {Swiper,SwiperSlide} from 'swiper/react'
 import 'swiper/css';
 import 'swiper/css/free-mode';
 import 'swiper/css/pagination';
 import { FreeMode, Pagination } from 'swiper/modules';


function App() {
  const [cards, setCards] = useState(3);
  const [cardsEspassamento, setcardsEspassament] = useState(10);
  const quantidadeCard = 5;
  const visiveldeCard = 4;

  useEffect(()=>{
    function handleResize(){
      if(window.innerWidth < 820 && window.innerWidth > 560){
        setCards(2)
        setcardsEspassament(20)
      }
      else if(window.innerWidth < 580){
        setCards(1)
        setcardsEspassament(10)
      }
        
      else{
        setCards(3)
        setcardsEspassament(10)
      }
    }
    handleResize();
    window.addEventListener("resize",handleResize)
     return () =>{
      window.removeEventListener("resize",handleResize)
     }

  },[])




  return (
    <>
        <h4>Frutas</h4>
      <div className="container">
        <Swiper
        slidesPerView={cards}
        spaceBetween={cardsEspassamento}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Card img={fruta2}/></SwiperSlide>
        <SwiperSlide><Card img={fruta}/></SwiperSlide>
        <SwiperSlide><Card img={fruta}/></SwiperSlide>
        <SwiperSlide><Card img={fruta}/></SwiperSlide>
        <SwiperSlide><Card img={fruta2}/></SwiperSlide>
       
      </Swiper>
        
      </div>
 
    </>
  );
}

export default App;
