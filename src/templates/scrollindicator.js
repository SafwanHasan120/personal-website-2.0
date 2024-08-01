// ScrollIndicator.js
import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform translate-y--3/4 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-copy-lighter text-xl"
          >
            Scroll Down
            <svg
              className="w-6 h-6 ml-2 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>
  );
};

export default ScrollIndicator;
