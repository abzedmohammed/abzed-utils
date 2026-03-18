import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, renderHook, waitFor } from "@testing-library/react";
import { usePaginatedQuery } from "./usePaginatedQuery";

const createWrapper = () => {
    const client = new QueryClient({
        defaultOptions: { queries: { retry: false } },
    });

    return ({ children }) => (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
};

describe("usePaginatedQuery", () => {
    it("returns paginated data and updates search", async () => {
        const queryFn = vi.fn(async () => ({
            data: { total: 1, data: { result: [{ id: 1, name: "A" }] } },
        }));

        const { result } = renderHook(
            () =>
                usePaginatedQuery({
                    queryConfig: { queryKey: ["items"], queryFn },
                    searchDelay: 10,
                }),
            { wrapper: createWrapper() },
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.total).toBe(1);
        expect(result.current.dataList).toEqual([{ id: 1, name: "A" }]);

        act(() => {
            result.current.setSearch("ab");
        });

        await waitFor(() => {
            expect(queryFn).toHaveBeenCalled();
        });
    });

    it("preserves non-array extracted data", async () => {
        const queryFn = vi.fn(async () => ({
            data: { total: 1, data: { result: { id: 1, name: "A" } } },
        }));

        const { result } = renderHook(
            () =>
                usePaginatedQuery({
                    queryConfig: { queryKey: ["item"], queryFn },
                    searchDelay: 10,
                }),
            { wrapper: createWrapper() },
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.dataList).toEqual({ id: 1, name: "A" });
    });
});
