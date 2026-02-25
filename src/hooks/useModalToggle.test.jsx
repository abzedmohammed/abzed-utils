import { renderHook, act } from "@testing-library/react";
import { useModalToggle } from "./useModalToggle";

describe("useModalToggle", () => {
    it("opens and closes modal state", () => {
        const { result } = renderHook(() => useModalToggle());

        expect(result.current.open).toBe(false);

        act(() => {
            result.current.handleOpen();
        });
        expect(result.current.open).toBe(true);

        act(() => {
            result.current.handleCancel();
        });
        expect(result.current.open).toBe(false);
    });
});
