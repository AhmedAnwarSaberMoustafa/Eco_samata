import React, { useCallback, useEffect, useState } from 'react'
import { SliderContainer, SliderWrapper } from '../UI/Containers/SliderContainer'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowContainer from '../UI/Containers/ArrowContainer';

import Slide from '../UI/Slider/Slide';
import ImageContainer from '../UI/Containers/ImageContainer';
import InfoContainer from '../UI/Containers/InfoContainer';
import Image from '../UI/Image';

import { slides } from '../data'
import { Link } from 'react-router-dom';
function Slider() {
  const [sliderPosition, setSliderPosition] = useState(0);

  const nextSlide = useCallback(() => {
    setSliderPosition((prev) =>
      prev === -100 * (slides.length - 1) ? 0 : prev - 100
    );
  }, []);

  const prevSlide = useCallback(() => {
    setSliderPosition((prev) =>
      prev === 0 ? -100 * (slides.length - 1) : prev + 100
    );
  }, []);

  const swipeSlide = (direction) => {
    if (direction === 'left') prevSlide();
    if (direction === 'right') nextSlide();
  }

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(sliderInterval);
  }, [nextSlide]);

  return (
    <SliderContainer>
      <ArrowContainer left="10px" onClick={() => swipeSlide('left')}>
        <ArrowBackIosRoundedIcon />
      </ArrowContainer>
      <SliderWrapper sliderPosition={sliderPosition}>
        {
          slides.map(el => (
            <Slide key={el.id} bg={el.bg}>
              <ImageContainer>
                <Image src={el.img_url} alt='slide' />
              </ImageContainer>
              <InfoContainer>
                <h1 className='title'>{el.title}</h1>
                <p className='description'>{el.description}</p>
                <Link className='format' to="/products">
                  <button className='btn' type='button'>SHOW NOW</button>
                </Link>
              </InfoContainer>
            </Slide>
          ))
        }
      </SliderWrapper>
      <ArrowContainer right="10px" onClick={() => swipeSlide('right')}>
        <ArrowForwardIosRoundedIcon />
      </ArrowContainer>
    </SliderContainer>
  )
}

export default Slider