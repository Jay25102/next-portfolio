"use client";

import React from 'react';
import { useEffect, useState } from 'react';

const HomeText = () => {
    const [morphingText, setMorphingText] = useState("Design");
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
                if (morphingText === "Design") {
                    setMorphingText("Build");
                }
                else if (morphingText === "Build") {
                    setMorphingText("Deploy");
                }
                else if (morphingText === "Deploy") {
                    setMorphingText("Design");
                }
            }, 500);
        }
    }, [inAnimation]);



    return (
        <div className="text-8xl font-bold text-white-cust text-justify align-middle w-4/5 h-auto flex flex-col">
            <div id="text-to-morph" className={`${inAnimation ? "transitioning-exit" : "transitioning-enter"} text-orange-cust home-text`}>{morphingText}</div>
            <div className='home-text'>Websites</div>
        </div>
    )
}

export default HomeText;