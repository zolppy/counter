import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counter } from "@/app/components/Counter";
import { CounterProvider } from "@/context/CounterCtx";

describe("Counter Component", function () {
    // Test initial render and elements
    it("should render the counter with initial value and buttons", function () {
        render(
            <CounterProvider>
                <Counter />
            </CounterProvider>
        );

        // Check if counter displays initial value (assuming 0)
        const counterValue = screen.getByRole("paragraph");
        expect(counterValue).toHaveTextContent("0");

        // Check if all buttons are rendered
        expect(screen.getByText("Increase")).toBeInTheDocument();
        expect(screen.getByText("Decrease")).toBeInTheDocument();
        expect(screen.getByText("Reset")).toBeInTheDocument();
    });

    // Test counter increase functionality
    it("should increase counter when Increase button is clicked", function () {
        render(
            <CounterProvider>
                <Counter />
            </CounterProvider>
        );

        const increaseBtn = screen.getByText("Increase");
        const counterValue = screen.getByRole("paragraph");

        fireEvent.click(increaseBtn);
        expect(counterValue).toHaveTextContent("1");

        fireEvent.click(increaseBtn);
        expect(counterValue).toHaveTextContent("2");
    });

    // Test counter reset functionality
    it("should reset counter to 0 when Reset button is clicked", function () {
        render(
            <CounterProvider>
                <Counter />
            </CounterProvider>
        );

        const increaseBtn = screen.getByText("Increase");
        const resetBtn = screen.getByText("Reset");
        const counterValue = screen.getByRole("paragraph");

        // Increase counter first
        fireEvent.click(increaseBtn);
        fireEvent.click(increaseBtn);
        expect(counterValue).toHaveTextContent("2");

        // Then reset
        fireEvent.click(resetBtn);
        expect(counterValue).toHaveTextContent("0");
    });

    // Test counter decrease functionality
    it("should decrease counter when Decrease button is clicked", function () {
        render(
            <CounterProvider>
                <Counter />
            </CounterProvider>
        );

        const increaseBtn = screen.getByText("Increase");
        const decreaseBtn = screen.getByText("Decrease");
        const counterValue = screen.getByRole("paragraph");

        // Increase first to have something to decrease
        fireEvent.click(increaseBtn);
        fireEvent.click(increaseBtn);
        expect(counterValue).toHaveTextContent("2");

        // Then decrease
        fireEvent.click(decreaseBtn);
        expect(counterValue).toHaveTextContent("1");
    });
});
