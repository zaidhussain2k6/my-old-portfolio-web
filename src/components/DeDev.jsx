import React from 'react'
import Tools from '../images/tools.png'

function DeDev() {
  return (
   
    <div className='md:inline-flex lg:items-center lg:px-28 m:px-6 m:py-12 space-y-0 m:space-y-24 items-center justify-center lg:flex'>  
        <div className='flex-1 space-y-4 w-full flex lg:block flex-col items-center text-center lg:text-left lg:py-24'>
            <h1 className='font-semibold text-5xl leading-[66px]'>Design and <br /> Development Tools</h1>
            <p className='opacity-80 lg:w-[500px] text-[16px]'>In my journey as a designer and developer, I've mastered a diverse array of tools that amplify my creative and technical capabilities. From industry-standard software like Adobe Creative Suite for design to versatile code editors like Visual Studio Code for development. These tools are the backbone of my creative process, enabling me to craft visually appealing and functionally robust solutions for every project.</p>
            <div className='lg:w-[200px] w-[120px] h-[4px] bg-slate-800'></div>
        </div>
       <div className='items-center justify-center flex lg:pb-10'>
  <img src={Tools} alt="" className='lg:w-auto m:w-[320px] max-w-[550px]' />
  </div>
</div>


    
  )
}

export default DeDev