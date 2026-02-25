import { queryClient } from "./queryClient";

describe("queryClient", () => {
    it("has expected default query options", () => {
        const defaults = queryClient.getDefaultOptions();

        expect(defaults.queries.staleTime).toBe(5 * 60 * 1000);
        expect(defaults.queries.gcTime).toBe(10 * 60 * 1000);
        expect(defaults.queries.refetchOnWindowFocus).toBe(false);
        expect(defaults.queries.retry).toBe(1);
        expect(defaults.mutations.retry).toBe(0);
    });
});
