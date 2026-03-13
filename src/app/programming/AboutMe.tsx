import Image from "next/image";

const AboutMe = () => {
    return (
        <section className="flex lg:items-center mt-28 lg:mt-0 justify-center h-screen w-full relative">
            <div></div>

            <div className="space-y-7 h-fit p-4 lg:p-10 bg-slate-800/30 rounded-lg shadow-slate-900 shadow-lg mx-4">
                <p className="text-fg-programming-secondary text-[clamp(1.25rem,1rem+1vw,1.875rem)] font-salsa tracking-wider text-center lg:text-left">
                    Hey, I am {" "}
                    <span className="text-fg-programming-primary">
                        Jonak
                    </span>
                    ! Happy to see you :D
                </p>
                <ul className="list-disc list-inside space-y-4 text-inter text-justify">
                    <li className="aboutText">
                        I'm passionate about <span className="text-fg-programming-primary">Coding</span>, exploring various areas such as Web Development, Game Development, Machine Learning, Computer Vision, IoT, ...
                    </li>
                    <li className="aboutText">
                        <span className="text-fg-programming-primary">Music</span> is a big part of my life; while I love playing different kinds of instruments, <span className="text-fg-programming-primary">Guitar</span> holds a special place in my heart.
                    </li>
                    <li className="aboutText">
                        <span className="text-fg-programming-primary">Astronomy</span> fascinates me, and I'm always eager to learn more about the universe.
                    </li>
                    <li className="aboutText">
                        I'm also a <span className="text-fg-programming-primary">book</span> nerd who loves getting lost in captivating fiction and exploring new worlds through stories.
                    </li>
                    <li className="aboutText">
                        I have a huge love for <span className="text-fg-programming-primary">gaming</span>, finding enjoyment in both playing and developing games.
                    </li>
                    <li className="aboutText">
                        I am literate in <span className="text-fg-programming-primary">অসমীয়া</span> (native), <span className="text-fg-programming-primary">English</span> as well as <span className="text-fg-programming-primary">हिंदी</span> and in the process of learning <span className="text-fg-programming-primary">日本語</span> - Polymathy includes Polyglotism
                    </li>
                </ul>
            </div>

            <div>
                {/* Scroll for more Button */}
            </div>
        </section>
    )
}

export default AboutMe;
