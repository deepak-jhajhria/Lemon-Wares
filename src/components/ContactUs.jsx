import React from 'react'
import { HeaderLeftSvg, HeaderRight2Svg, HeaderRightFirstSvg, WhatsappIcon } from './Icons'

const ContactUs = () => {
  return (
    <div className='container max-w-[1252px]  relative w-full px-10 xl:px-0'>
      <div className='w-full flex flex-col bg-[#F7FAFE] rounded-2xl justify-center items-center p-10 sm:p-12 md:p-16 lg:p-20'>
        <h2 className=' font-Poppins text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold !leading-[88px] text-center max-w-[1024px]'>We re here to make your website awesome.</h2>
        <button className='py-3 px-4 bg-[#B00000] rounded-lg gap-2 text-white text-sm font-Poppins font-normal leading-6 flex items-center mt-10 mb-2'><span><WhatsappIcon /></span>Get  in touch with us</button>
        <span className=' absolute left-4 xl:left-0 bottom-[20%] xl:-translate-x-4'><HeaderLeftSvg /></span>
        <span className=' absolute right-2 xl:right-0 bottom-[10%] xl:translate-x-6'><HeaderRight2Svg /></span>
        <span className=' absolute left-[40%] top-0 -translate-x-4'><HeaderRightFirstSvg /></span>
      </div>
    </div>
  )
}

export default ContactUs
