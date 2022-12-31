import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { img001, img002, img003, img004 } from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Card = () => {
  return (
    <>
    <div className='testimonials'>
        <div className='t-container'>
            <div className='section'>
                <h1 className='t-p'>TESTIMONIAL</h1>
                <div className='head'>
                    <p className='p-t'>Here’s what our clients are saying about us</p>
                </div>
            </div>
      

    
    <Swiper
    className='maybe-swipe'
      // install Swiper modules
      modules={[Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
    //   navigation
    //   pagination={{ clickable: true }}

      scrollbar={{ 
        draggable: true,
        dragSize: 100,
        color: '#ff0000',
        dragClass: 'swiper-slide-dragging',
        grabClass: 'swiper-slide-grabbing',
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
            slidesPerView: 3
        },
        1280:{
            slidesPerView: 3
        },
        1440:{
            slidesPerView: 3
        },
    }}
    >
      <SwiperSlide className='slidess'>
        <div className='card-bodys'>
            <div className='card-img'><img src={img001} alt="" /></div>
            <div className='card-deets'>
                <div className='card-text'>
                    <div className='card-name'>
                        <p className='cycle'>Mr Kayode Babarinde</p>
                        <p className='dem-role'>Executive Director</p>
                    </div>
                    <p className='play'>Africa Blockchain Institute</p>
                    <div className='card-desc'>
                        <div className='inner-desc'>
                        <p className='happy'>
                        We had to tell the CycleBreeze team to stop the recruitment process as we had above 500% individuals that met the criteria more than we envisaged and the journey was worth it as there is so much ease working with their process and the team that came out of it.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='slidess'>
      <div className='card-bodys'>
            <div className='card-img'><img src={img002} alt="" /></div>
            <div className='card-deets'>
                <div className='card-text'>
                    <div className='card-name'>
                        <p className='cycle'>Mr Taiwo Gbade</p>
                        <p className='dem-role'>Founder</p>
                    </div>
                    <p className='play'>Circue</p>
                    <div className='card-desc'>
                        <div className='inner-desc'>
                       <p className='happy'> We got the right structure we needed for getting and managing our team, the fact that the procedures worked for our different team in the different countries was also thrilling, we are sincerely grateful for this system as it works.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slidess'>
      <div className='card-bodys'>
            <div className='card-img'><img src={img003} alt="" /></div>
            <div className='card-deets'>
                <div className='card-text'>
                    <div className='card-name'>
                        <p className='cycle'>Mr Theophilus Paul</p>
                        <p className='dem-role'>Human resource manager</p>
                    </div>
                    <p className='play'>GoKonnect</p>
                    <div className='card-desc'>
                        <div className='inner-desc'>
                       <p className='happy'> I was happy to be exposed to experiential formula for the cycle of human resource management that has improved the execution of my duties in the role of an HR. I tried this process and procedure and it works.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='slidess'>
      <div className='card-bodys'>
            <div className='card-img'><img src={img004} alt="" /></div>
            <div className='card-deets'>
                <div className='card-text'>
                    <div className='card-name'>
                        <p className='cycle'>Miss Opeyemi Omoyele</p>
                        <p className='dem-role'>Operational manager</p>
                    </div>
                    <p className='play'>Africa’s Young Entrepreneurs</p>
                    <div className='card-desc'>
                        <div className='inner-desc'>
                       <p className='happy'>I  was concerned at first as our organization is very unique, I decided to give it a try and it worked even for our own peculiarity, we had to upgrade our package and also requested for tailored packages and process which gives us exactly what we need.</p>
                  
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide className='slidess'>
      <div className='card-bodys'>
        <div>

        <div className='card-img'><img src={img004} alt="" /></div>
            <div className='card-deets'>
                <div className='card-text'>
                    <div className='card-name'>
                        <p  className='cycle'>Miss Opeyemi Omoyele</p>
                        <p className='dem-role'>Operational manager</p>
                    </div>
                    <p className='play'>Africa’s Young Entrepreneurs</p>
                    

        </div>
           <div className='card-desc'>
                        <div className='inner-desc'>
                        <p className='happy'>I was concerned at first as our organization is very unique, I decided to give it a try and it worked even for our own peculiarity, we had to upgrade our package and also requested for tailored packages and process which gives us exactly what we need.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </SwiperSlide> */}
      ....
    </Swiper>
    <div className='move-thing'>
        <div></div>
        <div></div>
    </div>
    </div>
    <div className='break'>
       <Link to='/services' style={{textDecoration: 'none'}}>
       <button className='test-button'> Customize your own package</button></Link>
    </div>
    </div>
    </>
  )
}

export default Card