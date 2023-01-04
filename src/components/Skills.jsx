import React from 'react'
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiFirebase ,SiTailwindcss, SiJavascript } from "react-icons/si";
import { FaReact ,FaHtml5,  FaNodeJs, FaCss3 } from "react-icons/fa";

import { ImNpm } from "react-icons/im";


const Skills = () => {
    return (
        <div className='w-[85%] mx-auto p-4 mt-4  rounded shadow-2xl'>
            <h1 className='text-4xl font-bold border-b-4 border-teal-600 xl:py-6 py-2 mb-4 xl:w-fit '>SKILLS</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5'>
                <div className='flex flex-col justify-center xl:gap-6 items-center gap-1 xl:p-4 rounded-md shadow-lg'>
                    <FaHtml5 size={45}/>
                    <p className='font-bold'>HTML5</p>
                </div>
                <div className='flex flex-col justify-center xl:gap-6 items-center gap-1 xl:p-4 rounded-md shadow-lg'>
                    <FaCss3 size={45}/>
                    <p className='font-bold'>CSS3</p>
                </div>
                <div className='flex flex-col justify-center xl:gap-6 items-center gap-1 xl:p-4 rounded-md shadow-lg'>
                    <SiJavascript size={45}/>
                    <p className='font-bold'>JAVASCRIPT</p>
                </div>
                <div className='flex flex-col justify-center xl:gap-6 items-center gap-1 xl:p-4 rounded-md shadow-lg'>
                    <FaReact size={45}/>
                    <p className='font-bold'>REACTJS</p>
                </div>
                <div className='flex flex-col justify-center xl:gap-6 items-center gap-1 xl:p-4 rounded-md shadow-lg'>
                    <FaNodeJs size={45}/>
                    <p className='font-bold'>NODEJS</p>
                </div>
                <div className='flex flex-col justify-center xl:gap-6 items-center gap-1 xl:p-4 rounded-md shadow-lg'>
                    <SiFirebase size={45}/>
                    <p className='font-bold'>FIREBASE</p>
                </div>
                <div className='flex flex-col justify-center xl:gap-6 items-center gap-1 xl:p-4 rounded-md shadow-lg'>
                    <SiTailwindcss size={45}/>
                    <p className='font-bold text-center'>TAILWIND CSS</p>
                </div>
                <div className='flex flex-col justify-center xl:gap-6 items-center gap-1 xl:p-4 rounded-md shadow-lg'>
                    <BsFillBootstrapFill size={45}/>
                    <p className='font-bold'>BOOTSTRAP</p>
                </div>
                <div className='flex flex-col justify-center xl:gap-6 items-center gap-1 xl:p-4 rounded-md shadow-lg'>
                    <ImNpm size={45}/>
                    <p className='font-bold'>NPM</p>
                </div>

                
            </div>
        </div>
    )
}

export default Skills

