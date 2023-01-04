import React from 'react'

const Resume = () => {
    return (
        <div id="resume" className='w-[85%] mx-auto p-4 mt-4 rounded shadow-2xl py-12'>

            <h1 className='text-4xl font-bold border-b-4 border-teal-600 xl:py-6 py-2 mb-4 xl:w-fit '>RESUME</h1>
            <div className='flex flex-col gap-5 justify-center items-center text-center xl:w-[45%] mx-auto'>
                <p className='text-xl pt-4 font-medium'>HI! I'M SHUBAM SHARMA</p>
                <p className='text-xl pb-4 font-medium'>I'M A FRONT END DEVELOPER AND MACHINE LEARNING ENTHUSIAST.I AM CURRENTLY IN THIRD SEMESTER AND PURSUING MY ENGINEERING FROM NATIONAL INSTITUTE OF TECHNOLOGY,SRINAGAR. HERE IS MY RESUME , YOU CAN DOWNLOAD IT. </p>
                
                <button
                    type="button"
                    class="px-4 py-3 mb-6 bg-teal-600 rounded-md text-white outline-none focus:ring-none shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
                >
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>

                    <span class="ml-2">Resume</span>
                </button>
            </div>

        </div>
    )
}

export default Resume