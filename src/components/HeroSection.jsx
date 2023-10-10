import React from 'react';
import PFP from '../images/image1.png/';
import Button from '../components/button.jsx';
import ScrollD from '../images/scrolld.svg';
import Resume from '../images/zaid-resume-ui-dev.pdf';

function HeroSection() {
  return (
    <div>
      <div className='text-[#fff] lg:flex lg:items-center m:p-4 lg:p-[110px] lg:py-24 space-x-6 space-y-6'>

        <div className='w-full flex lg:block flex-col items-center text-center lg:text-left lg:pr-16 m:pt-4 pt-24 pb-8 transition-all duration-500 ease-in-out transform hover:scale-105'>
          <h3 className='text-sm m:text-[12px] lg:text-base lg:px-0 2xl:pb-4 '>
            Hi there, I'm
          </h3>
          <h1 className='2xl:text-[76px] m:text-center lg:text-start pt-4 text-[64px] leading-[60px] font-semibold'>
            Zaid Hussain
          </h1>
          <h3 className='h-full object-contain w-auto m:text-center lg:text-start pt-4 m:text-[16px] text-[20px]'>
            A <span className='font-semibold'>UI/UX Designer & Frontend Web Developer</span> passionate about creating interactive applications and experiences on the web.
          </h3>
          <a href={Resume} download="zaid-resume-ui-dev.pdf">
            <Button />
          </a>
        </div>

        <div className='m:pr-4 items-center m:block flex justify-center transition-all duration-500 ease-in-out transform hover:scale-105'>
          <img src={PFP} alt="" className='w-auto lg:w-fit h-auto' />
        </div>

      </div>
      <div className='m:pt-16 pt-2 pb-12 justify-center flex transition-all duration-500 ease-in-out transform hover:scale-105'>
        <img src={ScrollD} alt="" />
      </div>
    </div>
  )
}

export default HeroSection;
