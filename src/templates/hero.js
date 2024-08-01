import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { motion, useAnimation, useInView } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <motion.div 
            className="text-8xl font-main text-copy"
            >Safwan Hasan</motion.div>
            <div className="mt-4 text-4xl text-copy">
              I'm a 
              <span className="text-copy-lighter">
                <Typewriter
                  words={[
                    " High School Student.",
                    " Full-stack Developer.",
                    " UX Designer.",
                    " Football Fan.",
                    " Hackathon Winner",
                    " Movie Connoisseur",
                    " Robotics Competitor",
                    " AI/ML Enthusiast",
                    "                    why are you still here LOL"
                  ]}
                  loop={0}
                  cursor
                  cursorStyle={"_"}
                />
              </span>
            </div>
          </div>
        </div>
  );
};

export default Hero;
