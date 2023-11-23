import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-[80px] w-[1160px] m-auto">
      <div className='grid w-full grid-cols-2 mb-[90px]'>
        <div className='text-[28px] flex items-center font-medium text-[#313E51]'>
          <div className='h-[56px] w-[56px] rounded-[8px] flex flex-row mr-[24px] items-center justify-center bg-[#FFF1E9]'>
            <Image src="/images/icon-accessibility.svg" className="inline" height="40" width="40" alt="HTML" />
          </div>
          <div className='inline'>Accessibility</div>
        </div>
        <div className='w-full flex items-center justify-end text-right'>
          <Image src="/images/icon-sun-dark.svg" className="inline" height="24" width="24" alt="HTML" />
          <label className="relative inline-flex items-center cursor-pointer mx-[16px]">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A729F5]"></div>
          </label>
          <Image src="/images/icon-moon-dark.svg" className="inline" height="24" width="24" alt="HTML" />
        </div>
      </div>

      <div className='grid w-full grid-cols-2'>
        <div className='text-left w-[465px] text-[64px] text-[#313E51]'>
          <span className='block font-light'>Quiz completed</span>
          <span className='font-medium '>You scored...</span>

        </div>
        <div>
          <Link href="/">
            <div className='px-[20px] mb-[24px] h-[388px] shadow flex flex-col items-center justify-center bg-white align-middle rounded-[24px] text-[28px]'>
              <div className='text-[28px] flex items-center font-medium text-[#313E51]'>
                <div className='h-[56px] w-[56px] rounded-[8px] flex flex-row mr-[24px] items-center justify-center bg-[#FFF1E9]'>
                  <Image src="/images/icon-accessibility.svg" className="inline" height="40" width="40" alt="HTML" />
                </div>
                <div className='inline'>Accessibility</div>
              </div>
              <span className='text-[144px] p-6 leading-none font-medium text-[#313E51]'>8</span>
              <span className='text-[#626C7F] font-light text-[24px]'>out of 10</span>
            </div>
          </Link>
          <Link href="/">
            <div className='px-[20px] mb-[24px] h-[92px] shadow flex items-center bg-[#A729F5] align-middle rounded-[24px] text-[28px]'>
              <p className='inline align-middle text-center text-white w-full p-[32px]'>
                Play Again
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>

  )
}



