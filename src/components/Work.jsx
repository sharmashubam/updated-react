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



                <div class="h-fit w-full">
                    <div class="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                        <div class="group relative mx-auto  h-[480px] w-[330px] overflow-hidden rounded-sm">
                            <img class="object-cover h-full w-full transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-125" src="movie.png" />
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/90"></div>
                            <div class="absolute inset-0 flex flex-col px-12 gap-4 items-center justify-center translate-y-[63%] transit ease-linear duration-300 group-hover:translate-y-0">
                                <h1 class="text-3xl font-bold text-white border-b-4 border-teal-500">GETMOVIES</h1>
                                <p class="text-white text-center font-bold text-sm ">THIS IS A ONLINE WEBSITE THAT GIVES DETAILS ABOUT THE MOVIES AND SHOWS THE TRAILER OR CLIPS OF THE MOVIE.</p>
                                <div class="flex flex-row gap-4">
                                    <a href='https://get-movies-shubam.netlify.app/' className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                        <FaRegEyeSlash className='hover:fill-teal-600' size={30} />
                                        <div>Live</div>
                                    </a>
                                    <a href='https://github.com/sharmashubam/tmbd-api-movie/tree/master' className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                        <AiFillGithub className='hover:fill-teal-600' size={30} />
                                        <span >Github</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="group relative mx-auto h-[480px] w-[330px] overflow-hidden rounded-sm">
                            <img class="object-cover h-full w-full transition-all duration-300 ease-in-out group-hover:scale-125" src="cryptosearch.png" />
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/90"></div>
                            <div class="absolute inset-0 flex flex-col px-12 gap-4 items-center justify-center translate-y-[62%] transit ease-linear duration-300 group-hover:translate-y-0">
                                <h1 class="text-3xl font-bold text-white border-b-4 border-teal-500">cryptoSearch</h1>
                                <p class="text-white text-center font-bold text-sm ">WEBSITE THAT GIVES THE INFORMATION ABOUT THE CRYPTO CURRENCY AND SOME TRENDING CRYPTO CURRENCIES.</p>
                                <div class="flex flex-row gap-4">
                                    <a href='https://crypto-search-shubam.netlify.app/' className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                        <FaRegEyeSlash className='hover:fill-teal-600' size={30} />
                                        <div>Live</div>
                                    </a>
                                    <a href='https://github.com/sharmashubam/crypto-search/tree/master' className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                        <AiFillGithub className='hover:fill-teal-600' size={30} />
                                        <span >Github</span>
                                    </a>
                                </div>
                            </div>

                        </div>


                        <div class="group relative mx-auto h-[480px] w-[330px] overflow-hidden rounded-sm">
                            <img class="object-cover h-full w-full transition-all duration-300 ease-in-out group-hover:scale-125" src="weather.png" />
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/90"></div>
                            <div class="absolute inset-0 flex flex-col px-12 gap-4 items-center justify-center translate-y-[60%] transit ease-linear duration-300 group-hover:translate-y-0">
                                <h1 class="text-3xl font-bold text-white border-b-4 border-teal-500">WEATHER</h1>
                                <p class="text-white text-center font-bold text-sm ">WEBSITE THAT ALLOWS TO FIND THE WEATHER OF A PARTICULAR PLACE</p>
                                <div class="flex flex-row gap-4">
                                    <a href='https://get-weather-shubam.netlify.app/' className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                        <FaRegEyeSlash className='hover:fill-teal-600' size={30} />
                                        <div>Live</div>
                                    </a>
                                    <a href='https://github.com/sharmashubam/weather-react' className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                        <AiFillGithub className='hover:fill-teal-600' size={30} />
                                        <span >Github</span>
                                    </a>
                                </div>
                            </div>

                        </div>



                        <div class="group relative mx-auto h-[480px] w-[330px] overflow-hidden rounded-sm">
                            <img class="object-cover h-full w-full transition-all duration-300 ease-in-out group-hover:scale-125" src="wordle.jpg" />
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/90"></div>
                            <div class="absolute inset-0 flex flex-col px-12 gap-4 items-center justify-center translate-y-[57%] transit ease-linear duration-300 group-hover:translate-y-0">
                                <h1 class="text-3xl font-bold text-white border-b-4 border-teal-500">WORDLE</h1>
                                <p class="text-white text-center font-bold text-sm ">IT IS AN ONLINE GAME IN WHICH WE TO FIND CORRECT WORD.</p>
                                <div class="flex flex-row gap-4">
                                    <a href='https://wordle-shubam.netlify.app/' className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                        <FaRegEyeSlash className='hover:fill-teal-600' size={30} />
                                        <div>Live</div>
                                    </a>
                                    <a href='https://github.com/sharmashubam/wordle-react-algorithm' className='flex flex-col justify-center items-center border-b-2 border-teal-500 cursor-pointer px-4 my-2 font-bold text-white hover:text-teal-600'>
                                        <AiFillGithub className='hover:fill-teal-600' size={30} />
                                        <span >Github</span>
                                    </a>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Work