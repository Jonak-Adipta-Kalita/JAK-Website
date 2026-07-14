export function Zigzag({ className = "w-8 h-4", ...props }) {
    return (
        <svg viewBox="0 0 60 20" className={className} {...props}>
            <path
                d="M2 18 L12 2 L22 18 L32 2 L42 18 L52 2 L58 10"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function DotGrid({ className = "w-8 h-6", rows = 4, cols = 6 }) {
    const dots = [];
    const spacing = 8;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dots.push(
                <circle
                    key={`${r}-${c}`}
                    cx={c * spacing + 4}
                    cy={r * spacing + 4}
                    r="1.5"
                    fill="currentColor"
                />
            );
        }
    }
    return (
        <svg
            viewBox={`0 0 ${cols * spacing} ${rows * spacing}`}
            className={className}
        >
            {dots}
        </svg>
    );
}

export function Arc({ className = "w-6 h-8", ...props }) {
    return (
        <svg viewBox="0 0 30 40" fill="none" className={className} {...props}>
            <path
                d="M4 4 C 26 12, 26 28, 4 36"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    );
}

export function DiagLine({ className = "w-6 h-8", ...props }) {
    return (
        <svg viewBox="0 0 24 32" fill="none" className={className} {...props}>
            <line
                x1="4"
                y1="28"
                x2="20"
                y2="4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

export function FilledTriangle({ className = "w-4 h-4", ...props }) {
    return (
        <svg viewBox="0 0 20 20" className={className} {...props}>
            <polygon points="10,2 18,18 2,18" fill="currentColor" />
        </svg>
    );
}

export function OutlineTriangleDown({ className = "w-4 h-4", ...props }) {
    return (
        <svg viewBox="0 0 20 20" fill="none" className={className} {...props}>
            <polygon
                points="2,4 18,4 10,18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function DashedCircle({ className = "w-6 h-6", ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="3 3"
            />
        </svg>
    );
}
