// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';
import { Typography, Paper } from '@mui/material';


export const MainFeature = ({imageUrl, title, subtitle}) => {

    const paperStyles = {
      borderRadius: 2, // 例子中的圆角大小
      p: 2, // 内边距
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: "absolute",
      bottom: "300px",
      left: {xs: '20px'},
      width: {xs: '80%', md: '40%'}
    };

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
            <Paper elevation={10} sx={paperStyles}>
              <Typography variant="h5" sx={{fontWeight: 1000, fontSize: {xs: 28, md: 30, lg: 60}}}>HappyLearner</Typography>
              <Typography variant='subtitle1'>我們希望經由繪本故事來吸引小朋友</Typography>
              <Typography variant='subtitle1'>打破傳統英文學習思維，讓小朋友從興趣出發，Join us</Typography>
            </Paper>
          </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="main-feature" style={{ backgroundImage:  `url("${imageUrl}")` }}>
            {/* Replace with your actual content */}
            <Paper elevation={10} sx={paperStyles}>
              <Typography variant="h5" sx={{fontWeight: 1000, fontSize: {xs: 28, md: 30, lg: 60}}}>{title}</Typography>
              <Typography variant='subtitle1'>{subtitle}</Typography>
            </Paper>
          </div>
        </SwiperSlide>
      </Swiper>
    );
  };
