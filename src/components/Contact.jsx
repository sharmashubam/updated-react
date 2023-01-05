import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState(false)
    const formHandler = () => {
        setForm(true)
    }
    return (
        <div id="contact" className='w-[85%] p-4 mx-auto mt-16'>
            {!form ?

                <>
                    <h1 className='text-4xl font-bold border-b-4 border-teal-600 py-6 mb-4 xl:w-fit '>CONTACT ME</h1>
                    <p className=' hidden md:block  xl:px-12 font-semibold text-xl'>YOU CAN CONTACT ME THROUGH MY SOCIALS OR JUST SEND ME A MESSAGE</p>
                    <div class="container my-12 xl:my-24 md:px-6 mx-auto">
                        <section class="mb-32 text-center text-gray-800">
                            <div class=" xl:w-[70%] w-full mx-auto px-3 lg:px-6">
                                <form action="mailto:www.shubam39992355@gmail.com">
                                    <div class="form-group mb-6">
                                        <input type="text" class="form-control block
            w-full px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none xl:py-4" id="exampleInput7"
                                            placeholder="Name" />
                                    </div>
                                    <div class="form-group mb-6">
                                        <input type="email" class="form-control block xl:py-4
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                            placeholder="Email address" />
                                    </div>
                                    <div class="form-group mb-6">
                                        <textarea class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                                    </div>
                                    <div class="form-group form-check text-center mb-6">
                                        <input type="checkbox"
                                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-teal-600 checked:teal-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                            id="exampleCheck87" />
                                        <label class="form-check-label inline-block text-white font-bold" for="exampleCheck87">Send me a copy of this
                                            message</label>
                                    </div>
                                    <button onClick={formHandler} type="submit" class=" xl:px-4 xl:py-2 xl:text-xl font-bold
          px-6
          py-2.5
          bg-teal-600
          text-white
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-teal-800 hover:shadow-lg
          focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0
          transition
          duration-150
          ease-in-out">MESSAGE</button>
                                </form>
                            </div>
                        </section>

                    </div></>


                :
                <><div className='h-[200px]'>
                    <div className="bg-green-100 rounded-md p-3 flex">
                        <svg
                            class="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M0 0h24v24H0z" stroke="none" />
                            <circle cx="12" cy="12" r="9" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>

                        <div className="text-green-700">
                            <div class="font-bold text-2xl">Your message has been sent!</div>

                            <div className='text-xl'>Thanks fo reaching me!</div>
                        </div>
                    </div>
                </div></>}


        </div>
    )
}

export default Contact