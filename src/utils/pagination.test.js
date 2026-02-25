import { pagination } from "./pagination";

describe("pagination utils", () => {
    it("builds config and updates pagination state on change", () => {
        const setCurrentPage = vi.fn();
        const setLimit = vi.fn();
        const setStart = vi.fn();
        const scrollSpy = vi.spyOn(window, "scrollTo").mockImplementation(() => {});

        const config = pagination({
            currentPage: 1,
            limit: 10,
            total: 100,
            setCurrentPage,
            setLimit,
            setStart,
        });

        expect(config.current).toBe(1);
        expect(config.pageSize).toBe(10);
        expect(config.total).toBe(100);

        config.onChange(3, 20);
        expect(setCurrentPage).toHaveBeenCalledWith(3);
        expect(setLimit).toHaveBeenCalledWith(20);
        expect(setStart).toHaveBeenCalledWith(40);
        expect(scrollSpy).toHaveBeenCalledWith(0, 0);

        scrollSpy.mockRestore();
    });
});
