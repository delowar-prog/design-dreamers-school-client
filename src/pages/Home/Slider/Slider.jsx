import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from '../../../assets/slider/1.jpg'
import slider2 from '../../../assets/slider/2.jpg'
import slider3 from '../../../assets/slider/3.jpg'
import slider4 from '../../../assets/slider/4.jpg'
import './Slider.css'
import { Fade, Slide } from "react-awesome-reveal";
const Slider = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} interval={3000}>
        <div className='relative'>
          <img src={slider1} />

          <div className='absolute top-5 md:top-28 mx-5 lg:mx-20 lg:p-5 bg-white/[60%] text-green-500'>
            <Fade delay={1e3} cascade damping={1e-1}>
              <h1 className='text-xl md:text-4xl'>WELCOME TO
                <span className='text-pink-500 slider-text'> Summer Camp Fashion Design School</span></h1>
              <h2 className='text-lg md:text-2xl my-1 md:my-5'>Grate Offer: 40% Discounts for all classes in the Summer</h2>
            </Fade>
          </div>

        </div>
        <div>
          <img src={slider2} />
          <div className='absolute top-5 md:top-28 mx-5 lg:mx-20 lg:p-5 bg-white/[60%] text-green-500'>
            <Fade delay={1e3} cascade damping={1e-1}>
              <h1 className='text-xl md:text-4xl'>WELCOME TO
                <span className='text-pink-500 slider-text'> Summer Camp Fashion Design School</span></h1>
              <h2 className='text-lg md:text-2xl my-1 md:my-5'>Grate Offer: 40% Discounts for all classes in the Summer</h2>
            </Fade>
          </div>
        </div>
        <div>
          <img src={slider3} />
          <div className='absolute top-5 md:top-28 mx-5 lg:mx-20 lg:p-5 bg-white/[60%] text-green-500'>
          <Fade delay={1e3} cascade damping={1e-1}>
            <h1 className='text-xl md:text-4xl'>WELCOME TO
              <span className='text-pink-500 slider-text'> Summer Camp Fashion Design School</span></h1>
            <h2 className='text-lg md:text-2xl my-1 md:my-5'>Grate Offer: 40% Discounts for all classes in the Summer</h2>
          </Fade>
        </div>
        </div>
        <div>
          <img src={slider4} />
          <div className='absolute top-5 md:top-28 mx-5 lg:mx-20 lg:p-5 bg-white/[60%] text-green-500'>
            <Fade delay={1e3} cascade damping={1e-1}>
              <h1 className='text-xl md:text-4xl'>WELCOME TO
                <span className='text-pink-500 slider-text'> Summer Camp Fashion Design School</span></h1>
              <h2 className='text-lg md:text-2xl my-1 md:my-5'>Grate Offer: 40% Discounts for all classes in the Summer</h2>
            </Fade>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Slider