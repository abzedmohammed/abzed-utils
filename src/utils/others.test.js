import { handleMenuClick, removeEmptyChildren, handleOpenChange } from "./others";

describe("others utils", () => {
    it("handles menu click for route", () => {
        const navigate = vi.fn();
        const onClose = vi.fn();

        handleMenuClick({ key: "/dashboard", navigate, onClose });

        expect(navigate).toHaveBeenCalledWith("/dashboard");
        expect(onClose).toHaveBeenCalled();
    });

    it("handles menu click for external links", () => {
        const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
        const onClose = vi.fn();

        handleMenuClick({ key: "https://example.com", navigate: vi.fn(), onClose });

        expect(openSpy).toHaveBeenCalledWith("https://example.com", "_blank");
        expect(onClose).toHaveBeenCalled();
        openSpy.mockRestore();
    });

    it("removes empty children recursively", () => {
        const input = [
            { id: 1, children: [] },
            { id: 2, children: [{ id: 3, children: [] }] },
        ];

        const result = removeEmptyChildren(input);
        expect(result[0].children).toBeUndefined();
        expect(result[1].children[0].children).toBeUndefined();
    });

    it("sets state only when open", () => {
        const setState = vi.fn();
        handleOpenChange(true, { id: 1 }, setState);
        handleOpenChange(false, { id: 2 }, setState);

        expect(setState).toHaveBeenCalledTimes(1);
        expect(setState).toHaveBeenCalledWith({ id: 1 });
    });
});
