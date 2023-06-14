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
                I am a student at Kendriya Vidyalaya Mangaldoi, currently
                pursuing my 10th standard. Besides my studies, I have a passion
                for programming and gaming. Python and TypeScript (JavaScript)
                are my favorite programming languages.
            </p>
            <p>
                Gaming is another interest of mine, and I enjoy playing Need For
                Speed, Assassin&apos;s Creed, and more. I am also a big fan of
                anime, with favorites including Pokemon, Beyblade, and Dragon
                Ball Z.
            </p>
            <p>
                Balancing my academic studies with my programming, gaming, and
                anime interests is important to me. These activities fuel my
                creativity, broaden my horizons, and provide a much-needed break
                from routine. I constantly seek new avenues within these realms
                to expand my knowledge, skills, and experiences, finding joy and
                inspiration in every aspect of my diverse interests.
            </p>
        </motion.div>
    );
};

export default About;
