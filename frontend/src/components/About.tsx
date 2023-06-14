"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            className="space-y-5 text-justify text-xs text-slate-400 md:text-sm lg:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <p>
                I am a 10th standard student at Kendriya Vidyalaya Mangaldoi,
                with a deep passion for programming and gaming. Python and
                TypeScript (JavaScript) are my favorite programming languages,
                and I enjoy exploring their possibilities.
            </p>
            <p>
                Gaming is another interest of mine, and I find great joy in
                playing Need For Speed, Assassin&apos;s Creed, and more. These
                games provide an exciting escape and also help me develop
                problem-solving and strategic thinking skills. Additionally, I
                am an avid anime fan, with favorites like Pokemon, Beyblade, and
                Dragon Ball Z. The captivating storylines, unique art styles,
                and memorable characters of anime series fascinate me.
            </p>
            <p>
                Balancing my academic studies with my programming, gaming, and
                anime interests is important to me. These activities fuel my
                creativity, broaden my horizons, and provide a much-needed break
                from routine. I am constantly seeking new avenues within these
                realms to expand my knowledge, skills, and experiences. Whether
                it&apos;s coding, gaming, or immersing myself in the world of
                anime, I find joy and inspiration in every aspect of my diverse
                interests.
            </p>
        </motion.div>
    );
};

export default About;
