import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from '../../../assets/slider/1.jpg'
import slider2 from '../../../assets/slider/2.jpg'
const Slider = () => {
  return (
    <div>
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={10000}>
                <div>
                    <img src={slider1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slider2} />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Slider