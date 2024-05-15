import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';


import bgi1 from '../assets/banner/img1.jpg'
import bgi2 from '../assets/banner/img2.jpg'
import bgi3 from '../assets/banner/img3.png'
import bgi4 from '../assets/banner/img4.jpg'
export default function Carosol() {
    
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
       
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slider image={bgi1} text='get your home repair service 1 hours '/>
            </SwiperSlide>
        <SwiperSlide>
        <Slider image={bgi3}  text='We will fi any kind of home applience problem  '/>
        </SwiperSlide>

        <SwiperSlide>
        <Slider image={bgi4}  text='we work sefaly and solve your problem easyly '/>
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
}
