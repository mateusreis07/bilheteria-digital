
import { useEventos } from "@/context/EventoContext";
import EventoCard from "./EventCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element-bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import 'swiper/css/keyboard'

const data = [
  { id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  { id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  { id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  { id: '4', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  { id: '5', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  { id: '6', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  { id: '7', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  { id: '8', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  { id: '9', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  { id: '10', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  { id: '11', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
];

const SubCategoria = () => {
  const { eventos } = useEventos();


  return (
  <div className="p-4">
  <div className='container max-w-6xl mx-auto'>
    <h1 className="text-xl font-bold mb-4">SubCategoria</h1>
    <Swiper
      slidesPerView={4}
      //pagination={{clickable: true}}
      //autoplay={{delay: 5000, pauseOnMouseEnter: true}}
      navigation={{enabled: true}}
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:max-w-full'
    >
      {eventos.map( (evento) => (
        <SwiperSlide key={evento.id} className="mr-2 pr-2">
          <EventoCard key={evento.id} evento={evento}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  </div>
  );
};

export default SubCategoria;