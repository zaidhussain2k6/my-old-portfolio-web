import React from 'react'
import UIUX from '../images/services/uiux.png'
import WEB from '../images/services/web.png'
import HTML from '../images/services/html.png'
import CSS from '../images/services/css.png'
import JS from '../images/services/js.png'
import TC from '../images/services/tailwind.png'
import BST from '../images/services/bootstrap.png'
import RJS from '../images/services/react.png'
import VJS from '../images/services/vite.png'
import GITHUB from '../images/services/github.png'



function Services() {
  return (
    <div className='bg-third items-center justify-center py-20'>
      <div className='items-center justify-center space-y-16'>
        <div className=''>
            <p className='text-[14px] text-center'>-MY SKILLS-</p>
            <h1 className='text-[48px] text-center font-semibold'>Services</h1>
        </div>

<div className='space-y-12'>
<div className='items-center justify-center flex'>
        <div className='inline-flex items-center justify-center gap-12 flex-wrap'>
            <div className='Box1 bg-second rounded-[6px] w-[214px] h-[240px] flex flex-col items-center justify-center gap-6'>
              <img src={UIUX} alt="" />
              <h1>UI/UX Design</h1>
            </div>
            <div className='Box1 bg-second rounded-[6px] w-[214px] h-[240px] flex flex-col items-center justify-center gap-6'>
              <img src={WEB} alt="" />
              <h1>Web Design</h1>
            </div>
            <div className='Box1 bg-second rounded-[6px] w-[214px] h-[240px] flex flex-col items-center justify-center gap-6'>
              <img src={HTML} alt="" />
              <h1>HTML</h1>
            </div>
            <div className='Box1 bg-second rounded-[6px] w-[214px] h-[240px] flex flex-col items-center justify-center gap-6'>
              <img src={CSS} alt="" />
              <h1>CSS</h1>
            </div>
            <div className='Box1 bg-second rounded-[6px] w-[214px] h-[240px] flex flex-col items-center justify-center gap-6'>
              <img src={JS} alt="" />
              <h1>JavaScript</h1>
            </div>
            <div className='Box1 bg-second rounded-[6px] w-[214px] h-[240px] flex flex-col items-center justify-center gap-6'>
              <img src={TC} alt="" />
              <h1>Tailwind CSS</h1>
            </div>
            <div className='Box1 bg-second rounded-[6px] w-[214px] h-[240px] flex flex-col items-center justify-center gap-6'>
              <img src={BST} alt="" />
              <h1>Bootstrap</h1>
            </div>
            <div className='Box1 bg-second rounded-[6px] w-[214px] h-[240px] flex flex-col items-center justify-center gap-6'>
              <img src={RJS} alt="" />
              <h1>React JS</h1>
            </div>
            <div className='Box1 bg-second rounded-[6px] w-[214px] h-[240px] flex flex-col items-center justify-center gap-6'>
              <img src={VJS} alt="" />
              <h1>Vite JS</h1>
            </div>
            <div className='Box1 bg-second rounded-[6px] w-[214px] h-[240px] flex flex-col items-center justify-center gap-6'>
              <img src={GITHUB} alt="" />
              <h1>GitHub</h1>
            </div>

        </div>
        </div>


</div>

        </div>
    </div>
  )
}

export default Services