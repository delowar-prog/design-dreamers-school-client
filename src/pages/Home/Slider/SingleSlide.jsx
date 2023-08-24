import Zoom from 'react-reveal/Zoom';
const SingleSlide = ({ slider }) => {
    const { title, description, image } = slider
    return (
        <div className='relative'>
            <img src={image} />
            <div className='w-[100%] h-[100%] absolute flex justify-center items-center rounded drop-shadow-3xl top-0 bg-slate-600/[50%]'>
                <Zoom>
                    <div className='w-[75%] p-0 md:p-5'>
                        <h1 className='text-xl md:text-4xl text-pink-500 font-bold'>{title}</h1>
                        <h2 className='text-sm md:text-xl my-1 md:my-5 text-gray-100 p-1 rounded'>{description}</h2>
                        <div>
                            <button className='p-1 hover:bg-sky-500 hover:text-white md:p-3 border md:border-2 border-sky-500 rounded text-sky-500 transition ease-in-out delay-150 text-lg font-bold'>View Courses</button>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default SingleSlide