"use client";
import React, { useState } from 'react'

const Packages = () => {
  const [first, setfirst] = useState()
  return (
    <div className='container max-w-[1120px] flex flex-col'>
      <div className='flex flex-col max-w-[856px] mx-auto'>
        <h2 className='text-black text-center font-Poppins font-semibold text-[50px] leading-[60px] max-w-[650px]'>Ready to get started with Lemon Wares?</h2>
        <p className='text-black font-Poppins text-[25px] font-normal text-center leading-[25px] mt-[38px]'>Choose the package that suits you</p>
        <div className='flex items-center justify-center my-[57px]'>
          <p className='text-black font-Poppins text-[25px] font-normal text-center leading-[25px]'>Monthly</p>
          <span className='flex w-[93px] h-[50px] rounded-full bg-[#B00000] ml-8 mr-7 relative  items-center cursor-pointer'><span className='flex w-[30px] h-[30px] bg-white rounded-full absolute left-2'></span></span>
          <p className='text-black font-Poppins text-[25px] font-normal text-center leading-[25px] relative'>Yearly <span className='text-black absolute font-Poppins text-[10px] font-medium text-center leading-[9px] text-nowrap bg-[#FFE87A] p-2 rounded-lg ml-4'>20%  discount</span></p>
        </div>
      </div>
    </div>
  )
}

export default Packages
