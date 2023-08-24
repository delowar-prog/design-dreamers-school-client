import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.css'
import { useState } from 'react';
import { useEffect } from 'react';
import SingleSlide from './singleSlide';

const Slider = () => {
  const [sliders, setSliders] = useState([])
  useEffect(() => {
    fetch('slider.json')
      .then(res => res.json())
      .then(data => {
        if (data.slides.length > 0) {
          setSliders(data.slides)
        }
      })
  }, [])
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} interval={6000}>
        {
          sliders.map((slider, i) => <SingleSlide key={i} slider={slider}></SingleSlide>)
        }
      </Carousel>
    </div>
  )
}

export default Slider