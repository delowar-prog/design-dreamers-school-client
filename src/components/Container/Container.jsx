import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm-px-5 px-3'>
        {children}
    </div>
  )
}

export default Container