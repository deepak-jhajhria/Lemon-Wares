import Image from 'next/image'
import Image1 from '../assets/images/whyus1.webp'
import Image2 from '../assets/images/whyus2.webp'
import Image3 from '../assets/images/whyus3.webp'
import Image4 from '../assets/images/whyus4.webp'
import Image5 from '../assets/images/whyus5.webp'
import Image6 from '../assets/images/whyus6.webp'
import { CloudsFirstIcons, CloudsFourthIcons, CloudsSecondIcons, CloudsThirdIcons } from './Icons'
const Clouds = () => {
  const Items = [
    { Svg: (<CloudsFirstIcons />), title: "99.9% Uptime", para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings." },
    { Svg: (<CloudsSecondIcons />), title: "Blazing Fast Web Hosting", para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings." },
    { Svg: (<CloudsThirdIcons />), title: "Free SSL Certificates", para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings." },
    { Svg: (<CloudsFourthIcons />), title: "24x7 Friendly Support", para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings." },
  ]
  return (
    <div className='container max-w-[1280px] py-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className='flex flex-col'>
          <h2 className='text-[#18191F] text-5xl font-extrabold leading-[64px] font-Inter'>True Cloud Web  Hosting</h2>
          <p className='text-[#18191F] text-lg font-Inter font-normal leading-[32px] max-w-[573px] mt-3'>True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
        </div>
        <div className='grid grid-cols-2 xl:grid-cols-3 items-center justify-center gap-5'>
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
      <div className="grid grid-cols-2 xl:grid-cols-4 mt-20 lg:mt-[100px] xl:mt-[126px] ml-11 mr-12 gap-10 xl:gap-5">
        {
          Items.map((items, index) => (
            <div className='flex w-full justify-center'>
              <div key={index} className='flex flex-col justify-center items-center max-w-[259px]'>
                {items.Svg}
                <h2 className='text-black font-bold text-xl mt-3 font-Poppins'>{items.title}</h2>
                <p className='text-black text-xs font-Poppins text-center font-light mt-1'>{items.para}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Clouds
