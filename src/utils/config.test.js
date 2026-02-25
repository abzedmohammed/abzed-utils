import { getEnv, setLogo, getLogo, defaultTimer } from "./config";

describe("config utils", () => {
    it("returns fallback for missing env", () => {
        expect(getEnv("THIS_DOES_NOT_EXIST", "fallback")).toBe("fallback");
    });

    it("sets and gets logo", () => {
        setLogo("logo-path.png");
        expect(getLogo()).toBe("logo-path.png");
    });

    it("exposes numeric default timer", () => {
        expect(Number.isNaN(defaultTimer)).toBe(false);
    });
});
