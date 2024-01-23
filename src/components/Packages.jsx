"use client";
import React, { useState } from 'react'
import { RightIcon } from './Icons';

const Packages = () => {
  const Items = [
    { plan: "Starter", price: "$2.80", pricePremium: "$5.80" },
    { plan: "Standard", price: "$4.20", pricePremium: "$8.80" },
    { plan: "Suprem", price: "$7.00", pricePremium: "$12.80" },
  ]

  const [first, setfirst] = useState("tab1")
  function tabchange(tabs) {
    setfirst(tabs)
  } return (
    <div className='container max-w-[1120px] flex flex-col'>
      <div className='flex flex-col max-w-[856px] mx-auto'>
        <h2 className='text-black text-center font-Poppins font-semibold text-[50px] leading-[60px] max-w-[650px]'>Ready to get started with Lemon Wares?</h2>
        <p className='text-black font-Poppins text-[25px] font-normal text-center leading-[25px] mt-[38px]'>Choose the package that suits you</p>
        <div className='flex items-center justify-center my-[57px]'>
          <p className='text-black font-Poppins text-[25px] font-normal text-center leading-[25px]'>Monthly</p>
          <span className='flex w-[93px] h-[50px] rounded-full bg-[#B00000] ml-8 mr-7 relative  items-center cursor-pointer'><span className='flex w-[30px] h-[30px] bg-white rounded-full absolute left-2'></span></span>
          <p className='text-black font-Poppins text-[25px] font-normal text-center leading-[25px] relative'>Yearly <span className='text-black absolute font-Poppins text-[10px] font-medium text-center leading-[9px] text-nowrap bg-[#FFE87A] p-2 rounded-lg ml-4'>20%  discount</span></p>
        </div>
        <div className='flex items-center w-full relative after:absolute after:bg-[#C4C4C4] after:w-full after:h-1 after:-bottom-[6px] after:left-0'>
          <div className={`${first === "tab1" && "relative after:absolute after:-bottom-[6px] after:z-20 transition duration-300 after:w-full after:h-1  after:bg-[#B00000] after:left-0"} w-1/2 flex justify-center`}><button onClick={() => tabchange("tab1")} className={` font-Poppins text-[30px] text-black font-semibold leading-10`}>Basic</button></div>
          <div className={`${first === "tab2" && "relative after:absolute after:-bottom-[6px] after:z-20 transition duration-300 after:w-full after:h-1  after:bg-[#B00000] after:left-0"} w-1/2 flex justify-center`}><button onClick={() => tabchange("tab2")} className=' font-Poppins text-[30px] text-black font-semibold leading-10'>Premium</button></div>
        </div>
      </div>
      {
        first === "tab1" && <div className='grid grid-cols-3 mt-20'>
          {
            Items.map((items, index) => (
              <div key={index} className=' bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] border-[1.5px] border-[#C4C4C4] rounded-2xl max-w-[299px] w-full h-auto'>
                <div className='p-[34px]'>
                  <h2 className=' text-[28px] font-Poppins font-semibold text-black leading-6'>{items.plan}</h2>
                  <p className=' font-Poppins text-xs font-normal text-black mt-3'>with all your customers via all conversation channels in one central dashboard.</p>
                  <p className=' text-black text-[42px] font-semibold font-Poppins leading-8 mt-7'>{items.price}</p>
                  <span className='text-black text-sm font-Poppins font-light'>Per month</span>
                  <button className=' text-black font-semibold font-Poppins text-sm text-center w-full bg-transparent border-[2px] border-black rounded-xl leading-8 py-[9px] my-[35px]'>Choose this Plan</button>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-bold gap-6'><span><RightIcon /></span>2GB SSD</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>10GB Bandwidth</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>15 Email Accounts</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>Unlimited Database</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>4 Subdomains</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>1 Parked Domain</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>2 Websites</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>Free SSL</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>Softaculous</p>
                </div>
              </div>
            ))
          }
        </div>
      }
      {
        first === "tab2" && <div className='grid grid-cols-3 mt-20'>
          {
            Items.map((items, index) => (
              <div key={index} className=' bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.25)] border-[1.5px] border-[#C4C4C4] rounded-2xl max-w-[299px] w-full h-auto'>
                <div className='p-[34px]'>
                  <h2 className=' text-[28px] font-Poppins font-semibold text-black leading-6'>{items.plan}</h2>
                  <p className=' font-Poppins text-xs font-normal text-black mt-3'>with all your customers via all conversation channels in one central dashboard.</p>
                  <p className=' text-black text-[42px] font-semibold font-Poppins leading-8 mt-7'>{items.pricePremium}</p>
                  <span className='text-black text-sm font-Poppins font-light'>Per month</span>
                  <button className=' text-black font-semibold font-Poppins text-sm text-center w-full bg-transparent border-[2px] border-black rounded-xl leading-8 py-[9px] my-[35px]'>Choose this Plan</button>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-bold gap-6'><span><RightIcon /></span>2GB SSD</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>10GB Bandwidth</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>15 Email Accounts</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>Unlimited Database</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>4 Subdomains</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>1 Parked Domain</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>2 Websites</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>Free SSL</p>
                  <p className='flex items-center text-[#808080] text-base font-Inter font-semibold gap-6 mt-[15px]'><span><RightIcon /></span>Softaculous</p>
                </div>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Packages
