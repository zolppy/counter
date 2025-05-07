"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CounterCtx {
    counter: number;
    decreaseCounter(): void;
    resetCounter(): void;
    increaseCounter(): void;
}

const CounterCtx = createContext<CounterCtx | undefined>(undefined);

function CounterProvider({ children }: { children: ReactNode }) {
    const [counter, setCounter] = useState<number>(0);

    function decreaseCounter() {
        if (counter) {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }

    function resetCounter() {
        setCounter(0);
    }

    function increaseCounter() {
        if (counter < 999) {
            setCounter((prevCounter) => prevCounter + 1);
        }
    }

    return (
        <CounterCtx.Provider
            value={{
                counter,
                decreaseCounter,
                resetCounter,
                increaseCounter,
            }}
        >
            {children}
        </CounterCtx.Provider>
    );
}

function useCounter() {
    const context = useContext(CounterCtx);

    if (!context) {
        throw new Error("useCounter must be used within a CounterProvider");
    }

    return context;
}

export { CounterProvider, useCounter };
