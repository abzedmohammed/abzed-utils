import { render } from "@testing-library/react";
import { CardSkeleton } from "./CardSkeleton";

describe("CardSkeleton", () => {
    it("renders skeleton node", () => {
        const view = render(<CardSkeleton width={120} height={80} />);
        expect(view.container.querySelector(".ant-skeleton")).toBeTruthy();
    });
});
