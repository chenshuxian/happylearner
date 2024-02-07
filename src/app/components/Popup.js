
import React, { useRef, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import { Button } from '@mui/base';



export const Popup = ({ title, data, isOpen, close }) => {
    const swiperRef = useRef(null);
    const [isMouseMoving, setIsMouseMoving] = useState(false);

    const subtitleCss = {
        position: 'absolute',
        bottom: {sx:'', md:'20px'}, /* 根据需要调整 */
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '5px',
        fontSize: {xs: '20px', md: '36px'},
        textAlign: 'center',
        width: '80%'
      }

    const popupCloseBtn = {
        position: 'absolute',
        top: {xs: '5px', md: '10px'}, /* 调整按钮位置 */
        left: {xs: '20px', md: '40px'},
        border: 'none',
        background: 'none',
        color: 'rgba(128, 128, 128, 0.626)', /* 按钮颜色 */
        fontSize: {xs: '50px', md: '80px'}, /* 按钮大小 */
        cursor: 'pointer',
        zIndex: '10',
        boxShadow: 'none',
      }

    useEffect(() => {
        let timer;

        const handleMouseMove = () => {
            setIsMouseMoving(true);
            clearTimeout(timer);
            timer = setTimeout(() => setIsMouseMoving(false), 2000); // 2秒后隐藏音频播放器
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timer);
        };
    }, []);

    if (!isOpen) return null;

    const handleSwiper = (swiper) => {
        // Swiper实例化完成
        swiperRef.current = swiper; // 将Swiper实例赋值给ref
        playFirstSlideAudio(swiper); // 播放第一张幻灯片的音频
      };
    
    const playFirstSlideAudio = (swiper) => {
        const firstSlide = swiper.slides[0];
        const audioPlayer = firstSlide.querySelector('audio');
        audioPlayer.play().catch((e) => console.log("Audio autoplay failed", e));
    };

      // SwiperSlide改变事件处理函数
    const onSlideChange = (swiper) => {
        const { slides, activeIndex } = swiper;

        slides.forEach((slide, index) => {
        const audioPlayer = slide.querySelector('audio');
        if (index === activeIndex) {
            audioPlayer?.play();
        } else {
            audioPlayer?.pause();
            audioPlayer.currentTime = 0; // 重置音频时间
        }
        });
    };

    const handleAudioEnd = () => {
        if(!swiperRef.current.isEnd){
            setTimeout(()=>{
                swiperRef.current.slideNext();
            },2000);           
        }
        
      };
  
    return (
      <Box sx={{
        position: 'fixed', /* 固定位置 */
        top: 0,
        left: 0,
        width: '100%', /* 全屏宽度 */
        height: '100%',/* 全屏高度 */
        background: 'black', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000' /* 确保在顶层 */
      }} >
         <Box sx={popupCloseBtn} onClick={close}>&times;</Box> {/* 关闭按钮 */}
         <Swiper
            ref={swiperRef}
            loop={true} // 只有在有足够的幻灯片时才启用循环模式
            slidesPerView={1} // 每次视图中显示的幻灯片数量
            style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="pop-swiper"
            onSlideChange={onSlideChange}
            onSwiper={handleSwiper}
        >
        {data.map((item, index) => (
        <SwiperSlide key={index}>
            <Box component='img' src={`/story/images/${title}/${index+1}.jpeg`} alt={item.subtitle} sx={{ marginTop:{xs: '20%', md:'0'}, height: {xs: '50vh', md:'100vh'}, width: {xs: '100%', md:'100%'}}}/>
            <div >
                <Paper sx={subtitleCss}>
                {item.subtitle.split(' ').map((char, index)=> (
                    <span key={index} className='char'>
                        {char}
                    </span>
                ))}
                {item.csubtitle.split(' ').map((char, index)=> (
                    <span key={index} className='char' >
                        {char}
                    </span>
                ))}
                </Paper>
            </div>
            <audio controls onEnded={() => handleAudioEnd()} className={`audio-player ${!isMouseMoving ? 'hidden' : ''}`}>
                <source src={`/story/audios/${title}/${index+1}.mp3`} type='audio/mp3' />
            </audio>    
        </SwiperSlide>
      ))}
      </Swiper>
      </Box>
    );
  };
  