import { fireEvent, render, screen } from "@testing-library/react";
import { DynamicBtn } from "./DynamicBtn";
import { EmptyState } from "./EmptyState";
import { StatusBtn } from "./StatusBtn";
import { TextDynamic } from "./TextDynamic";
import { DynamicDrawer } from "./DynamicDrawer";

describe("dynamic components", () => {
    it("renders DynamicBtn and handles click", () => {
        const onClick = vi.fn();
        render(<DynamicBtn onClick={onClick} text="Save" />);

        fireEvent.click(screen.getByRole("button", { name: "Save" }));
        expect(onClick).toHaveBeenCalled();
    });

    it("renders EmptyState and text/status", () => {
        render(
            <>
                <EmptyState description="No data" />
                <StatusBtn status={{ statusName: "Active", color: "green" }} />
                <TextDynamic text="Hello" tagName="p" />
            </>,
        );

        expect(screen.getAllByText("No data").length).toBeGreaterThan(0);
        expect(screen.getByText("Active")).toBeTruthy();
        expect(screen.getByText("Hello")).toBeTruthy();
    });

    it("renders DynamicDrawer content when open", () => {
        render(
            <DynamicDrawer open title={<div>Drawer Title</div>}>
                <div>Drawer Body</div>
            </DynamicDrawer>,
        );

        expect(screen.getByText("Drawer Title")).toBeTruthy();
        expect(screen.getByText("Drawer Body")).toBeTruthy();
    });
});
