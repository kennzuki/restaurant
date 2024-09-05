import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 mt-[45px]'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            The <span className='text-orange-500'>Best</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            {' '}
            <span className='text-orange-500'>Foodys</span> Delivered
          </h1>
        </div>
        <Image
          src='/burger.svg'
          alt='pexels-daniel-reche-718241-3616956'
          layout='fill'
                  objectFit='cover'
                
        />
      </div>
    </div>
  );
};

export default Hero;
