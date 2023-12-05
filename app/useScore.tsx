'use client'

import { useEffect, useState } from "react";

function useScore() {
    const [score, setScore] = useState(localStorage.getItem('score') || 0);
    const newScore = Number(score) + 1

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("score", String(newScore));
        }
    }, [newScore]);

    return [score, setScore];
}

export default useScore;

// const [local] = useState((): string => {
//     if (typeof window !== 'undefined') {
//         const from_localStorage = window.localStorage.getItem('theme')
//         if (from_localStorage === null || from_localStorage === undefined) {
//             return 'light'
//         }

//         return `${from_localStorage}` ? from_localStorage : 'light'
//     }
//     return ''
// });
// const [selected, setSelected] = useState<string>(local);
// const [selectedOption, setSelectedOption] = useState<string>();

// useEffect(() => {
//     window.localStorage.setItem('theme', `${selected}`)
//     const root = window.document.documentElement;
//     const colorTheme = selected === "dark" ? "light" : "dark";
//     root.classList.remove(colorTheme);
//     root.classList.add(selected);

//     setSelectedOption(`${selected}`);
// }, [local, selected])

// function handleChange() {
//     if (selectedOption === 'light') {
//         setSelected('dark')
//     } else {
//         setSelected('light')
//     }
// }