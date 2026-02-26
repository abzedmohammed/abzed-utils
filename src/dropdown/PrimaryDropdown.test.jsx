import { fireEvent, render, screen } from "@testing-library/react";
import PrimaryDropdown from "./PrimaryDropdown";

describe("PrimaryDropdown", () => {
    it("renders trigger button", () => {
        render(
            <PrimaryDropdown
                items={[{ key: "1", label: "Profile" }]}
            >
                <button type="button">Open Menu</button>
            </PrimaryDropdown>,
        );

        expect(screen.getByRole("button", { name: "Open Menu" })).toBeTruthy();
    });
});
