'use client'

import { useEffect, useState } from "react";

function useScore() {
    const [score, setScore] = useState(localStorage.getItem('score') || 0);
    const newScore = Number(score) + 1

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("score", newScore);
        }
    }, [newScore]);

    return [score, setScore];
}

export default useScore;