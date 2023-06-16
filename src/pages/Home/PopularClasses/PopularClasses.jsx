import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import ContainerLayout from '../../../components/Container/ContainerLayout'
import './PopularClasses.css'
import { useEffect, useState } from 'react'
import PopularSingleClass from './PopularSingleClass'

const PopularClasses = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    fetch('https://summer-camp-fashion-design-server.vercel.app/classes/topsix')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0){
          setClasses(data);
        }
      })
  }, [])
  return (
    <ContainerLayout>
      <div>
        <SectionTitle heading={'Our Popular Calsses'} subHeading={'See details about our popular classes'}></SectionTitle>
        <div className='my-10 grid lg:grid-cols-3 gap-2'>
          {
            classes.map(classItem => <PopularSingleClass key={classItem._id} classItem={classItem}></PopularSingleClass>)
          }
        </div>
      </div>
    </ContainerLayout>
  )
}

export default PopularClasses