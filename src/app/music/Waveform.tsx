"use client";

import { useRef, useCallback } from "react";
import { useAnimationTime } from "@/lib/hooks/useWaveformAnimationTime";

interface WaveformProps {
    height?: number;
    opacity?: number;
    className?: string;
}

const STEP = 8;
const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

const Waveform = ({ height = 100, opacity = 1, className }: WaveformProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const draw = useCallback(
        (t: number) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d", { alpha: true });
            if (!ctx) return;

            const W = canvas.offsetWidth;
            const H = height;
            const cy = H / 2;

            if (canvas.width !== W * dpr) {
                canvas.width = W * dpr;
                canvas.height = H * dpr;
                ctx.scale(dpr, dpr);
            }

            ctx.clearRect(0, 0, W, H);

            ctx.beginPath();
            ctx.strokeStyle = "rgba(255,26,60,0.6)";
            ctx.lineWidth = 1.5;
            ctx.shadowColor = "#ff1a3c";
            ctx.shadowBlur = 10;
            ctx.moveTo(0, cy);
            for (let x = 0; x <= W; x += STEP) {
                const y =
                    cy +
                    Math.sin(x * 0.02 + t) * 25 +
                    Math.sin(x * 0.05 + t * 1.3) * 10 +
                    Math.sin(x * 0.01 + t * 0.5) * 15;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = "rgba(0,170,255,0.5)";
            ctx.shadowColor = "#00aaff";
            ctx.moveTo(0, cy);
            for (let x = 0; x <= W; x += STEP) {
                const y =
                    cy +
                    Math.sin(x * 0.025 + t * 1.1 + Math.PI) * 20 +
                    Math.sin(x * 0.04 + t * 0.8) * 12;
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            ctx.shadowBlur = 0;
        },
        [height]
    );

    useAnimationTime(draw);

    return (
        <div
            className={`w-full overflow-hidden ${className ?? ""}`}
            style={{ opacity }}
        >
            <canvas
                ref={canvasRef}
                className="block w-full"
                style={{ height }}
            />
        </div>
    );
};

export default Waveform;
