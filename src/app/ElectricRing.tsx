"use client";

export default function ElectricRing() {
    return (
        <div className="relative flex items-center justify-center">
            <div className="absolute h-25 w-25 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-70 blur-xl" />

            <div className="relative flex h-25 w-25 items-center justify-center rounded-full border-4 border-blue-400 shadow-[0_0_30px_rgba(0,255,255,0.8)]">
                {/* Content */}
            </div>
        </div>
    );
}
