import { getStatusObj } from "./status";

describe("status utils", () => {
    it("returns matching status object", () => {
        const result = getStatusObj("active");
        expect(result.status).toBe("ACTIVE");
        expect(result.statusName).toBe("Active");
    });

    it("returns fallback for unknown status", () => {
        const result = getStatusObj("missing_status");
        expect(result.status).toBe("N/A");
    });
});
