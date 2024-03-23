import React from 'react';
import './Hero.css';
import { assets } from '../../assets/assets';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={assets.images[3]} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          {/* Conditional rendering based on playStatus */}
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus ? assets.images[4] : assets.images[5]} alt="" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
