import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import Container from '../../../components/Container/Container'
import classImg from '../../../assets/classes/fashion.jpg'
import { Link } from 'react-router-dom'
import './PopularClasses.css'
const PopularClasses = () => {
  return (
    <Container>
      <div>
        <SectionTitle heading={'Our Popular Calsses'} subHeading={'See details about our popular classes'}></SectionTitle>
        <div className='my-10 grid lg:grid-cols-3 gap-2'>
            <div className='relative popular-classes-item'>
              <img src={classImg}></img>
              <div className='flex justify-between text-white items-center gap-3 absolute bottom-0 p-2 w-[100%] bg-indigo-900/[90%]'>
                 <h3 className='text-xl'>Class Name</h3>
                 <h4>Students: 25</h4>
                 <Link to="/">View</Link>
              </div>
            </div>
            <div>
              <img src={classImg}></img>
            </div>
            <div>
              <img src={classImg}></img>
            </div>
            <div>
              <img src={classImg}></img>
            </div>
            <div>
              <img src={classImg}></img>
            </div>
            <div>
              <img src={classImg}></img>
            </div>
        </div>
      </div>
    </Container>
  )
}

export default PopularClasses