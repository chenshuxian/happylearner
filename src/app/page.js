'use client'
import React, { useEffect, useState } from 'react';
import { MainFeature } from './components/MainFeature';
import { ThumbnailSwiper } from './components/ThumbnailSwiper';
import { Popup } from './components/Popup';
import { recordClick } from '@/utils/recodClick';
import Grid from '@mui/system/Unstable_Grid/Grid';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

import './css/app.css';
import './css/pop.css';


// eslint-disable-next-line @next/next/no-async-client-component
const App = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [slideData, setSlideData] = useState();
    const [stories, setStories] = useState([]);
    const [group, setGroup] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/api/stories');
        const data = await response.json();
        const nearStories = getNearSix(data);
        const groupData =  groupByMonth(data);
        setStories(nearStories);
        setGroup(groupData);
      };

      fetchData().catch(console.error);
    },[]);

    // 取得近期六個故事
    const getNearSix = (stories) => {
      return stories.slice(0,6);
    }

    // 取得近期六個故事
    const groupByMonth = (stories) => {
        const groupData = stories.reduce((acc, cur) =>{
          const date = cur.createdAt.substring(0,7); // 2023-03
          // 如果該日期已存在於累加器對象中，則將當前值添加到該日期的數組中
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(cur);
          return acc;
        },{});

        console.log(groupData)

       return groupData;
    }
  
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
      <Grid container direction="column">
        <Grid xs={12}>
          <MainFeature imageUrl={`/story/images/${stories[0]?.title}/1.jpeg`} title={stories[0]?.title} subtitle={stories[0]?.description}/>
        </Grid>
        <Grid xs={12}>
          <ThumbnailSwiper onThumbnailClick={handleThumbnailClick} data={stories} group={group}/>
        </Grid>
        <Grid xs={12}>
          <Popup title={slideData?.title} data={slideData?.pages} isOpen={isPopupOpen} close={closePopup} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;