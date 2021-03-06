import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { sessionState } from "../atoms/authAtom";
import Card from "../components/Card";
import { Notification } from "../typings";

interface Props {
    notifications: Notification[];
}

const Notifications = ({ notifications }: Props) => {
    const session = useRecoilValue(sessionState);

    return (
        <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Head>
                <title>JAK Website | Notification</title>
            </Head>
            {session.isAuthenticated ? (
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
            ) : (
                <div className="mx-auto mt-5 flex justify-center md:mt-10 md:max-w-3xl lg:mt-[50px] lg:max-w-5xl">
                    <p className="font-2xl font-bold">
                        You need to Sign Up or Login first!!
                    </p>
                </div>
            )}
        </main>
    );
};

export default Notifications;

export const getServerSideProps: GetServerSideProps = async () => {
    const req = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/notifications?format=json`
    );
    const notifications = req.data;

    return {
        props: {
            notifications,
        },
    };
};
