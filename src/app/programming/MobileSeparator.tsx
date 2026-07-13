import { motion } from "motion/react";

const MobileSeprator = () => {
    return (
        <motion.div
            className="mx-5 my-10 flex items-center gap-3 lg:hidden"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="bg-fg-programming-secondary/50 h-[2px] flex-1" />
            <div className="bg-fg-programming-primary size-2 rounded-full" />
            <div className="bg-fg-programming-secondary/50 h-[2px] flex-1" />
        </motion.div>
    );
};

export default MobileSeprator;
