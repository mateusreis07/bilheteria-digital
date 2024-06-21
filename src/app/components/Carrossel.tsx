//import { Carousel } from 'react-responsive-carousel';
//import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
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
];

const Carrossel = () => {
  return (
  <div className='container max-w-6xl mx-auto rounded-xl p-4'>
    <Swiper
      slidesPerView={1}
      pagination={{clickable: true}}
      autoplay={{delay: 5000, pauseOnMouseEnter: true}}
      navigation={{enabled: true}}
    >
      {data.map( (item) => (
        <SwiperSlide key={item.id}>
          <img
            src={item.image}
            alt='Slider'
            className='w-full h-72 object-cover rounded-2xl'
            />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default Carrossel;
