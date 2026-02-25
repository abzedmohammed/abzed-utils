import { quillModules, quillFormats } from "./quill";

describe("quill config", () => {
    it("contains toolbar config", () => {
        expect(Array.isArray(quillModules.toolbar)).toBe(true);
        expect(quillModules.toolbar.length).toBeGreaterThan(0);
    });

    it("contains supported formats", () => {
        expect(quillFormats).toContain("bold");
        expect(quillFormats).toContain("image");
    });
});
