import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import Button from './button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        controls.start({
          backgroundColor: 'rgba(21, 30, 28, 0.8)',
          backdropFilter: 'blur(10px)',
          transition: { duration: 0.3 }
        });
      } else {
        setIsScrolled(false);
        controls.start({
          backgroundColor: 'rgba(21, 30, 28, 0)',
          backdropFilter: 'blur(0px)',
          transition: { duration: 0.3 }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ backgroundColor: 'rgba(21, 30, 28, 0)', backdropFilter: 'blur(0px)' }}
      animate={controls}
    >
      <div className="m-8 flex items-center justify-between">
        <div className="flex items-center justify-center gap-5 text-2xl text-copy-light">
          <a href="https://www.linkedin.com/in/safwan-hasan-610803282/" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/SafwanHasan120" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/safwan._.hasan/" className="hover:text-pink-500" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <div>
          <Button>My Resume</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
