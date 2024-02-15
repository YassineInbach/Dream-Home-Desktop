import React, { useId } from 'react'
import { useSpring , animated } from 'react-spring';
function Cards({ card }) {
    var id = useId();
    console.log("From id : ", id);
    const cardsProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 500    });
    return (
        <div>
            <div className=' relative bottom-7 flex items-center justify-center space-x-6 '>
                {
                    card.map((value , id) => (
                        <animated.div style = {cardsProps} key={id} className='flex items-center justify-center flex-col bg-white shadow-sm shadow-black w-[200px] h-[139px] rounded-sm' >
                            <img className='bg-cover w-[45px] h-[45px]' src={value.img} alt="" />
                            <h2 className='text-blue font-poppins font-medium tracking-wide py-1'>{value.title}</h2>
                            <span className='bg-blue w-[50px] h-[2px] inline-block'></span>
                        </animated.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards