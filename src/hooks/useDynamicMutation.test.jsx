import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useDynamicMutation } from "./useDynamicMutation";

const navigateMock = vi.fn();
const dispatchMock = vi.fn();

vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
}));

vi.mock("react-redux", () => ({
    useDispatch: () => dispatchMock,
}));

const createWrapper = () => {
    const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });

    return ({ children }) => (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
};

describe("useDynamicMutation", () => {
    it("handles success and redirect", async () => {
        const onSuccess = vi.fn();

        const { result } = renderHook(
            () =>
                useDynamicMutation({
                    mutationFn: async () => ({ data: { success: true, message: "ok" } }),
                    onSuccess,
                    redirectTo: "/dashboard",
                }),
            { wrapper: createWrapper() },
        );

        act(() => {
            result.current.mutate({});
        });

        await waitFor(() => {
            expect(onSuccess).toHaveBeenCalled();
        });

        expect(navigateMock).toHaveBeenCalledWith("/dashboard");
    });

    it("handles backend error payload", async () => {
        const onError = vi.fn();
        const { result } = renderHook(
            () =>
                useDynamicMutation({
                    mutationFn: async () => ({ data: { success: false, message: "bad" } }),
                    onError,
                }),
            { wrapper: createWrapper() },
        );

        act(() => {
            result.current.mutate({});
        });

        await waitFor(() => {
            expect(onError).toHaveBeenCalled();
        });
    });
});
