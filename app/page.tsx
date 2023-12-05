'use client'

import Image from 'next/image'
import Link from 'next/link';
import DarkModeToggle from './_components/DarkModeToggle'

export default function Home() {
  if (typeof window !== "undefined") {
    localStorage.setItem("score", 0);
  }

  return (
    <main className="flex flex-col items-center justify-between pt-[20px] lg:pt-[80px] px-[25px] lg:w-[1160px] m-auto">
      <DarkModeToggle></DarkModeToggle>
      <div className='grid w-full lg:mt-[10px] lg:grid-cols-2'>
        <div className='text-left'>
          <h1 className='leading-tight dark-navy lg:text-[64px] dark:text-[#FFFFFF] lg:mb-[65px] mb-[25px]'>
            <span className="font-light">
              Welcome to the
            </span> <br />
            <span className="font-medium">
              Frontend Quiz!
            </span>
          </h1>
          <div className="italic grey-navy dark:text-[#ABC1E1] mb-[45px]">
            Pick a subject to get started.
          </div>
        </div>
        <div className="dark:text-[#FFFFFF]">
          <Link href="/html/0">
            <div className='px-[20px] h-[92px] shadow flex items-center bg-white dark:bg-[#3B4D66] align-middle rounded-[24px] text-[28px]'>
              <div className='h-[56px] w-[56px] rounded-[8px] flex items-center justify-center bg-[#FFF1E9]'>
                <Image src="/images/icon-html.svg" className="inline" height="40" width="40" alt="HTML" />
              </div>
              <p className='inline align-middle p-[32px]'>
                HTML
              </p>
            </div>
          </Link>
          <Link href="/css/0">
            <div className='px-[20px] mt-[24px] h-[92px] shadow flex items-center bg-white dark:bg-[#3B4D66] align-middle rounded-[24px] text-[28px]'>
              <div className='h-[56px] w-[56px] rounded-[8px] flex items-center justify-center bg-[#E0FDEF]'>
                <Image src="/images/icon-css.svg" className="inline" height="40" width="40" alt="HTML" />
              </div>
              <p className='inline align-middle p-[32px]'>
                CSS
              </p>
            </div>
          </Link>
          <Link href="/javascript/0">
            <div className='px-[20px] mt-[24px] h-[92px] shadow flex items-center bg-white dark:bg-[#3B4D66] align-middle rounded-[24px] text-[28px]'>
              <div className='h-[56px] w-[56px] rounded-[8px] flex items-center justify-center bg-[#EBF0FF]'>
                <Image src="/images/icon-js.svg" className="inline" height="40" width="40" alt="HTML" />
              </div>
              <p className='inline align-middle p-[32px]'>
                Javascript
              </p>
            </div>
          </Link>
          <Link href="/accessibility/0">
            <div className='px-[20px] mt-[24px] h-[92px] shadow flex items-center bg-white dark:bg-[#3B4D66] align-middle rounded-[24px] text-[28px]'>
              <div className='h-[56px] w-[56px] rounded-[8px] flex items-center justify-center bg-[#F6E7FF]'>
                <Image src="/images/icon-accessibility.svg" className="inline" height="40" width="40" alt="HTML" />
              </div>
              <p className='inline align-middle p-[32px]'>
                Accessibility
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>

  )
}



