import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";

const Work = () => {
    return (
        <div id="work" className='h-fit w-full text-white  bg-[#1a1a1a]'>
            <div className='w-[85%] p-4 mx-auto'>
                <h1 className='text-4xl font-bold border-b-4 border-teal-600 py-6 mb-4 xl:w-fit '>PROJECTS</h1>
            </div>
            <div className='w-[85%] flex flex-col gap-12  mx-auto '>
                {/* first */}
                <div className=' flex flex-col xl:flex-row justify-between p-4'>
                    <div className='xl:w-[50%] xl:h-[500px] h-[300px]  overflow-hidden'>
                        <div className='w-full h-full relative'>
                            <img className='w-full h-full object-cover hover:scale-110 hover:brightness-75 transition duration-300 ease-in-out' src='https://as2.ftcdn.net/v2/jpg/05/25/11/11/1000_F_525111169_c16k6AGCVLgdwwNKl6kkvsKzVNaOTCaM.jpg' />
                        </div>

                    </div>
                    <div className='md:border-none my-2 xl:my-0 rounded-md shadow-2xl xl:w-[50%]'>
                        <div className='w-full h-full justify-center text-black items-center flex flex-col'>
                            <div className='text-center  w-[90%] xl:w-[80%] text-white my-4'>
                                <p className='text-3xl font-bold w-fit border-b-4 border-teal-500 xl:mx-auto my-4 ml-2'>GETMOVIES</p>
                                <p className='font-bold tborderext-lg'>AN ONLINE WEBSITE THAT HOLDS MOVIES AND TV SHOWS INFORMATION. WE CAN SEARCH FOR THE WOVIES AND CAN READ ABOUT THE DETAILS AND ALSO WATCH THE TRAILER OR CLIP</p>
                            </div>
                            <div className='w-[80%] '>
                                <p className='text-2xl font-bold text-white border-b-2 w-fit border-teal-500'>Techstacks</p>
                                <div className='my-4 '>
                                    <ul className='grid grid-rows xl:flex gap-2 text-white '>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>HTML</li>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>TAILWIND CSS</li>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>JAVASCRIPT</li>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>REACTJS</li>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>TMBD API</li>

                                    </ul>
                                </div>
                            </div>
                            <div className='flex xl:mt-12 mb-6 gap-4'>
                                <div className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                    <FaRegEyeSlash className='hover:fill-teal-600' size={30} />
                                    <span>Live Demo</span>
                                </div>
                                <a href='https://github.com/sharmashubam/tmbd-api-movie/tree/master' className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                    <AiFillGithub className='hover:fill-teal-600' size={30} />
                                    <span >Github Repo</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                {/* second */}
                <div className=' flex flex-col xl:flex-row-reverse justify-between p-4'>
                    <div className='xl:w-[50%] xl:h-[500px] h-[300px]  overflow-hidden'>
                        <div className='w-full h-full relative'>
                            <img className='w-full h-full object-cover hover:scale-110 hover:brightness-75 transition duration-300 ease-in-out' src='https://as2.ftcdn.net/v2/jpg/05/25/11/11/1000_F_525111169_c16k6AGCVLgdwwNKl6kkvsKzVNaOTCaM.jpg' />
                        </div>

                    </div>
                    <div className='md:border-none my-2 xl:my-0 rounded-md shadow-2xl xl:w-[50%]'>
                        <div className='w-full h-full justify-center text-black items-center flex flex-col'>
                            <div className='text-center  w-[90%] xl:w-[80%] text-white my-4'>
                                <p className='text-3xl font-bold w-fit border-b-4 border-teal-500 xl:mx-auto my-4 ml-2'>cryptoSearch</p>
                                <p className='font-bold tborderext-lg'>WEBSITE THAT GIVES THE INFORMATION ABOUT THE CRYPTO CURRENCY AND SOME TRENDING CRYPTO CURRENCIES</p>
                            </div>
                            <div className='w-[80%] '>
                                <p className='text-2xl font-bold text-white border-b-2 w-fit border-teal-500'>Techstacks</p>
                                <div className='my-4 '>
                                    <ul className='grid grid-rows xl:flex gap-2 text-white '>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b]'>HTML</li>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b]'>TAILWIND CSS</li>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>JAVASCRIPT</li>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>REACTJS</li>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>CSS3</li>

                                    </ul>
                                </div>
                            </div>
                            <div className='flex xl:mt-12 mb-6 gap-4'>
                                <div className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                    <FaRegEyeSlash className='hover:fill-teal-600' size={30} />
                                    <span>Live Demo</span>
                                </div>
                                <a href='https://github.com/sharmashubam/crypto-search/tree/master' className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                    <AiFillGithub className='hover:fill-teal-600' size={30} />
                                    <span >Github Repo</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                {/* third */}

                <div className=' flex flex-col xl:flex-row justify-between p-4'>
                    <div className='xl:w-[50%] xl:h-[500px] h-[300px]  overflow-hidden'>
                        <div className='w-full h-full relative'>
                            <img className='w-full h-full object-cover hover:scale-110 hover:brightness-75 transition duration-300 ease-in-out' src='https://as2.ftcdn.net/v2/jpg/05/25/11/11/1000_F_525111169_c16k6AGCVLgdwwNKl6kkvsKzVNaOTCaM.jpg' />
                        </div>

                    </div>
                    <div className='md:border-none my-2 xl:my-0 rounded-md shadow-2xl xl:w-[50%]'>
                        <div className='w-full h-full justify-center text-black items-center flex flex-col'>
                            <div className='text-center  w-[90%] xl:w-[80%] text-white my-4'>
                                <p className='text-3xl font-bold w-fit border-b-4 border-teal-500 xl:mx-auto my-4 ml-2'>GET WEATHER</p>
                                <p className='font-bold tborderext-lg'>AN ONLINE WEBSITE THAT GIVES THE INFORMATION OG THE WEATHER</p>
                            </div>
                            <div className='w-[80%] '>
                                <p className='text-2xl font-bold text-white border-b-2 w-fit border-teal-500'>Techstacks</p>
                                <div className='my-4 '>
                                    <ul className='grid grid-rows xl:flex gap-2 text-white '>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>HTML</li>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>TAILWIND CSS</li>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>JAVASCRIPT</li>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>REACTJS</li>
                                        <li className='py-1 text-center px-2 font-bold border bg-[#2d2b2b] '>OPENWEATHER API</li>

                                    </ul>
                                </div>
                            </div>
                            <div className='flex xl:mt-12 mb-6 gap-4'>
                                <div className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                    <FaRegEyeSlash className='hover:fill-teal-600' size={30} />
                                    <span>Live Demo</span>
                                </div>
                                <a href='https://github.com/sharmashubam/weather-react' className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                    <AiFillGithub className='hover:fill-teal-600' size={30} />
                                    <span >Github Repo</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Work