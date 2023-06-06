import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from '../../../assets/slider/1.jpg'
import slider2 from '../../../assets/slider/2.jpg'
import './Slider.css'
const Slider = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} interval={10000}>
        <div className='relative'>
          <img src={slider1} />
          <div className='absolute top-28 lg:mx-20 lg:p-5 bg-white/[60%]'>
            <h1 className='text-3xl'>WELCOME TO 
            Summer Camp Fashion Design School</h1>
          </div>
        </div>
        <div>
          <img src={slider2} />

        </div>
      </Carousel>
    </div>
  )
}

export default Slider