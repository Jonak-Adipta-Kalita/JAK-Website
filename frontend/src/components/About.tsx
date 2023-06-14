"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <p className="text-justify text-slate-300/50"></p>
        </motion.div>
    );
};

export default About;
