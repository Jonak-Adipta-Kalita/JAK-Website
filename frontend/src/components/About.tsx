"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            className="space-y-5 text-justify text-xs text-gray-300/75 md:text-sm lg:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <p>
                I&apos;m a 10th-grade student at Kendriya Vidyalaya Mangaldoi. I&apos;m
                passionate about programming, particularly Python and TypeScript
                (JavaScript). Gaming is another interest of mine, and I enjoy
                playing Need For Speed and Assassin&apos;s Creed. Anime is also a big
                part of my life, with Pokemon, Beyblade, and Dragon Ball Z being
                my favorites. Balancing my academic studies with my hobbies is
                crucial to me as they fuel my creativity and provide a
                much-needed break from routine. I&apos;m constantly exploring new
                avenues within these interests to expand my knowledge and skills
                while finding joy and inspiration in each aspect.
            </p>
        </motion.div>
    );
};

export default About;
