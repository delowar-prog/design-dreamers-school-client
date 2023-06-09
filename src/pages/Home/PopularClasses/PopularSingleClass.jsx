import { Link } from 'react-router-dom'
import { BsPersonPlusFill } from "react-icons/bs";

const PopularSingleClass = ({classItem}) => {
    return (
        <div className='relative popular-classes-item'>
            <img src={classItem.image}></img>
            <div className='flex justify-between text-white items-center gap-3 absolute bottom-0 p-2 w-[100%] bg-gray-900/[80%]'>
                <h3 className='text-xl w-[full]'>{classItem.name}</h3>
                <h4 className='text-center w-[full]'>Students : {classItem.available_seats}</h4>
            </div>
        </div>
    )
}

export default PopularSingleClass