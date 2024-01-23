import Image from 'next/image'
import Image1 from '../assets/images/toolimg1.webp'
import Image2 from '../assets/images/toolimg2.webp'
import Image3 from '../assets/images/toolimg3.webp'
import Image4 from '../assets/images/toolimg4.webp'
import Image5 from '../assets/images/toolimg5.webp'
import Image6 from '../assets/images/toolimg6.webp'
const FavTools = () => {
    return (
        <div className='container max-w-[1220px] py-10'>
            <div className='grid grid-cols-2'>
                <div>
                    
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='flex flex-col'>
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
