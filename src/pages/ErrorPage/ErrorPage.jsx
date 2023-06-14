import { Link } from 'react-router-dom'
import ErrorImg from '../../assets/error.jpg'
const ErrorPage = () => {
    return (
        <div className='py-5'>
            <div className='w-50 mx-auto bg-white flex flex-col justify-center items-center p-5 rounded text-center'>
               <img src={ErrorImg}></img>
                <button className='btn btn-primary'><Link to="/" className='fs-5 text-white text-decoration-none'>Back to home page</Link></button>
            </div>

        </div>
    )
}

export default ErrorPage