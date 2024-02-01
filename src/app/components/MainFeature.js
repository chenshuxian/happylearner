// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';


export const MainFeature = ({imageUrl, title, subtitle}) => {
    return (
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide >
            <div className="main-feature" style={{ backgroundImage: `url(/happylearner.jpeg)` }}>
            {/* Replace with your actual content */}
            <div className="title-info">
              <h1>HappyLearner</h1>
              <div className="main-subtitle">
              <h4>我們希望經由繪本故事來吸引小朋友</h4>
              <h4>打破傳統英文學習思維，讓小朋友從興趣出發，Join us</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="main-feature" style={{ backgroundImage:  `url("${imageUrl}")` }}>
            {/* Replace with your actual content */}
            <div className="title-info">
              <h1>{title}</h1>
              <div className="main-subtitle">
              <h4>{subtitle}</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    );
  };
