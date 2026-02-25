import { renderHook, act } from "@testing-library/react";
import { useNetworkStatus } from "./useNetwork";

describe("useNetworkStatus", () => {
    it("tracks online/offline events", () => {
        Object.defineProperty(navigator, "onLine", {
            configurable: true,
            get: () => true,
        });

        const { result } = renderHook(() => useNetworkStatus());
        expect(result.current.isOnline).toBe(true);

        Object.defineProperty(navigator, "onLine", {
            configurable: true,
            get: () => false,
        });

        act(() => {
            window.dispatchEvent(new Event("offline"));
        });

        expect(result.current.isOnline).toBe(false);
    });
});
