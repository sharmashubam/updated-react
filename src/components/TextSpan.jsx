import React, { useState } from 'react'
import {motion,useAnimationControls} from 'framer-motion'

const TextSpan = ({children}) => {
    const controls= useAnimationControls(); 
    const[isPlaying,setisPlaying]= useState(false)
    const rubberBand=()=>{
        controls.start({
            transform:[
                "scale3d(1,1,1)",
                "scale3d(1.4,0.55,1)",
                "scale3d(.75,.25,1)",
                "scale3d(1.25,0.85,1)",
                "scale3d(.9,1.05,1)",
                "scale3d(1,1,1)",
            ],
            transition:{
                times:[0,.4,.6,.7,.8,.9 ]
            }
        })
            setisPlaying(true)   
    }
   
  return (
    <motion.span
    animate={controls}
    onMouseOver={()=>{
        
        if(!isPlaying){
            rubberBand()
        }
        }}  onAnimationComplete={()=>{setisPlaying(false)}}>
        {children}
    </motion.span>
  )
}

export default TextSpan