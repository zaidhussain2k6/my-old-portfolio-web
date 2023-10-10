import React from 'react'
import Behance from '../images/behance.svg'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import Linkedin from '../images/linkedin.svg'
import ScrollD from '../images/scrolld.svg'

function AboutSec() {
  return (
    <div className='bg-third'>
    <div className='items-center justify-center py-28 space-y-12' >
        <h1 className='text-center font-medium text-[44px]'>About me</h1>
        <h3 className='text-center font-medium text-[18px]'>I'm Zaid Hussain</h3>
        <p className='text-center font-light text-[22px] px-8 lg:px-56 opacity-90'>I have over 1+ years of experience as a UI/UX Designer & Frontend Developer working as a Freelancer. I'm from Pakistan. I design Website & App. I enjoy working with Coding.</p>
        <div className='SocialLogos flex-row justify-center flex space-x-6 items-center'>
            <img src={Behance} alt="Behance-Logo" />
            <img src={Facebook} alt="Instagram-Logo" />
            <img src={Instagram} alt="Facebook-Logo" />
            <img src={Linkedin} alt="Linkedin-Logo" />
        </div>
        <div className='pt-16 justify-center flex'>
          <img src={ScrollD} alt="" />
          </div>
    </div>
    </div>
  )
}

export default AboutSec