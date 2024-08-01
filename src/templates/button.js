import React from 'react';

const Button = ({ children }) => {
    return (
      <button
        className="group relative px-4 py-2 font-main font-semibold text-copy transition-colors duration-[400ms] hover:text-copy-light"
      >
        <span>{children}</span>
  
        {/* TOP */}
        <span className="absolute left-0 top-0 h-[2px] w-0 bg-copy-lighter transition-all duration-100 group-hover:w-full" />
  
        {/* RIGHT */}
        <span className="absolute right-0 top-0 h-0 w-[2px] bg-copy-lighter transition-all delay-100 duration-100 group-hover:h-full" />
  
        {/* BOTTOM */}
        <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-copy-lighter transition-all delay-200 duration-100 group-hover:w-full" />
  
        {/* LEFT */}
        <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-copy-lighter transition-all delay-300 duration-100 group-hover:h-full" />
      </button>
    );
  };

export default Button;
