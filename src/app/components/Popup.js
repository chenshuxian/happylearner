
import React, { useRef, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const Popup = ({ title, data, isOpen, close }) => {
    const swiperRef = useRef(null);
    const sw = useSwiper();
    const [isMouseMoving, setIsMouseMoving] = useState(false);

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
            swiperRef.current.slideNext();
        }
        
      };
  
    return (
      <div className="popup" >
         <button className="popup-close-btn" onClick={close}>&times;</button> {/* 关闭按钮 */}
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
            modules={[FreeMode, Navigation, Thumbs]}
            className="pop-swiper"
            onSlideChange={onSlideChange}
            onSwiper={handleSwiper}
        >
        {data.map((item, index) => (
        <SwiperSlide key={index}>
            <img src={`/story/images/${title}/${index+1}.jpeg`} alt={item.subtitle} />
            <div className="subtitle">
                <div className="subtitle-center">
                {item.subtitle.split(' ').map((char, index)=> (
                    <span key={index} className='char' >
                        {char}
                    </span>
                ))}
                </div>
            </div>
            <audio controls onEnded={() => handleAudioEnd()} className={`audio-player ${!isMouseMoving ? 'hidden' : ''}`}>
                <source src={`/story/audios/${title}/${index+1}.mp3`} type='audio/mp3' />
            </audio>    
        </SwiperSlide>
      ))}
      </Swiper>
      </div>
    );
  };
  