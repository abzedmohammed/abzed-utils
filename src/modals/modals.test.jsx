import { render, screen } from "@testing-library/react";
import { PrimaryModal } from "./PrimaryModal";
import { ActionModal } from "./ActionModal";

describe("modals", () => {
    it("renders PrimaryModal", () => {
        render(
            <PrimaryModal open header={<div>Header</div>}>
                <div>Body</div>
            </PrimaryModal>,
        );

        expect(screen.getByText("Header")).toBeTruthy();
        expect(screen.getByText("Body")).toBeTruthy();
    });

    it("renders ActionModal", () => {
        render(
            <ActionModal
                open
                icon={<div>Icon</div>}
                header={<div>Action Header</div>}
                actions={<button type="button">Confirm</button>}
            />,
        );

        expect(screen.getByText("Icon")).toBeTruthy();
        expect(screen.getByText("Action Header")).toBeTruthy();
        expect(screen.getByRole("button", { name: "Confirm" })).toBeTruthy();
    });
});
