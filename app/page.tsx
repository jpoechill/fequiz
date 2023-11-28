'use client'

import Image from 'next/image'
import Link from 'next/link';
import useDarkMode from "./useDarkMode";

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();
  // const [countClick, setCountClick] = useState(0);

  // // Function to change the value of state on  
  // // click of button 
  // const countClickHandler = () => {
  //   setCountClick(countClick + 1);
  // };

  return (
    <main className="flex flex-col items-center justify-between pt-[80px] w-[1160px] m-auto">
      <div className='w-full flex items-center justify-end text-right mb-[90px] h-[56px]'>
        <Image src={colorTheme === "light" ? "/images/icon-sun-light.svg" : "/images/icon-sun-dark.svg"} className="inline" height="24" width="24" alt="HTML" />
        <label className="relative inline-flex items-center cursor-pointer mx-[16px]">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A729F5]"></div>
        </label>
        <Image src={colorTheme === "light" ? "/images/icon-moon-light.svg" : "/images/icon-moon-dark.svg"} className="inline" height="24" width="24" alt="HTML" />


        {colorTheme === "light" ? (
          <svg
            onClick={() => setTheme("light")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setTheme("dark")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}

      </div>

      <div className='grid w-full grid-cols-2'>
        <div className='text-left'>
          <h1 className='leading-tight dark-navy dark:text-[#FFFFFF] mb-[65px]'>
            <span className="font-light">
              Welcome to the
            </span> <br />
            <span className="font-medium">
              Frontend Quiz!
            </span>
          </h1>
          <span className="italic grey-navy dark:text-[#ABC1E1]">
            Pick a subject to get started.
          </span>
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



