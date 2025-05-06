"use client";

import { Btn } from "@/app/components/Btn";
import { useCounter } from "@/context/CounterCtx";

export function Counter() {
    const { counter, decreaseCounter, resetCounter, increaseCounter } =
        useCounter();

    return (
        <section className="bg-white absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex flex-col gap-y-4 p-4 shadow-lg rounded-lg min-w-[320px] w-[90%] max-w-[480px]">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 tracking-tight text-center mb-8">
                Counter
            </h1>
            <p className="text-9xl text-center font-black text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.9)] transition-all duration-300">
                {counter}
            </p>
            <div className="flex gap-4 justify-center mt-6">
                <Btn
                    onClick={decreaseCounter}
                    className="bg-red-500 hover:bg-red-600 focus:ring-red-500"
                >
                    Decrease
                </Btn>
                <Btn
                    onClick={resetCounter}
                    className="bg-gray-500 hover:bg-gray-600 focus:ring-gray-400"
                >
                    Reset
                </Btn>
                <Btn
                    onClick={increaseCounter}
                    className="bg-green-500 hover:bg-green-600 focus:ring-green-400"
                >
                    Increase
                </Btn>
            </div>
        </section>
    );
}

Counter.displayName = "Counter";
