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

    it("supports a custom data extractor", async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ payload: { items: [{ id: 7 }] } }),
        });

        const { result } = renderHook(() =>
            useFetchPost({
                url: "/api/post",
                extractData: (response) => response?.payload?.items,
            }),
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.data).toEqual([{ id: 7 }]);
    });

    it("uses a custom error message extractor from the response body", async () => {
        const onRequestError = vi.fn();
        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
            status: 400,
            json: async () => ({ message: "Validation failed" }),
        });

        const { result } = renderHook(() =>
            useFetchPost({ url: "/api/post", onRequestError }),
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(onRequestError).toHaveBeenCalled();
        expect(result.current.isError).toBe("Validation failed");
    });
});
