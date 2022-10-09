import HCaptcha from "@hcaptcha/react-hcaptcha";
import Head from "next/head";
import { MouseEvent, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { sessionState } from "../atoms/authAtom";

const Dashbaord = () => {
    const [session, setSession] = useRecoilState(sessionState);
    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [hCaptchaToken, setHCaptchaToken] = useState("");
    const captchaRef = useRef<any>(null);

    const changePassword = (e: MouseEvent) => {
        e.preventDefault();

        setSession({
            ...session,
            isLoading: true,
        });

        if (!hCaptchaToken) {
            setSession({
                ...session,
                isLoading: false,
            });
            return;
        }
        try {
            // Change the password
            setCurrentPassword("");
            setNewPassword("");
        } catch (error) {
            alert("Something went Wrong, when Changing Password!!");
        }

        setSession({
            ...session,
            isLoading: false,
        });
    };

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
                        <div className="ml-[50px] pt-[40px]">
                            <p className="text-2xl underline underline-offset-8">
                                Change Password
                            </p>
                            <div className="flex flex-col space-x-4 md:flex-row">
                                <div className="mt-[20px] flex flex-col space-y-2">
                                    <input
                                        type="password"
                                        required
                                        value={currentPassword}
                                        onChange={(e) =>
                                            setCurrentPassword(e.target.value)
                                        }
                                        className="authInput"
                                        placeholder="Current Password"
                                    />
                                    <input
                                        type="new-password"
                                        required
                                        value={newPassword}
                                        onChange={(e) =>
                                            setNewPassword(e.target.value)
                                        }
                                        className="authInput"
                                        placeholder="New Password"
                                    />
                                    <HCaptcha
                                        sitekey={
                                            process.env
                                                .NEXT_PUBLIC_HCAPTCHA_SITE_KEY!
                                        }
                                        onVerify={setHCaptchaToken}
                                        onLoad={() => {
                                            captchaRef.current.execute();
                                        }}
                                        ref={captchaRef}
                                        theme="dark"
                                    />
                                </div>
                                <div className="relative">
                                    <button
                                        onClick={(e) => changePassword(e)}
                                        className="absolute left-20 mt-5 rounded-lg border-[2px] border-gray-400 p-5 md:left-0 md:bottom-20 md:mt-0"
                                        aria-label="change-password"
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>
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
