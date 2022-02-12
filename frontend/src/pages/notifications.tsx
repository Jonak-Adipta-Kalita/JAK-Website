import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginModal from "../components/modals/LoginModal";
import SignUpModal from "../components/modals/SignUpModal";
import { Notification } from "../typings";

interface Props {
    notifications: Notification[];
}

const Notifications = ({ notifications }: Props) => {
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if (!session) {
            router.push("/page-not-found");
            return;
        }
    }, [session]);

    return (
        <div className="flex h-screen flex-col  text-gray-300">
            <Head>
                <title>JAK Website | Notification</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="mx-auto mb-5 mt-3 space-y-4 md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {notifications.map((notification) => (
                            <Card
                                key={notification.id}
                                title={notification.name}
                                description={notification.text}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <LoginModal />
            <SignUpModal />
            <Footer />
        </div>
    );
};

export default Notifications;

export const getServerSideProps: GetServerSideProps = async () => {
    const req = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/notifications?format=json`
    );
    const notifications = await req.json();

    return {
        props: {
            notifications,
        },
    };
};
