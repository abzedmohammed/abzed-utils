import { validatePassword, isValidCoordinate } from "./validation";

describe("validation utils", () => {
    it("validates password rules", () => {
        expect(validatePassword("short")).toMatch("at least 8");
        expect(validatePassword("lowercase123!")).toMatch("uppercase");
        expect(validatePassword("NoNumber!")).toMatch("number");
        expect(validatePassword("NoSpecial123")).toMatch("special");
        expect(validatePassword("StrongPass1!")).toBe(true);
    });

    it("validates coordinates", () => {
        expect(isValidCoordinate("-1.29210", "WGS84", "latitude")).toBe(true);
        expect(isValidCoordinate("36.82190", "WGS84", "longitude")).toBe(true);
        expect(isValidCoordinate("36.82", "WGS84", "longitude")).toBe(false);
        expect(isValidCoordinate("100.12345", "WGS84", "longitude")).toBe(false);
        expect(isValidCoordinate("1.12345", "UNKNOWN", "latitude")).toBe(false);
    });
});
