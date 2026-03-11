import { render, screen } from "@testing-library/react";
import { DynamicFileInput } from "./DynamicFileInput";

vi.mock("react-redux", () => ({
    useDispatch: () => vi.fn(async () => ({ payload: { success: true, targetUrl: "x" } })),
}));

describe("DynamicFileInput", () => {
    it("renders upload trigger body", () => {
        render(
            <DynamicFileInput
                label="File"
                uploadFile={() => ({ type: "UPLOAD" })}
                body={<span>Upload File</span>}
            />,
        );

        expect(screen.getByText("Upload File")).toBeTruthy();
    });
});
