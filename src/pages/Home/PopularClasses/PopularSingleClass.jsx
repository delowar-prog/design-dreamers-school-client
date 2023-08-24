import { Link } from 'react-router-dom'
import { BsPersonPlusFill } from "react-icons/bs";
import { GiOfficeChair } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";
const PopularSingleClass = ({classItem, handleSelectClass}) => {
    return (
        <Fade triggerOnce={true}>
        <div className={`instructor-items min-h-[350px] relative bg-slate-800 rounded-t-xl border-b-2 border-yellow-400 text-white space-y-1 ${classItem.available_seats==0 && 'bg-red-900'}`} >
            <div className='relative truncate'>
                <img src={classItem.image} className='w-full h-48 rounded-t-xl'></img>
            </div>
            <h1 className='text-md text-gray-300 px-3'>{classItem.name.length>20?classItem.name.slice(0,20)+'...':classItem.name}</h1>
            <div className='py-2 px-3'>
                <p className='text-cyan-500'>Instructor: {classItem.instructor_name}</p>
                <p className='texl-sm'><GiOfficeChair className='inline text-lg'></GiOfficeChair>Available Seats : {classItem.available_seats}</p>
            </div>
            <div className='classBtn'>
            <hr/>
            <div className='w-full flex justify-around items-center'>
                <p>Price : ${classItem.price}</p>
                <button onClick={()=>handleSelectClass(classItem)} className={`my-2 px-2 text-white ${(classItem.available_seats==0)?'bg-gray-500 hover:bg-gray-500':'bg-sky-500 rounded hover:bg-sky-600'}`} disabled={classItem?.available_seats==0}>Select Class</button>
            </div>
            </div>
            
        </div>
        </Fade>
    )
}

export default PopularSingleClass