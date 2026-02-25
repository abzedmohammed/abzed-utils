import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useFormModal } from "./useFormModal";

vi.mock("react-router-dom", () => ({
    useNavigate: () => vi.fn(),
}));

vi.mock("react-redux", () => ({
    useDispatch: () => vi.fn(),
}));

const createWrapper = () => {
    const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
    return ({ children }) => (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
};

describe("useFormModal", () => {
    it("submits and calls onSuccess + onClose", async () => {
        const onClose = vi.fn();
        const onSuccess = vi.fn();

        const { result } = renderHook(
            () =>
                useFormModal({
                    mutation: {
                        mutationFn: async () => ({ data: { success: true, data: { id: 1 } } }),
                    },
                    onSuccess,
                    onClose,
                    open: true,
                    initialValues: { name: "Abzed" },
                }),
            { wrapper: createWrapper() },
        );

        act(() => {
            result.current.handleSubmit({ name: "Abzed" });
        });

        await waitFor(() => {
            expect(onSuccess).toHaveBeenCalled();
        });

        expect(onClose).toHaveBeenCalled();
    });
});
