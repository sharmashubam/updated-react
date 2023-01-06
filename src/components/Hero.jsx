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
        <div id='top' className='text-white'>
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
                    <a href='https://twitter.com/sharma_shubamm'>
                        <BsTwitter size={25} className="hover:fill-teal-500 cursor-pointer" />
                    </a>
                    <a href="mailto: shubam39992355@gmail.com">
                        <SiGmail size={25} className="hover:fill-teal-500 cursor-pointer" />
                    </a>
                    <a href='https://github.com/sharmashubam'>
                        <AiFillGithub size={25} className="hover:fill-teal-500 cursor-pointer" />
                    </a>
                    <a href='https://www.linkedin.com/in/shubam-sharma-391769231/'>
                        <BsLinkedin size={25} className="hover:fill-teal-500 cursor-pointer" />
                    </a>
                </div>
            </div>


            {/*  */}

            <div className='fixed flex-col top-[35%] left-0 hidden md:flex'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center'>
                        <a className='flex justify-between items-center w-full font-bold text-md ml-[-100px] hover:ml-[0px] px-4 hover:text-black p-3 bg-blue-500 transition-all ease-in-out duration-500'
                         href='https://twitter.com/sharma_shubamm'>
                            Twitter <BsTwitter size={30} className="hover:fill-black" />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center'>
                        <a className='flex justify-between items-center w-full font-bold text-md ml-[-100px] hover:ml-[0px] px-4 hover:text-black p-3 bg-blue-500 transition-all ease-in-out duration-500'
                         href='https://github.com/sharmashubam'>
                            Github <AiFillGithub size={30} className="hover:fill-black" />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center'>
                        <a className='flex justify-between items-center w-full font-bold text-md ml-[-100px] hover:ml-[0px] px-4 hover:text-black p-3 bg-blue-500 transition-all ease-in-out duration-500'
                         href='mailto: shubam39992355@gmail.com'>
                            E-Mail <SiGmail size={30} className="hover:fill-black" />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Hero


