import type { Metadata } from "next";
import { raleway } from "@/utils/fonts";
import { CounterProvider } from "@/context/CounterCtx";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Counter",
    description:
        "Simple counter for testing some concepts of Next.js and frontend development.",
    authors: [
        {
            name: "Gabriel Cavalcante de Jesus Oliveira",
            url: "https://github.com/zolppy",
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${raleway.className} antialiased`}>
                <CounterProvider>{children}</CounterProvider>
            </body>
        </html>
    );
}

RootLayout.displayName = "RootLayout";
