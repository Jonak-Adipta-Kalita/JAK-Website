import Head from "next/head";
import { useRecoilValue } from "recoil";
import { sessionState } from "../atoms/authAtom";

const Dashbaord = () => {
    const session = useRecoilValue(sessionState);

    return (
        <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Head>
                <title>JAK Website | Dashboard</title>
            </Head>
            {session.isAuthenticated ? (
                <div className="mx-auto mb-5 mt-3 px-5 md:mt-10 md:max-w-3xl lg:mt-[10px] lg:max-w-5xl">
                    <div className="flex justify-center">
                        <p className="mb-[50px] mt-5 text-4xl font-bold">
                            Your Dashboard
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="ml-[50px] flex items-center space-x-4">
                            <p className="dashboardText">Name:</p>
                            <p className="dashboardText">
                                {`${session.user?.first_name} ${session.user?.last_name}`}
                            </p>
                        </div>
                        <div className="ml-[50px] flex items-center space-x-4">
                            <p className="dashboardText">Username:</p>
                            <p className="dashboardText">
                                {session.user?.username}
                            </p>
                        </div>
                        <div className="ml-[50px] flex items-center space-x-4">
                            <p className="dashboardText">Email:</p>
                            <p className="dashboardText">
                                {session.user?.email}
                            </p>
                        </div>
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

export default Dashbaord;
