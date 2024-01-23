"use client";
import Image from "next/image"
import logo from '../assets/images/logo.webp'
import Link from "next/link"
import { PhoneCallIcon } from "./Icons"
import { useState } from "react"
import { Sling as Hamburger } from 'hamburger-react'
const NavBar = () => {
    let NavLinks = "text-black leading-normal text-sm sm:text-[15px] font-semibold font-Poppins relative after:duration-300 after:absolute after:-bottom-1 transition duration-300 after:w-0 hover:after:w-[80%] after:h-[1px] after:rounded-full after:bg-[#B00000] after:left-[10%]"
    const [isOpen, setOpen] = useState(false);
    if (isOpen) { document.body.classList.add("overflow-hidden") }
    else {
        // document.body.classList.remove("overflow-hidden")
    }
    function RemoveOverflow() {
        setOpen(false)
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <nav className=" bg-white z-50">
            <div className="container max-w-[1220px] py-10">
                <div className="flex w-full justify-between">
                    <div className="flex items-center gap-5 sm:gap-10 lg:gap-16">
                        <Link href="http://"><Image className="max-sm:max-w-[70px]" src={logo} alt="logo" /></Link>
                        <p className=" text-black leading-normal text-sm sm:text-[15px] font-semibold font-Poppins relative after:absolute after:-bottom-1 after:w-[80%] after:h-[2px] after:rounded-full after:bg-[#B00000] after:left-[10%]">Our Services</p>
                    </div>
                    <div className={`${isOpen ? "right-0" : "-right-full"} flex items-center gap-[55px] mobileview lg:justify-between lg:ml-20 xl:ml-[135px] lg:w-[60%] xl:w-[67%]`}>
                        <ul className="flex max-lg:flex-col items-center gap-8">
                            <li><Link onClick={RemoveOverflow} href="#" className={`${NavLinks}`}>About</Link></li>
                            <li><Link onClick={RemoveOverflow} href="#" className={`${NavLinks}`}>Blog&News</Link></li>
                            <li><Link onClick={RemoveOverflow} href="#" className={`${NavLinks}`}>Contact</Link></li>
                        </ul>
                        <ul className="flex items-center gap-8 ml-10">
                            <li><Link onClick={RemoveOverflow} href="#" className={`${NavLinks}`}>Account</Link></li>
                            <li><Link onClick={RemoveOverflow} href="tel:+2349067322844" className={`${NavLinks} flex items-center gap-[6px] px-[30px] border-l border-l-[#DAD8D8] hover:after:left-[20%] hover:after:w-[60%]`}><PhoneCallIcon /> +2349067322844</Link></li>
                        </ul>
                    </div>
                    <div className='lg:hidden relative z-50 -mr-2'>
                        <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded distance="md" direction='right' duration={0.5} color='#B00000' />
                    </div>
                </div>
                {isOpen && (
                    <div className='w-full bg-[rgba(0,0,0,0.78)] flex h-full fixed top-0 left-0 z-30'>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar
