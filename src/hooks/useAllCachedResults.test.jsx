import { QueryClientProvider } from "@tanstack/react-query";
import { act, renderHook, waitFor } from "@testing-library/react";
import { queryClient } from "../queryClient";
import { useAllCachedResults } from "./useAllCachedResults";

const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useAllCachedResults", () => {
    it("collects all cached query results by base key", async () => {
        queryClient.setQueryData(["users", 1], { items: [{ id: 1 }] });
        queryClient.setQueryData(["users", 2], { items: [{ id: 2 }] });

        const { result } = renderHook(
            () =>
                useAllCachedResults({
                    baseKey: "users",
                    extractor: (state) => state?.data?.items,
                }),
            {
                wrapper,
            },
        );

        await waitFor(() => {
            expect(result.current.length).toBe(2);
        });

        expect(result.current).toEqual([{ id: 1 }, { id: 2 }]);

        act(() => {
            queryClient.removeQueries({ queryKey: ["users"] });
        });
    });
});
