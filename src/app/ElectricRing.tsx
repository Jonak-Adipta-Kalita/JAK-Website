"use client";

import Image from "next/image";

export default function ElectricRing({ portal }: { portal: string }) {
    return (
        <div className="relative flex items-center justify-center">
            {/* <div className="absolute h-25 w-25 animate-pulse rounded-full bg-gradient-to-r from-teal-700 via-blue-500 to-teal-700 opacity-70 blur-xl hover:h-30 hover:w-30" />
            <div className="bg-bg-lobby absolute h-25 w-25 animate-pulse rounded-full opacity-70 hover:h-30 hover:w-30" />

            <div className="relative flex h-25 w-25 items-center justify-center rounded-full border-4 border-teal-700 shadow-[0_0_30px_rgba(0,255,255,0.8)] transition-all duration-150 ease-in-out hover:h-30 hover:w-30">

            </div> */}
            <Image
                src={`/portals/${portal} Portal.webp`}
                alt="Portal Image"
                width={300}
                height={300}
                className="h-40 w-40 object-contain hover:animate-spin"
                draggable={false}
            />
        </div>
    );
}
