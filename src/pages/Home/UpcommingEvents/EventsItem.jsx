const EventsItem = ({ event, i }) => {
    return (
        <div className='flex gap-3 justify-center items-center mb-5'>
            <div className='bg-indigo-500 p-2 w-[30%] text-center'><p className='font-bold text-white border border-2 p-3 border-gray-400'>{event.date}</p></div>
            <div className={`pb-5 ${i===0? 'border-b border-indigo-500':''}`}>
                <h1 className='text-lg md:text-2xl'>{event.event_name}</h1>
                <p className='text-sm md:text-md text-justify'>{event.description}</p>
            </div>
        </div>
    )
}

export default EventsItem