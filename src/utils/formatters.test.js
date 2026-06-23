import {
    formatMoney,
    formatFileSize,
    formatFileName,
    formatImgPath,
    formatTime,
    formatToLocalDateTime,
    formatNumberAddComma,
} from "./formatters";

describe("formatters utils", () => {
    it("formats money", () => {
        const value = formatMoney(1234.5, "KES");
        expect(value).toContain("1,234.50");
    });

    it("formats money with currency code, commas and two decimals", () => {
        expect(formatMoney(2000, "KES")).toBe("KES 2,000.00");
        expect(formatMoney(0)).toBe("KES 0.00");
        expect(formatMoney(1234567.5, "USD")).toBe("USD 1,234,567.50");
    });

    it("formats file size", () => {
        expect(formatFileSize(0)).toBe("0 Bytes");
        expect(formatFileSize(1024)).toBe("1.00 KB");
        expect(formatFileSize(1024 * 1024)).toBe("1.00 MB");
    });

    it("formats file name", () => {
        expect(formatFileName("avatar_user.png")).toBe("user.png");
        expect(formatFileName("")).toBe("");
    });

    it("formats image path for relative and domain", () => {
        expect(formatImgPath("https://cdn/img.png")).toBe("https://cdn/img.png");
        expect(formatImgPath("./images/a.png")).toBe("/images/a.png");
        expect(
            formatImgPath({ path: "./images/a.png", domain: "assets.example.com" }),
        ).toBe("http://assets.example.com/images/a.png");
    });

    it("formats time", () => {
        expect(formatTime("10:20:30")).toBe("10:20");
        expect(formatTime("10:20")).toBe("10:20");
        expect(formatTime()).toBe("");
    });

    it("formats dayjs-like datetime", () => {
        const dayjsLike = {
            tz: vi.fn(() => ({
                format: vi.fn(() => "2026-02-25T13:00:00"),
            })),
        };

        expect(formatToLocalDateTime(dayjsLike)).toBe("2026-02-25T13:00:00");
        expect(dayjsLike.tz).toHaveBeenCalledWith("Africa/Nairobi");
    });

    it("formats number with commas", () => {
        expect(formatNumberAddComma(1234567)).toBe("1,234,567");
        expect(formatNumberAddComma(null)).toBeUndefined();
    });
});
