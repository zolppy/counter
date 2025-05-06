import { HTMLAttributes, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface Btn extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type?: "button" | "reset" | "submit";
}

export function Btn({
    children,
    type = "button",
    className = "",
    ...props
}: Btn) {
    const baseStyles =
        "px-6 py-3 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-opacity-50 lg:hover:cursor-pointer";

    return (
        <button
            {...props}
            type={type}
            className={twMerge(baseStyles, className as ClassNameValue)}
        >
            {children}
        </button>
    );
}

Btn.displayName = "Btn";
