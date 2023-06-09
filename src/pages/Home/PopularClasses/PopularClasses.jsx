import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import Container from '../../../components/Container/Container'
import './PopularClasses.css'
import { useEffect, useState } from 'react'
import PopularSingleClass from './PopularSingleClass'

const PopularClasses = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/classes/topsix')
      .then(res => res.json())
      .then(data => setClasses(data))
  }, [])
  return (
    <Container>
      <div>
        <SectionTitle heading={'Our Popular Calsses'} subHeading={'See details about our popular classes'}></SectionTitle>
        <div className='my-10 grid lg:grid-cols-3 gap-2'>
          {
            classes.map(classItem => <PopularSingleClass key={classItem._id} classItem={classItem}></PopularSingleClass>)
          }
        </div>
      </div>
    </Container>
  )
}

export default PopularClasses