"use client"
import React,{useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Footer } from './Footer';

import '../css/swiper.css'


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export const ThumbnailSwiper = ({onThumbnailClick , data}) => {
  return ( 
    <div className='thumbnail-swiper' >
    <h2>近期推出</h2>
    <Swiper
        spaceBetween={6}
        slidesPerView={6}
        loop={true} // 只有在有足够的幻灯片时才启用循环模式 
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='thumbnail'>
            <img src={`/story/images/${item.title}/1.jpeg`} alt={item.title} onClick={() => onThumbnailClick(item)} />
            <div className='thumbnail-title'>{item.title}</div>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
      <Footer />
      </div>
  );
};