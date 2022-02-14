import Head from "next/head";
import { useEffect } from "react";
import Typed from "react-typed";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import LoginModal from "../components/modals/LoginModal";
import SignUpModal from "../components/modals/SignUpModal";
import { useRecoilState } from "recoil";
import { sessionState } from "../atoms/authAtom";
import axios from "axios";

const Home = () => {
    const router = useRouter();
    const [session, setSession] = useRecoilState(sessionState);

    useEffect(() => {
        const logic = async () => {
            try {
                const res = await axios.get("/api/auth/refresh", {
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (res.status === 200) {
                    const verify_res = await axios.get("/api/auth/verify", {
                        headers: {
                            Accept: "application/json",
                        },
                    });

                    if (verify_res.status === 200) {
                        const load_user_res = await axios.get(
                            `/api/auth/user`,
                            {
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                },
                            }
                        );

                        if (load_user_res.status === 200) {
                            setSession({
                                ...session,
                                user: load_user_res.data,
                                isAuthenticated: true,
                            });
                        }
                    } else {
                        alert("Something went wrong!!");
                    }
                } else {
                    alert("Something went wrong!!");
                }
            } catch (err) {
                alert("Something went wrong!!");
            }
        };

        logic();
    }, [router, session]);

    return (
        <div className="flex h-screen flex-col text-gray-300">
            <Head>
                <title>JAK Website | Home</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="mx-auto mb-5 mt-10 space-y-4 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                    <div className="flex justify-center">
                        <p className="text-3xl">
                            <Typed
                                strings={[
                                    "I'm a Programmer",
                                    "I'm a Student",
                                    "I'm a Gamer",
                                    "I'm a Guitarist",
                                    "I'm a Sushi Lover",
                                ]}
                                backSpeed={30}
                                smartBackspace={true}
                                backDelay={1500}
                                startDelay={1000}
                                typeSpeed={25}
                                loop={true}
                                className="mb-[50px] font-bold"
                            />
                        </p>
                    </div>
                    <div className="mx-[40px] border-b-[5px]" />
                    <div className="pt-10">
                        <div className="grid grid-cols-1 px-20 sm:px-0 md:grid-cols-2 xl:grid-cols-3">
                            <Card
                                title="About"
                                description="Know about Jonak Adipta Kalita"
                                button={{
                                    title: "Link",
                                    onClick: () => router.push("/about"),
                                }}
                            />
                            <Card
                                title="Contact"
                                description="Contact Jonak Adipta Kalita"
                                button={{
                                    title: "Link",
                                    onClick: () => router.push("/contact"),
                                }}
                            />
                            <Card
                                title="Games"
                                description="Know about JAK's Games"
                                button={{
                                    title: "Link",
                                    onClick: () => router.push("/games"),
                                }}
                            />
                            <Card
                                title="Discord Widget"
                                description="Look at JAK's Discord Widget"
                                button={{
                                    title: "Link",
                                    onClick: () =>
                                        router.push("/discord_widget"),
                                }}
                            />
                            <Card
                                title="Pictures"
                                description="Look at JAK's Pictures"
                                button={{
                                    title: "Link",
                                    onClick: () => router.push("/pictures"),
                                }}
                            />
                            <Card
                                title="Social Media"
                                description="Social Medias of JAK"
                                button={{
                                    title: "Link",
                                    onClick: () =>
                                        router.push("/social_medias"),
                                }}
                            />
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

export default Home;
