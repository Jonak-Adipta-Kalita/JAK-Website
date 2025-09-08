import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                lobby: "font-salsa text-fg-extralight relative z-50 rounded-full bg-zinc-700/50 font-semibold shadow-2xl ring shadow-zinc-900 ring-zinc-900 ring-offset-[0.5]",
            },
            size: {
                lobby: "h-9 p-8 sm:p-10 sm:text-2xl text-xl",
            },
        },
        defaultVariants: {
            variant: "lobby",
            size: "lobby",
        },
    }
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };
