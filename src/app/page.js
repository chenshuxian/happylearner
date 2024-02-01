'use client'
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { MainFeature } from './components/MainFeature';
import { ThumbnailSwiper } from './components/ThumbnailSwiper';
import { Popup } from './components/Popup';
import { recordClick } from '@/utils/recodClick';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

import './css/app.css';118
import './css/pop.css';

const App = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [slideData, setSlideData] = useState();
    const [stories, setStories] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/api/stories');
        const data = await response.json();
        setStories(data);
      };

      fetchData().catch(console.error);
    }, []);
  
    const handleThumbnailClick = (sd) => {
      recordClick(sd.id)
      setSlideData(sd);
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
      

  return (
    <div>
      <Header />
      <MainFeature imageUrl={`/story/images/${stories[0]?.title}/1.jpeg`} title={stories[0]?.title} subtitle={stories[0]?.description}/>
      <ThumbnailSwiper onThumbnailClick={handleThumbnailClick} data={stories}/>
      <Popup title={slideData?.title} data={slideData?.pages} isOpen={isPopupOpen} close={closePopup} />
    </div>
  );
};

export default App;