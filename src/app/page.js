'use client'
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { MainFeature } from './components/MainFeature';
import { ThumbnailSwiper } from './components/ThumbnailSwiper';
import { Footer } from './components/Footer';
import { Popup } from './components/Popup';
import './css/App.css';
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
      <Footer />
    </div>
  );
};

export default App;