import React from 'react';
import { motion } from "framer-motion";
import { FadeRight } from "../../../utils/animation";

export default function FadeText() {
  return (
    <>
    <div className="fade min-h-[54.8vh]">
      
    <motion.h1
    variants={FadeRight(1)}
    initial="hidden"
    animate="visible"
    className="!mt-[150px] !text-9xl lg:text-9xl !font-bold leading-realxed xl:leading-loose text-white hover:scale-110 duration-400 w-fit !mx-auto">
    WatchTime
    </motion.h1>
    


    <motion.h1
    variants={FadeRight(1.5)}
    initial="hidden"
    animate="visible"
    className="!mt-[-20px] !text-4xl !font-bold leading-realxed xl:leading-loose text-white hover:scale-110 duration-400 w-fit !mx-auto">
    
    Your Time. Your style. Your WatchTime.

    </motion.h1>
    </div>
    </>
    );
  };
