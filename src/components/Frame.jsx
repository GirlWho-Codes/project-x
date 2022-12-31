import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import purple from '../assets/purple.png'
import yellow from '../assets/yellow.png'
import blue from '../assets/blue.png'
import green from '../assets/green.png'
import peach from '../assets/peach.png'

const Frame = () => {
  return (
    <div className='frames'>

<Swiper
    
    className='maybe'
    modules={[Scrollbar,  A11y]}
    spaceBetween={-40}
    // width={1280}
    // slidesPerView={3}
    // pagination={{ clickable: true }}
    scrollbar={{ 
      draggable: true ,
      color: '',
    
    }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    breakpoints={{
      375:{
          slidesPerView: 1
      },
      390:{
          slidesPerView: 1
      },
      480:{
          slidesPerView: 1
      },
      680:{
          slidesPerView: 1
      },
      740:{
          slidesPerView: 2
      },
      1024:{
          slidesPerView: 2
      },
      1280:{
          slidesPerView: 2
      },
      1440:{
          slidesPerView: 3
      },
  }}
  >

    <SwiperSlide className='tried'>
    <img src={purple} className='move' alt="" />
    </SwiperSlide>

    <SwiperSlide className='try'>
    
    <img src={yellow} className='movea'  alt="" />
    <img src={blue} className='moveb'  alt="" />
    <img src={green} className='moveb'  alt="" />
    </SwiperSlide>

    {/* <SwiperSlide className='true'>
    <img src={peach} className='movec'  alt="" />
    </SwiperSlide>
  */}
  </Swiper>

    </div>
  )
}

export default Frame