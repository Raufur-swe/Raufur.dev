import React from 'react'
import video_1 from "../assets/vidoe1.mp4"
import video_2 from "../assets/video2.mp4"
const Hero = () => {
    return (
        <div className='flex flex-col  mt-4 items-center '>
            {/* video + heading */}
            <div className=' flex flex-col gap-5   '>
                {/* 1st video + content */}
                <div className=' flex gap-5 items-center  '>
                    <video src={video_1} autoPlay loop muted className=' w-30 lg:w-50 md:w-30 rounded-[50px] ' />
                    <h1 className=' leading-none lg:whitespace-nowrap md:whitespace-nowrap text-5xl  md:text-7xl lg:text-[130px] '>Crafting Stunning</h1>
                </div>
                <div className=' flex gap-5 items-center '>
                    <h1 className='lg:whitespace-nowrap md:whitespace-nowrap  leading-none  text-5xl  md:text-7xl lg:text-[130px] '>Digital Experiences</h1>
                    <video src={video_2} autoPlay loop muted className=' w-30 lg:w-50 md:w-30 rounded-[50px] ' />
                </div>
            </div>
            <div className='text-center mt-10'>
                <p><span className='font-bold text-xl'>Open for</span> new oppertunity</p>
            </div>
            <div className=' max-w-150 flex flex-col gap-3 p-2 text-center sm:text-left mt-4  '>
                <p className='text-xl font-normal '>In a world full of ideas, execution is what truly matters.  I am constantly learning, improving, and pushing myself to create better, faster, and more impactful digital experiences that make a difference</p>
                <div className="flex gap-5 flex-col lg:flex-row md:flex-row">
                    <button className="px-5 py-2 bg-black text-white rounded-2xl transition-all duration-300 ease-out hover:bg-white hover:text-black hover:border hover:border-black hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
                        Download CV
                    </button>

                    <button className="px-5 py-2 border border-black bg-white/50 text-black rounded-2xl transition-all duration-300 ease-out hover:bg-black hover:text-white hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
                        About me
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Hero