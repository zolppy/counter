import { ReactNode } from "react";

interface Main {
    children: ReactNode;
}

export function Main({ children }: Main) {
    return <main>{children}</main>;
}

Main.displayName = "Main";
