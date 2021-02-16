import React from 'react';
import { Slide } from 'react-slideshow-image';
import image from '../images/playa.jpg'

const slideImages = [
    image,
    '../images/playa.jpg',
    '../images/playa.jpg',
    '../images/playa.jpg'
  ];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
}

const Slideshow = () => (
    <Slide {...properties} className="slide-container">
    <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
        </div>
    </div>
    <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
        </div>
    </div>
    <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
        </div>
    </div>
  </Slide>
)

export default Slideshow