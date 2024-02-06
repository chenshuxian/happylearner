"use client"
import React,{useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';
import { Footer } from './Footer';
import '../css/swiper.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export const ThumbnailSwiper = ({onThumbnailClick , data}) => {
  return ( 
    <div className='thumbnail-swiper' >
    <h2>近期推出</h2>
    <Swiper
        spaceBetween={3}
        breakpoints={{
          // 当屏幕宽度>=640px
          380: {
            slidesPerView: 2, // 在中等屏幕上显示 2 个 slide
          },
          // 当屏幕宽度>=768px
          768: {
            slidesPerView:6
            , // 在大屏幕上显示 3 个 slide
          },
        }}
        loop={true} // 只有在有足够的幻灯片时才启用循环模式 
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Box className='thumbnail'>
            <img src={`/story/images/${item.title}/1.jpeg`} alt={item.title} onClick={() => onThumbnailClick(item)} />
            <div className='thumbnail-title'>{item.title}</div>
          </Box>
        </SwiperSlide>
      ))}
      </Swiper>
      <Footer />
      </div>
  );
};