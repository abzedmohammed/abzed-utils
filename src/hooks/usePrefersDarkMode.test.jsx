import { renderHook, act } from "@testing-library/react";
import { usePrefersDarkMode } from "./usePrefersDarkMode";

const createMatchMedia = (initial) => {
    let matches = initial;
    let listener = null;

    return {
        get matches() {
            return matches;
        },
        addEventListener: vi.fn((event, cb) => {
            if (event === "change") listener = cb;
        }),
        removeEventListener: vi.fn(),
        trigger(nextValue) {
            matches = nextValue;
            listener?.({ matches: nextValue });
        },
    };
};

describe("usePrefersDarkMode", () => {
    it("reads and reacts to dark mode preference", () => {
        const mq = createMatchMedia(false);
        window.matchMedia = vi.fn(() => mq);

        const { result } = renderHook(() => usePrefersDarkMode());
        expect(result.current).toBe(false);

        act(() => {
            mq.trigger(true);
        });

        expect(result.current).toBe(true);
    });
});
