import {
    defaultDropdownOverlayStyle,
    transparentDropdownOverlayStyle,
    defaultInputStyle,
    minDateOfBirth,
} from "./constants";

describe("constants utils", () => {
    it("has dropdown style defaults", () => {
        expect(defaultDropdownOverlayStyle.background).toBe("#FFF");
        expect(transparentDropdownOverlayStyle.background).toBe("transparent");
    });

    it("returns default input style with overrides", () => {
        expect(defaultInputStyle({})).toEqual({
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: ".625rem",
        });

        expect(defaultInputStyle({ width: "50%", gap: "1rem" })).toEqual({
            display: "flex",
            flexDirection: "column",
            width: "50%",
            gap: "1rem",
        });
    });

    it("exposes minDateOfBirth string", () => {
        expect(minDateOfBirth).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
});
