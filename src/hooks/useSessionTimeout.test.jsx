import { renderHook } from "@testing-library/react";
import { useSessionTimeout } from "./useSessionTimeout";

const navigateMock = vi.fn();

vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
}));

describe("useSessionTimeout", () => {
    it("calls logout callback after timeout", async () => {
        vi.useFakeTimers();
        const logoutCallback = vi.fn();

        renderHook(() => useSessionTimeout(logoutCallback, 100));

        vi.advanceTimersByTime(120);

        expect(logoutCallback).toHaveBeenCalled();
        expect(navigateMock).toHaveBeenCalledWith("/auth/login");

        vi.useRealTimers();
    });
});
