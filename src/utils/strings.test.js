import {
    capitaliseFirstLetter,
    capitaliseAllFirstLetter,
    uppercaseLetters,
    removePlusFromPhone,
    formatPhone,
    getInitials,
    generateUniqueId,
    getOrdinal,
    splitAndJoinUnderscore,
} from "./strings";

describe("strings utils", () => {
    it("capitalises strings", () => {
        expect(capitaliseFirstLetter("abZED")).toBe("Abzed");
        expect(capitaliseAllFirstLetter("hello world")).toBe("Hello World");
        expect(uppercaseLetters("hello")).toBe("HELLO");
    });

    it("formats phone helpers", () => {
        expect(removePlusFromPhone("+254712345678")).toBe("254712345678");
        expect(formatPhone("254712345678")).toBe("0712345678");
    });

    it("builds initials and ordinals", () => {
        expect(getInitials("abzed mohammed")).toBe("AM");
        expect(getOrdinal(1)).toBe("st");
        expect(getOrdinal(2)).toBe("nd");
        expect(getOrdinal(3)).toBe("rd");
        expect(getOrdinal(4)).toBe("th");
    });

    it("generates unique id and replaces underscores", () => {
        expect(typeof generateUniqueId()).toBe("number");
        expect(splitAndJoinUnderscore("hello_world")).toBe("hello world");
    });
});
