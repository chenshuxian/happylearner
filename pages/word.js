'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';

// 假設的單字數據
const vocabWords = [
  {
    word: 'Apple',
    image: '/word/apple.jpeg',
    sentence: 'I eat an apple every day.',
  },
  // 添加更多單字...
];

const VocabularyCard = ({ word, image, sentence }) => {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" maxHeight="100vh">
    <Card onClick={() => setFlipped(!flipped)} sx={{ 
        maxWidth: '50%', // 最大寬度為父容器的80%
        width: '50%', // 寬度為父容器的80%
        aspectRatio: '1 / 1', // 保持正方形比例
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' 
    }}>
      <CardActionArea sx={{ width: '100%', height: '100%' }}>
        {!flipped ? (
          <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h1" component="div">
              {word}
            </Typography>
          </CardContent>
        ) : (
          <>
            <CardContent sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                {sentence}
              </Typography>
            </CardContent>
            <CardContent sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
              蘋果
              </Typography>
            </CardContent>
            <CardActionArea sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={image} alt={word} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
            </CardActionArea>
          

          </>
        )}
      </CardActionArea>
    </Card>
  </Box>
  );
};

export default function Home() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {vocabWords.map((vocab, index) => (
        <SwiperSlide key={index}>
          <VocabularyCard {...vocab} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}