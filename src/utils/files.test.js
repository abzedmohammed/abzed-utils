import { createBeforeUpload } from "./files";

describe("files utils", () => {
    it("accepts allowed type and size", () => {
        const validator = createBeforeUpload(["image/png"], 2);
        const file = { type: "image/png", size: 500 * 1024 };
        expect(validator(file)).toBe(true);
    });

    it("rejects invalid type and calls callback", () => {
        const onValidationError = vi.fn();
        const validator = createBeforeUpload(["image/png"], 2, onValidationError);
        const file = { type: "image/jpeg", size: 500 * 1024 };

        expect(validator(file)).toBe(false);
        expect(onValidationError).toHaveBeenCalledTimes(1);
    });

    it("rejects oversized file", () => {
        const onValidationError = vi.fn();
        const validator = createBeforeUpload(["image/png"], 1, onValidationError);
        const file = { type: "image/png", size: 2 * 1024 * 1024 };

        expect(validator(file)).toBe(false);
        expect(onValidationError).toHaveBeenCalledTimes(1);
    });
});
