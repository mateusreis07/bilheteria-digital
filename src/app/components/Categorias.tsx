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

const Categorias = () => {
  return (
  <div className='container max-w-6xl mx-auto p-4'>
    <h1 className=" text-xl font-bold mb-4">Categorias</h1>
    <Swiper
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
      slidesPerView={3}
      pagination={{clickable: true}}
      //autoplay={{delay: 5000, pauseOnMouseEnter: true}}
      navigation={{enabled: true}}
      className=''
    >
      {data.map( (item) => (
        <SwiperSlide key={item.id}>
          <div className='flex justify-center'>
            <img
              src={item.image}
              alt='Slider'
              className='w-28 h-28 object-cover rounded-full mb-6 mt-2'
              />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  );
};

export default Categorias;
