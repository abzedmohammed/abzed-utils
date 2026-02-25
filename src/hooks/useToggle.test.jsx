import { renderHook, act } from "@testing-library/react";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
    it("toggles state", () => {
        const { result } = renderHook(() => useToggle(false));

        expect(result.current.show).toBe(false);

        act(() => {
            result.current.toggle();
        });

        expect(result.current.show).toBe(true);
    });
});
