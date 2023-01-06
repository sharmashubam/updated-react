import React from 'react'
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiFirebase, SiTailwindcss, SiJavascript } from "react-icons/si";
import { FaReact, FaHtml5, FaNodeJs, FaCss3 } from "react-icons/fa";

import { ImNpm } from "react-icons/im";


const Skills = () => {
    return (
        <div className='w-[85%] mx-auto p-4 mt-4 py-12 rounded'>
            <h1 className='text-4xl font-bold border-b-4 border-teal-600 xl:py-6 py-2 mb-4 xl:w-fit '>SKILLS</h1>
            <p className='text-lg font-light p-4'>Here are some of the technologies i have worked with.</p>
            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8 mt-8'>
                <div className='flex flex-col justify-center xl:gap-8 xl:py-6 items-center gap-6 xl:p-4 rounded-md '>
                    <img className='w-20 mx-auto' src='html.png' />
                    <p className='font-bold'>HTML5</p>
                </div>

                <div className='flex flex-col justify-center xl:gap-8 xl:py-6 items-center gap-6 xl:p-4 rounded-md '>
                    <img className='w-20 mx-auto' src='react.png' />
                    <p className='font-bold'>REACTJS</p>
                </div>
                <div className='flex flex-col justify-center xl:gap-8 xl:py-6 items-center gap-6 xl:p-4 rounded-md '>
                    <img className='w-20 mx-auto' src='node.png' />
                    <p className='font-bold'>NODEJS</p>
                </div>

                <div className='flex flex-col justify-center xl:gap-8 xl:py-6 items-center gap-6 xl:p-4 rounded-md '>
                    <img className='w-20 mx-auto' src='tailwind.png' />
                    <p className='font-bold'>TAILWIND CSS</p>
                </div>

                <div className='flex flex-col justify-center xl:gap-8 xl:py-6 items-center gap-6 xl:p-4 rounded-md '>
                    <img className='w-20 mx-auto' src='github.png' />
                    <p className='font-bold'>GITHUB</p>
                </div>

                <div className='flex flex-col justify-center xl:gap-8 xl:py-6 items-center gap-6 xl:p-4 rounded-md '>
                    <img className='w-20 mx-auto' src='firebase.png' />
                    <p className='font-bold'>FIREBASE</p>
                </div>

                <div className='flex flex-col justify-center xl:gap-8 xl:py-6 items-center gap-6 xl:p-4 rounded-md '>
                    <img className='w-20 mx-auto' src='css.png' />
                    <p className='font-bold'>CSS</p>
                </div>
                <div className='flex flex-col justify-center xl:gap-8 xl:py-6 items-center gap-6 xl:p-4 rounded-md '>
                    <img className='w-20 mx-auto' src='javascript.png' />
                    <p className='font-bold'>JAVASCRIPT</p>
                </div>
                <div className='flex flex-col justify-center xl:gap-8 xl:py-6 items-center gap-6 xl:p-4 rounded-md '>
                    <img className='w-20 mx-auto' src='npm.png' />
                    <p className='font-bold'>NPM</p>
                </div>
                <div className='flex flex-col justify-center xl:gap-8 xl:py-6 items-center gap-6 xl:p-4 rounded-md '>
                    <img className='w-20 mx-auto' src='redux.png' />
                    <p className='font-bold'>REDUX</p>
                </div>

                <div className='flex flex-col justify-center xl:gap-8 xl:py-6 items-center gap-6 xl:p-4 rounded-md '>
                    <img className='w-20 mx-auto' src='python.png' />
                    <p className='font-bold'>PYTHON</p>
                </div>


            </div>
        </div>
    )
}

export default Skills

