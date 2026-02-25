import { render, screen } from "@testing-library/react";
import { AntdForm } from "./AntdForm";

describe("AntdForm", () => {
    it("renders children", () => {
        render(
            <AntdForm formName="test-form">
                <div>Form Body</div>
            </AntdForm>,
        );

        expect(screen.getByText("Form Body")).toBeTruthy();
    });
});
