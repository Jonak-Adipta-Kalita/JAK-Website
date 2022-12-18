import Head from "next/head";

const _404 = () => {
    return (
        <main className="flex-1 overflow-y-auto px-2 scrollbar-hide md:px-4 lg:px-6 xl:px-10">
            <Head>
                <title>JAK Website | Page Not Found</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mt-10 flex justify-center lg:mt-[50px]">
                <p className="text-2xl font-bold text-text-color-light dark:text-white">
                    Page Not Found!!
                </p>
            </div>
        </main>
    );
};

export default _404;
