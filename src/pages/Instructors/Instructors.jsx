import { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Instructors.css'
import { Helmet } from 'react-helmet-async'
import SingleInstructor from './SingleInstructor'

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    //load data
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className='bg-pink-600 pb-20'>
            <Helmet><title>SCFDS || instructors</title></Helmet>
            <SectionTitle heading={'Our Instructors'} subHeading={'Join to justify us'}></SectionTitle>
            <Container>
                <div className='grid lg:grid-cols-3 gap-5'>
                    {
                        instructors.map(instructor => <SingleInstructor key={instructor._id} instructor={instructor}></SingleInstructor>)
                    }
                </div>
            </Container>
        </div>

    )
}

export default Instructors