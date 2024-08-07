import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <div className="relative h-full w-full bg-[#151e1c]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(32,45,42,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(32,45,42,0.18)_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
    </div>
  );
};

export default Background;
