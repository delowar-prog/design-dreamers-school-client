import { useEffect, useState } from 'react'
import ContainerLayout from '../../components/Container/ContainerLayout'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Instructors.css'
import { Helmet } from 'react-helmet-async'
import SingleInstructor from './SingleInstructor'

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('https://summer-camp-fashion-design-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setInstructors(data)
                }
            })
    }, [])
    //load data
    return (
        <div className='pb-20'>
            <Helmet><title>SCFDS || instructors</title></Helmet>
            <SectionTitle heading={'Our Instructors'} subHeading={'Join to justify us'}></SectionTitle>
            <ContainerLayout>
                <div className='grid lg:grid-cols-4 gap-5'>
                 {
                  instructors.map(instructor => <SingleInstructor key={instructor._id} instructor={instructor}></SingleInstructor>)
                 }
                </div>
            </ContainerLayout>
        </div>
    )
}

export default Instructors