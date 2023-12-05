"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
    const [local] = useState((): string => {
        if (typeof window !== 'undefined') {
            const from_localStorage = window.localStorage.getItem('theme')
            if (from_localStorage === null || from_localStorage === undefined) {
                return 'light'
            }

            return `${from_localStorage}` ? from_localStorage : 'light'
        }
        return ''
    });
    const [selected, setSelected] = useState<string>(local);
    const [selectedOption, setSelectedOption] = useState<string>();

    useEffect(() => {
        window.localStorage.setItem('theme', `${selected}`)
        const root = window.document.documentElement;
        const colorTheme = selected === "dark" ? "light" : "dark";
        root.classList.remove(colorTheme);
        root.classList.add(selected);

        setSelectedOption(`${selected}`);
    }, [local, selected])

    function handleChange() {
        if (selectedOption === 'light') {
            setSelected('dark')
        } else {
            setSelected('light')
        }
    }
    return (
        <div className='w-full flex items-center justify-end text-right mb-[40px] lrg:mb-[80px] h-[56px]'>

            {selectedOption}
            <Image src={selectedOption === "dark" ? "/images/icon-sun-light.svg" : "/images/icon-sun-dark.svg"} className="inline" height="24" width="24" alt="HTML" />
            <label className="relative inline-flex items-center cursor-pointer mx-[16px]">
                <input type="checkbox" checked={selectedOption === "light" ? false : true} onChange={handleChange} className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A729F5]"></div>
            </label>
            <Image src={selectedOption === "dark" ? "/images/icon-moon-light.svg" : "/images/icon-moon-dark.svg"} className="inline" height="24" width="24" alt="HTML" />
        </div>
    )
}

export default DarkModeToggle
