import React from 'react';
import { motion } from "framer-motion";
import { FadeRight } from "../../../utils/animation";

export default function FadeText() {
  return (
    <>
    <motion.h1
    variants={FadeRight(1)}
    initial="hidden"
    animate="visible"
    className="text-5xl lg:text-6xl font-bold leading-realxed xl:leading-loose text-sky-50"
    >
    WatchTime

    </motion.h1>
    </>
    );
  };
