import Image from "next/image"
import logo from '../assets/images/logo.webp'
import Link from "next/link"
import { PhoneCallIcon } from "./Icons"
const NavBar = () => {
    let NavLinks = "text-black leading-normal text-sm sm:text-[15px] font-semibold font-Poppins relative after:duration-300 after:absolute after:-bottom-1 transition duration-300 after:w-0 hover:after:w-[80%] after:h-[1px] after:rounded-full after:bg-[#B00000] after:left-[10%]"
    return (
        <nav className="container max-w-[1220px] py-10">
            <div className="flex">
                <div className="flex items-center gap-16">
                    <Link href="http://"><Image src={logo} alt="logo" /></Link>
                    <p className=" text-black leading-normal text-sm sm:text-[15px] font-semibold font-Poppins relative after:absolute after:-bottom-1 after:w-[80%] after:h-[2px] after:rounded-full after:bg-[#B00000] after:left-[10%]">Our Services</p>
                </div>
                <div className="flex justify-between items-center ml-[135px] w-[67%]">
                    <ul className="flex items-center gap-8">
                        <li><Link href="#" className={`${NavLinks}`}>About</Link></li>
                        <li><Link href="#" className={`${NavLinks}`}>Blog&News</Link></li>
                        <li><Link href="#" className={`${NavLinks}`}>Contact</Link></li>
                    </ul>
                    <ul className="flex items-center gap-8">
                        <li><Link href="#" className={`${NavLinks}`}>Account</Link></li>
                        <li><Link href="tel:+2349067322844" className={`${NavLinks} flex items-center gap-[6px] px-[30px] border-l border-l-[#DAD8D8] hover:after:left-[20%] hover:after:w-[60%]`}><PhoneCallIcon /> +2349067322844</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
