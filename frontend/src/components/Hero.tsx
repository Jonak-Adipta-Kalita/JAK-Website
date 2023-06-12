"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            "I'm a Programmer",
            "I'm a Student",
            "I'm a Gamer",
            "I'm a Guitarist",
        ],
        delaySpeed: 2000,
        loop: true,
    });

    return (
        <div>
            {/* <p>
                <span>{text}</span>
                <Cursor cursorColor="#F7ADBA" />
            </p> */}
        </div>
    );
};

export default Hero;
