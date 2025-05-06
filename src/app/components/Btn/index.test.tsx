import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Btn } from "@/app/components/Btn";

describe("Btn Component", function () {
    const children = "Some text";

    // Test basic rendering and children
    it("should render children correctly", function () {
        render(<Btn>{children}</Btn>);
        expect(screen.getByText(children)).toBeInTheDocument();
    });

    // Test default type attribute
    it("should have default type 'button'", function () {
        render(<Btn>{children}</Btn>);
        expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });

    // Test custom type attribute
    it("should accept and use custom type", function () {
        const type = "submit";
        render(<Btn type={type}>{children}</Btn>);
        expect(screen.getByRole("button")).toHaveAttribute("type", type);
    });

    // Test Tailwind class merging
    it("should merge base styles with custom classes", function () {
        const customClass = "bg-black";
        render(<Btn className={customClass}>{children}</Btn>);
        const btn = screen.getByRole("button");
        // Base styles verification
        const baseStyles = [
            "px-6",
            "py-3",
            "text-white",
            "font-bold",
            "rounded-lg",
            "shadow-md",
            "hover:shadow-lg",
            "transition-all",
            "duration-200",
            "transform",
            "hover:-translate-y-1",
            "active:scale-95",
            "focus:outline-none",
            "focus:ring-2",
            "focus:ring-opacity-50",
            "lg:hover:cursor-pointer",
        ];
        baseStyles.forEach(function (className) {
            expect(btn).toHaveClass(className);
        });
        // Custom class verification
        expect(btn).toHaveClass(customClass);
    });

    // Test click handler
    it("should trigger onClick when clicked", async function () {
        const handleClick = jest.fn();
        render(<Btn onClick={handleClick}>{children}</Btn>);
        const btn = screen.getByRole("button");
        fireEvent.click(btn);
        expect(handleClick).toHaveBeenCalled();
    });

    it("should pass through other HTML attributes", function () {
        const lang = "pt-br";
        render(<Btn lang={lang}>{children}</Btn>);
        expect(screen.getByRole("button")).toHaveAttribute("lang", lang);
    });
});
