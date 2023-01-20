const { isEmpty, verifyLength, verifySpecial } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - verifyLength", () => {
    test("should return false if label is empty (0 length) ", () => {
        const result = verifyLength("");
        expect(result).toBe(false);
    });
    test("should return false if label is > 8", () => {
        const result = verifyLength("bonjourbonjour");
        expect(result).toBe(true);
    });
});

describe("validations tests suites - verifySpecial", () => {
    test("should return false if label has 0 special characters", () => {
        const result = verifySpecial("bonjour");
        expect(result).toBe(false);
    });
    test("should return false if label has special characters", () => {
        const result = verifySpecial("bonjour*");
        expect(result).toBe(true);
    });
});