import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "./useFetch";

describe("useFetch", () => {
    it("fetches and returns data", async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ data: { result: [{ id: 1 }] } }),
        });

        const { result } = renderHook(() => useFetch({ url: "/api/items" }));

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.data).toEqual([{ id: 1 }]);
        expect(result.current.isError).toBe("");
    });

    it("handles request errors", async () => {
        const onRequestError = vi.fn();
        global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 401 });

        const { result } = renderHook(() =>
            useFetch({ url: "/api/items", onRequestError }),
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(onRequestError).toHaveBeenCalled();
        expect(result.current.isError).toBe("Request failed");
    });

    it("supports a custom data extractor", async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ payload: { items: [{ id: 9 }] } }),
        });

        const { result } = renderHook(() =>
            useFetch({
                url: "/api/items",
                extractData: (response) => response?.payload?.items,
            }),
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.data).toEqual([{ id: 9 }]);
    });

    it("uses a custom error message extractor from the response body", async () => {
        const onRequestError = vi.fn();
        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
            status: 400,
            json: async () => ({ message: "Invalid request" }),
        });

        const { result } = renderHook(() =>
            useFetch({ url: "/api/items", onRequestError }),
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(onRequestError).toHaveBeenCalled();
        expect(result.current.isError).toBe("Invalid request");
    });
});
