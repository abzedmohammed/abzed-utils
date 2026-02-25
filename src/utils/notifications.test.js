import { onSuccess, onError } from "./notifications";

describe("notifications utils", () => {
    it("uses notify function when provided", () => {
        const notifyFn = vi.fn();

        onSuccess("Done", notifyFn);
        onError("Failed", notifyFn);

        expect(notifyFn).toHaveBeenNthCalledWith(1, { id: 1, message: "Done" });
        expect(notifyFn).toHaveBeenNthCalledWith(2, { id: 2, message: "Failed" });
    });

    it("falls back to console output", () => {
        const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
        const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

        onSuccess("Done");
        onError("Failed");

        expect(warnSpy).toHaveBeenCalled();
        expect(errorSpy).toHaveBeenCalled();

        warnSpy.mockRestore();
        errorSpy.mockRestore();
    });
});
