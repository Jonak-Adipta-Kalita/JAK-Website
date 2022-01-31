import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();

    return (
        <header className="flex items-center justify-between bg-[#272934] p-4 py-5 text-gray-400 shadow-xl md:px-10 lg:px-20">
            <div
                onClick={() => router.push("/")}
                className="flex cursor-pointer items-center space-x-4"
            >
                <Image
                    src="/images/favicon.png"
                    alt="logo"
                    height={60}
                    width={60}
                />
                <h1 className="font-bold text-white">JAK Website</h1>
            </div>
            <div className="">{/* User */}</div>
        </header>
    );
};

export default Header;
