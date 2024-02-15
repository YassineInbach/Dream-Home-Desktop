import React from 'react'

function Loading() {
  return (
    <div className='font-poppins'>
        <div className='flex items-center justify-center flex-col gap-y-3 h-[100vh] bg-black'>
            <div className='w-[40px] h-[40px] border-[5px] border-solid border-white border-b-transparent rounded-[50%] box-border animate-rotation'></div>
        <span className='text-lg text-white font-bold tracking-widest animate-opacity '>Loading ...</span>
        </div>
    </div>
  )
}

export default Loading