"use client";

import React from 'react';
import { useEffect, useState } from 'react';

const HomeText = () => {
    const [morphingText, setMorphingText] = useState("Explore");
    const [inAnimation, setInAnimation] = useState(false);

    useEffect(() => {
        if (!inAnimation) {
            setTimeout(() => {
                setInAnimation(true);
            }, 3000);
        }
        else {
            setTimeout(() => {
                setInAnimation(false);
                if (morphingText === "Explore") {
                    setMorphingText("Share");
                }
                else {
                    setMorphingText("Explore");
                }
            }, 500);
        }
    }, [inAnimation]);



    return (
        <div className="text-8xl font-bold text-white-cust text-justify align-middle w-4/5 h-auto flex flex-col gap-y-4">
            {/* separate text into three layers like uxpert */}
            <div id="text-to-morph" className={`${inAnimation ? "transitioning-exit" : "transitioning-enter"} text-orange-cust`}>{morphingText}</div>
            <div>Desktop</div>
            <div>Wallpapers</div>
        </div>
    )
}

export default HomeText;