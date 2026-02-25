import { renderHook, waitFor } from "@testing-library/react";
import { useFetchPost } from "./useFetchPost";

describe("useFetchPost", () => {
    it("posts and returns data", async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ data: { result: [{ id: 2 }] } }),
        });

        const { result } = renderHook(() =>
            useFetchPost({ url: "/api/post", body: { q: 1 } }),
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.data).toEqual([{ id: 2 }]);
    });

    it("handles post request errors", async () => {
        const onRequestError = vi.fn();
        global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 403 });

        const { result } = renderHook(() =>
            useFetchPost({ url: "/api/post", onRequestError }),
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(onRequestError).toHaveBeenCalled();
        expect(result.current.isError).toContain("403");
    });
});
