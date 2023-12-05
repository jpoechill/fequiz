'use client'

import { useEffect, useState } from "react";

// function useDarkMode() {
//     const [theme, setTheme] = useState("light");
//     const colorTheme = theme === "dark" ? "light" : "dark";

//     useEffect(() => {
//         const root = window.document.documentElement;

//         root.classList.remove(colorTheme);
//         root.classList.add(theme);

//         if (typeof window !== "undefined") {
//             localStorage.setItem("theme", theme);
//         }
//     }, [theme]);

//     return [colorTheme, setTheme];
// }


function useDarkMode(defaultValue: 'light', key: string) {
    const [value, setValue] = useState(() => {
        const stickyValue = window.localStorage.getItem(key);
        return stickyValue !== null
            ? JSON.parse(stickyValue)
            : defaultValue;
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}

export default useDarkMode;