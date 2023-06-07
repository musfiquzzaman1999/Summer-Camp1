import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SliderSection = () => {
  const legendStyle = {
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
      transitionTime={500}
    >
      <div>
        <img src="https://img.freepik.com/free-photo/painting-jungle-scene-with-green-plant-green-leafy-plant_1340-31601.jpg?w=996&t=st=1686128708~exp=1686129308~hmac=3e0e413322f6b02e24dcb457fc19769c32f789dc8b8d6deeb98cc8553d4c0fe5" alt="Slider Image 1" />
        <div style={legendStyle}>
          <h2>Slider 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/painting-jungle-scene-with-green-plant-green-leafy-plant_1340-31601.jpg?w=996&t=st=1686128708~exp=1686129308~hmac=3e0e413322f6b02e24dcb457fc19769c32f789dc8b8d6deeb98cc8553d4c0fe5" alt="Slider Image 2" />
        <div style={legendStyle}>
          <h2>Slider 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/painting-jungle-scene-with-green-plant-green-leafy-plant_1340-31601.jpg?w=996&t=st=1686128708~exp=1686129308~hmac=3e0e413322f6b02e24dcb457fc19769c32f789dc8b8d6deeb98cc8553d4c0fe5" alt="Slider Image 3" />
        <div style={legendStyle}>
          <h2>Slider 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </Carousel>
  );
};

export default SliderSection;
