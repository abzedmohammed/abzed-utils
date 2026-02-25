import { Form } from "antd";
import { fireEvent, render, screen } from "@testing-library/react";
import { MainSearch } from "./MainSearch";
import { NormalInput } from "./NormalInput";
import { NormalInputNumber } from "./NormalInputNumber";
import { NormalInputTextArea } from "./NormalInputTextArea";
import { OTPInput } from "./OTPInput";
import { FormInput } from "./FormInput";
import { FormInputEmail } from "./FormInputEmail";
import { FormInputPassword } from "./FormInputPassword";
import { FormInputTextArea } from "./FormInputTextArea";

describe("inputs", () => {
    it("handles MainSearch change", () => {
        const onSearchChange = vi.fn();
        render(<MainSearch value="" onSearchChange={onSearchChange} placeholder="Search" />);

        fireEvent.change(screen.getByPlaceholderText("Search"), {
            target: { value: "abc" },
        });

        expect(onSearchChange).toHaveBeenCalledWith("abc");
    });

    it("handles normal input change", () => {
        const onValueChange = vi.fn();
        render(
            <NormalInput
                value=""
                inputName="name"
                onValueChange={onValueChange}
                placeholder="Name"
            />,
        );

        fireEvent.change(screen.getByPlaceholderText("Name"), {
            target: { value: "Abzed" },
        });

        expect(onValueChange).toHaveBeenCalledWith("Abzed", "name", undefined);
    });

    it("renders number and textarea inputs", () => {
        render(
            <>
                <NormalInputNumber value={1} placeholder="Age" />
                <NormalInputTextArea value="hello" placeholder="Bio" />
            </>,
        );

        expect(screen.getByPlaceholderText("Age")).toBeTruthy();
        expect(screen.getByPlaceholderText("Bio")).toBeTruthy();
    });

    it("renders OTPInput", () => {
        render(<OTPInput onChange={vi.fn()} />);

        expect(screen.getAllByRole("textbox").length).toBeGreaterThan(0);
    });

    it("renders form-bound inputs", () => {
        render(
            <Form>
                <FormInput inputName="name" label="Name" placeholder="Name" />
                <FormInputEmail inputName="email" label="Email" placeholder="Email" />
                <FormInputPassword inputName="password" label="Password" placeholder="Password" />
                <FormInputTextArea inputName="note" label="Note" placeholder="Note" />
            </Form>,
        );

        expect(screen.getByPlaceholderText("Name")).toBeTruthy();
        expect(screen.getByPlaceholderText("Email")).toBeTruthy();
        expect(screen.getByPlaceholderText("Password")).toBeTruthy();
        expect(screen.getByPlaceholderText("Note")).toBeTruthy();
    });
});
