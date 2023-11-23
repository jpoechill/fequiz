import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-[80px] w-[1160px] m-auto">
      <div className='w-full flex items-center justify-end text-right mb-[90px] h-[56px]'>
        <Image src="/images/icon-sun-dark.svg" className="inline" height="24" width="24" alt="HTML" />
        <label className="relative inline-flex items-center cursor-pointer mx-[16px]">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A729F5]"></div>
        </label>
        <Image src="/images/icon-moon-dark.svg" className="inline" height="24" width="24" alt="HTML" />
      </div>
      <div className='grid w-full grid-cols-2'>
        <div className='text-left'>
          <h1 className='leading-tight dark-navy mb-[65px]'>
            <span className="font-light">
              Welcome to the
            </span> <br />
            <span className="font-medium">
              Frontend Quiz!
            </span>
          </h1>
          <span className="italic grey-navy">
            Pick a subject to get started.
          </span>
        </div>
        <div>
          <Link href="/questions">
            <div className='px-[20px] h-[92px] shadow flex items-center bg-white align-middle rounded-[24px] text-[28px]'>
              <div className='h-[56px] w-[56px] rounded-[8px] flex items-center justify-center bg-[#FFF1E9]'>
                <Image src="/images/icon-html.svg" className="inline" height="40" width="40" alt="HTML" />
              </div>
              <p className='inline align-middle p-[32px]'>
                HTML
              </p>
            </div>
          </Link>
          <Link href="/questions">
            <div className='px-[20px] mt-[24px] h-[92px] shadow flex items-center bg-white align-middle rounded-[24px] text-[28px]'>
              <div className='h-[56px] w-[56px] rounded-[8px] flex items-center justify-center bg-[#FFF1E9]'>
                <Image src="/images/icon-css.svg" className="inline" height="40" width="40" alt="HTML" />
              </div>
              <p className='inline align-middle p-[32px]'>
                CSS
              </p>
            </div>
          </Link>
          <div className='px-[20px] mt-[24px] h-[92px] shadow flex items-center bg-white align-middle rounded-[24px] text-[28px]'>
            <div className='h-[56px] w-[56px] rounded-[8px] flex items-center justify-center bg-[#FFF1E9]'>
              <Image src="/images/icon-js.svg" className="inline" height="40" width="40" alt="HTML" />
            </div>
            <p className='inline align-middle p-[32px]'>
              Javascript
            </p>
          </div>
          <div className='px-[20px] mt-[24px] h-[92px] shadow flex items-center bg-white align-middle rounded-[24px] text-[28px]'>
            <div className='h-[56px] w-[56px] rounded-[8px] flex items-center justify-center bg-[#FFF1E9]'>
              <Image src="/images/icon-accessibility.svg" className="inline" height="40" width="40" alt="HTML" />
            </div>
            <p className='inline align-middle p-[32px]'>
              Accessibility
            </p>
          </div>
        </div>
      </div>
    </main>

  )
}



