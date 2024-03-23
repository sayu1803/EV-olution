import React from 'react';
import './Background.css';
import { assets } from '../../assets/assets';

const Background = ({ playStatus, heroCount }) => {
  // Handle the case where playStatus is true
  if (playStatus) {
    return (
      <video className='background' autoPlay loop muted>
        <source src={assets.video} type='video/mp4' />
      </video>
    );
  } 
  // Render background image based on heroCount
  else if (heroCount >= 0 && heroCount < assets.images.length) {
    return <img src={assets.images[heroCount]} className='background fade-in' alt='' />;
  } 
  // Handle the default case
  else {
    return null;
  }
};

export default Background;
