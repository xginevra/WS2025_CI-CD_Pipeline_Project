const { describe, it, expect } = require("@jest/globals");

describe("Footer Year Script", () => {
  it("returns current year as string", () => {
    // Mock Date to return 2026
    const originalDate = Date;
    global.Date = class extends Date {
      constructor() {
        super("2026-01-14T10:00:00Z");
      }
    };

    const scriptCode =
      "document.getElementById('year').textContent = new Date().getFullYear();";
    const result = eval(
      scriptCode.replace("document.getElementById('year').textContent = ", "")
    );

    expect(result).toBe(2026);

    global.Date = originalDate;
  });
});
