import { AiOutlineInfoCircle } from 'react-icons/ai'
import { MdOutlineEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'

export function CompanieItem() {
    return (
      <div className="flex flex-row items-center justify-between py-[12px] px-[20px] h-[100px] w-full bg-[#F3F3F3]">
        <div className="flex flex-row items-center space-x-[20px]">
          <div className="h-full">
            <img className="h-full" src="/image.png" />
          </div>
          <div className="flex flex-col">
            <span className='text-[18px] font-medium'>Hoffby</span>
            <span className='text-[14px] font-normal'>44.532.586/0001-00</span>
          </div>
          <div className="flex flex-col">
            <span className='text-[14px] font-normal'>Rua F-7 Qd.11 Lt.10</span>
            <span className='text-[14px] font-normal'>Setor redentor</span>
            <span className='text-[14px] font-normal'>Jandaia (GO)</span>
          </div>  
        </div>
        <div className="flex flex-row items-center space-x-[20px]">
          <div className='px-[10px] bg-[#EDA876] rounded-full text-white py-[2px]'>
            <span className='text-[14px] font-normal'>Tecnologia da informação</span>
          </div>
          <div className='cursor-pointer'>
            <AiOutlineInfoCircle size={23} />
          </div>
          <div className='cursor-pointer'>
            <MdOutlineEmail size={23} />
          </div>
          <div className='cursor-pointer'>
            <FiPhone size={23} />
          </div>
        </div>
      </div>
    )
  }
  