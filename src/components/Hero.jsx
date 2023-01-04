import React from 'react'
import TextSpan from './TextSpan'
import { IoMdArrowRoundForward } from "react-icons/io";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import ScrollIntoView from 'react-scroll-into-view'


const Hero = () => {
    const s1 = `Hi, I'M SHUBAM`.split('')
    const s2 = `I'M A FRONT END DEVELOPER`.split("")
    const s3 = `HIT ME UP AND LET'S BUILD SOMPETHING SPECIAL`.split("")
    return (
        <div className='text-white'>
            <div className="bg-opacity-50 h-screen border-none bg-no-repeat bg-center" style={{ backgroundImage: `url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701772281.jpg')` }} >
                <div className='w-[70%] md:w-[40%]  mx-auto pt-16'>
                    <ul className='flex justify-center gap-6'>
                    <ScrollIntoView selector="#work">
                        <div className='cursor-pointer'>
                            Projects
                        </div>
                        </ScrollIntoView>
                        <ScrollIntoView selector='#resume'>
                        <div className='cursor-pointer'>
                            Resume
                        </div>
                        </ScrollIntoView>
                        <ScrollIntoView selector='#contact'>
                        <div className='cursor-pointer'>
                            Contact
                        </div>
                        </ScrollIntoView>
                        
                    </ul>
                </div>

                <div className='flex flex-col w-[90%] mx-auto h-fit  text-center px-6 md:mt-32 mt-[54%] md:p-12 pd-2 '>

                    <h1 className='md:text-8xl text-4xl font-semibold '>{s1.map(function (letter, key) {
                        return (
                            < TextSpan key={key} >
                                {letter === ' ' ? "\u00A0" : letter}
                            </TextSpan>
                        )
                    })}</h1>
                    <div className='mt-12'>
                        <h1 className='md:text-2xl text-lg text-gray-200 font-bold'>{s2.map(function (letter, key) {
                            return (
                                < TextSpan key={key} >
                                    {letter === ' ' ? "\u00A0" : letter}
                                </TextSpan>
                            )
                        })}</h1>

                        <h1 className='md:text-2xl text-lg text-gray-200 font-bold'>{s3.map(function (letter, key) {
                            return (
                                < TextSpan key={key} >
                                    {letter === ' ' ? "\u00A0" : letter}
                                </TextSpan>
                            )
                        })}</h1>
                    </div>


                    <ScrollIntoView selector='#contact'>
                    <button className="bg-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 w-fit mx-auto rounded inline-flex gap-2 items-center mt-12">
                        <span>Contact</span>
                        <IoMdArrowRoundForward />
                    </button>
                    </ScrollIntoView>
                    


                </div>

                <div className=' w-full flex justify-center gap-12 mt-32 '>
                    <div>
                        <BsTwitter size={25} className="hover:fill-teal-500 cursor-pointer" />
                    </div>
                    <div>
                        <SiGmail size={25} className="hover:fill-teal-500 cursor-pointer" />
                    </div>
                    <div>
                        <AiFillGithub size={25} className="hover:fill-teal-500 cursor-pointer" />
                    </div>
                    <div>
                        <BsLinkedin size={25} className="hover:fill-teal-500 cursor-pointer" />
                    </div>
                </div>
            </div>


            {/*  */}
            
        </div>
    )
}

export default Hero


