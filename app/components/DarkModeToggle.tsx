"use client"
import React from 'react'
import useDarkMode from "../useDarkMode";
import Image from 'next/image'

const DarkModeToggle = () => {
    const [colorTheme, setTheme] = useDarkMode();

    function handleChange() {
        if (colorTheme === "light") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    return (
        <div className='w-full flex items-center justify-end text-right mb-[40px] lrg:mb-[80px] h-[56px]'>
            <Image src={colorTheme === "light" ? "/images/icon-sun-light.svg" : "/images/icon-sun-dark.svg"} className="inline" height="24" width="24" alt="HTML" />
            <label className="relative inline-flex items-center cursor-pointer mx-[16px]">
                <input type="checkbox" checked={colorTheme === "dark" ? false : true} onChange={handleChange} className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A729F5]"></div>
            </label>
            <Image src={colorTheme === "light" ? "/images/icon-moon-light.svg" : "/images/icon-moon-dark.svg"} className="inline" height="24" width="24" alt="HTML" />
        </div>
    )
}

export default DarkModeToggle
