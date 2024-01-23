import Image from 'next/image'
import Image1 from '../assets/images/toolimg1.webp'
import Image2 from '../assets/images/toolimg2.webp'
import Image3 from '../assets/images/toolimg3.webp'
import Image4 from '../assets/images/toolimg4.webp'
import Image5 from '../assets/images/toolimg5.webp'
import Image6 from '../assets/images/toolimg6.webp'
import iconimg from '../assets/images/favtool1.png'
import iconimg2 from '../assets/images/favtool2.png'
import iconimg3 from '../assets/images/favtool3.png'
import { QueteMarkIcon, QueteMarkSmall } from './Icons'
const FavTools = () => {
    return (
        <div className='container max-w-[1220px] py-10'>
            <div className='grid grid-cols-2 my-20 gap-[30px]'>
                <div className='flex flex-col items-end'>
                    <div className='relative'>
                        <h2 className='text-[#18191F] text-5xl font-extrabold leading-[64px] font-Inter max-w-[445px]'>Real Stories from Real Customers</h2>
                        <p className='text-[#18191F] text-lg font-Inter font-normal leading-[32px] max-w-[573px] mt-3'>Get inspired by these stories.</p>
                        <span className=' absolute top-0 left-0 -translate-x-[67%] -translate-y-[46%]'><QueteMarkIcon /></span>
                    </div>
                    <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg max-w-[350px] w-full mt-6'>
                        <div className='py-2 px-8 flex gap-4'>
                            <span className='mt-20'><QueteMarkSmall /></span>
                            <div className='flex flex-col'>
                                <Image src={iconimg} alt='Icon' />
                                <p className=' font-Inter font-normal text-black text-base leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                <p className=' font-Inter font-bold text-[#18191F] text-lg leading-7 mt-6'>Floyd Miles</p>
                                <p className=' font-Inter font-medium text-[#969BAB] text-sm leading-6 mb-20'>Vice President, CLI</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg max-w-[445px] w-full mt-6'>
                        <div className='pt-10 px-8 flex gap-4'>
                            <span className='mt-20'><QueteMarkSmall /></span>
                            <div className='flex flex-col'>
                                <Image src={iconimg2} alt='Icon' />
                                <p className=' font-Inter font-normal text-black text-base leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                <p className=' font-Inter font-bold text-[#18191F] text-lg leading-7 mt-6'>Jane Cooper</p>
                                <p className=' font-Inter font-medium text-[#969BAB] text-sm leading-6 mb-2'>CEO, JPNL</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg max-w-[350px] w-full mt-6'>
                        <div className='pt-10 px-8 flex gap-4'>
                            <span className='mt-20'><QueteMarkSmall /></span>
                            <div className='flex flex-col'>
                                <Image src={iconimg3} alt='Icon' />
                                <p className=' font-Inter font-normal text-black text-base leading-[32px]'>LemonWares saved our time in Hosting my company page.</p>
                                <p className=' font-Inter font-bold text-[#18191F] text-lg leading-7 mt-6'>Kristin Watson</p>
                                <p className=' font-Inter font-medium text-[#969BAB] text-sm leading-6 mb-8'>Co-Founder, LeeveOn Branding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 pt-1'>
                <div className='flex flex-col mt-5'>
                    <h2 className='text-[#18191F] text-5xl font-extrabold leading-[64px] font-Inter'>We serve over 100
                        Nigerian Websites</h2>
                    <p className='text-[#18191F] text-lg font-Inter font-normal leading-[32px] max-w-[573px] mt-3'>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
                </div>
                <div className='grid grid-cols-2 xl:grid-cols-3 items-center justify-center'>
                    <div className='flex justify-center lg:justify-end'>
                        <Image src={Image1} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <Image src={Image2} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <Image src={Image3} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <Image src={Image4} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <Image src={Image5} alt='Images ' />
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <Image src={Image6} alt='Images ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavTools
