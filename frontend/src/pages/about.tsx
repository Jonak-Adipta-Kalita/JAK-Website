import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginModal from "../components/modals/LoginModal";
import SignUpModal from "../components/modals/SignUpModal";

const About = () => {
    return (
        <div className="flex h-screen flex-col  text-gray-300">
            <Head>
                <title>JAK Website | About</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="mx-auto mb-5 mt-3 space-y-4 md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                    <div className="mt-[10px] flex flex-col items-center px-2 font-bold">
                        <p className="text-lg md:text-xl">
                            Hey Guys, If You&rsquo;ve come here to know about
                            me!!
                        </p>
                        <p className="text-lg md:text-xl">
                            Here&rsquo;s all you should know about me!!
                        </p>
                    </div>
                    <div className="px-10">
                        <p className="font-justify mt-[20px] text-lg font-semibold">
                            My name is JONAK ADIPTA KALITA. I am a student in
                            Kendriya Vidyalaya Mangaldoi, I am currently
                            studying in standard &rsquo;9th&rsquo;. I am a
                            Programmer and also a &rsquo;Gamer&rsquo;. I code
                            for fun but sometimes I also teach some of my
                            colleagues some &rsquo;Python&rsquo;. I love Python
                            and TypeScript/JavaScript the most. I am a Youtuber
                            too. I love to play Games such as NFS, COD, AC,
                            Among Us, GTA, etc. I am a huge fan of Anime and
                            watched &rsquo;Pokemon&rsquo;,
                            &rsquo;Beyblade&rsquo;, &rsquo;Dragon Ball Z&rsquo;.
                            If you want to get to my Instagram or Github you
                            have to find it by yourself. Actually you&rsquo;ll
                            find my Social Medias in the Social Media Page.
                        </p>
                        <div className="mt-[30px] flex justify-center">
                            <p className="font-2xl">😎😎😎😎😎😎</p>
                        </div>
                    </div>
                </div>
            </main>
            <LoginModal />
            <SignUpModal />
            <Footer />
        </div>
    );
};

export default About;
