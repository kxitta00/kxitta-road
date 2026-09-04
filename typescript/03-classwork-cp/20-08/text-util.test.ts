import { expect, test } from "bun:test";

//create a test case for reverseText function
import { reverseText } from "./text-util";
test("reverseText should reverse the input text and remove spaces", () => {
    const testCases = [
        { input: "Hello World", expected: "dlroWolleH" },
        { input: "TypeScript", expected: "tpircSepyT" },
        { input: "12345", expected: "54321" },
        { input: "a", expected: "a" },
        { input: "ab", expected: "ba" },
        { input: "abc", expected: "cba" },
        { input: "abcd", expected: "dcba" },
        { input: "abcde", expected: "edcba" },
        { input: "abcdef", expected: "fedcba" },
        { input: "abcdefg", expected: "gfedcba" }
    ];

    testCases.forEach(({ input, expected }) => {
        expect(reverseText(input)).toBe(expected);
    });
});

test("reverseText should return an empty string for an empty input", () => {
    const input = "";
    const expectedOutput = "";
    const actualOutput = reverseText(input);
    expect(actualOutput).toBe(expectedOutput);
});

test("reverseText should handle strings with only spaces", () => {
    const input = "     ";
    const expectedOutput = "";
    const actualOutput = reverseText(input);
    expect(actualOutput).toBe(expectedOutput);
});

test("reverseText should handle strings with leading and trailing spaces", () => {
    const input = "  Hello  ";
    const expectedOutput = "olleH";
    const actualOutput = reverseText(input);
    expect(actualOutput).toBe(expectedOutput);
});

test("reverseText should handle strings with multiple spaces between words", () => {
    const input = "Hello   World";
    const expectedOutput = "dlroWolleH";
    const actualOutput = reverseText(input);
    expect(actualOutput).toBe(expectedOutput);
});

//create a test case for reverseTextWithSpaces function
import { reverseTextWithSpaces } from "./text-util";

test("reverseTextWithSpaces should reverse the input text and keep spaces", () => {
    const testCases = [
        { input: "Hello World", expected: "dlroW olleH" },
        { input: "TypeScript", expected: "tpircSepyT" },
        { input: "12345", expected: "54321" },
        { input: "a", expected: "a" },
        { input: "ab", expected: "ba" },
        { input: "abc", expected: "cba" },
        { input: "abcd", expected: "dcba" },
        { input: "abcde", expected: "edcba" },
        { input: "abcdef", expected: "fedcba" },
        { input: "abcdefg", expected: "gfedcba" }
    ];

    testCases.forEach(({ input, expected }) => {
        expect(reverseTextWithSpaces(input)).toBe(expected);
    });
});

test("reverseTextWithSpaces should return an empty string for an empty input", () => {
    const input = "";
    const expectedOutput = "";
    const actualOutput = reverseTextWithSpaces(input);
    expect(actualOutput).toBe(expectedOutput);
});

test("reverseTextWithSpaces should handle strings with only spaces", () => {
    const input = "     ";
    const expectedOutput = "     ";
    const actualOutput = reverseTextWithSpaces(input);
    expect(actualOutput).toBe(expectedOutput);
});

test("reverseTextWithSpaces should handle strings with leading and trailing spaces", () => {
    const input = "  Hello  ";
    const expectedOutput = "  olleH  ";
    const actualOutput = reverseTextWithSpaces(input);
    expect(actualOutput).toBe(expectedOutput);
});

test("reverseTextWithSpaces should handle strings with multiple spaces between words", () => {
    const input = "Hello   World";
    const expectedOutput = "dlroW   olleH";
    const actualOutput = reverseTextWithSpaces(input);
    expect(actualOutput).toBe(expectedOutput);
});

//create a test case for filterText function
import { filterText } from "./text-util";

test("filterText should remove specified characters from the input text", () => {
    const testCases = [
        { input: "Hello World", filter: ["o"], expected: "Hell Wrld" },
        { input: "TypeScript", filter: ["T", "p"], expected: "yeScri" },
        { input: "12345", filter: ["1", "3", "5"], expected: "24" },
        { input: "abcdefg", filter: ["a", "e", "g"], expected: "bcdf" },
        { input: "Hello World", filter: ["H", "W"], expected: "ello orld" },
        { input: "hello", filter: ["hell"], expected: "o" },
        { input: "hello", filter: ["Hello"], expected: "hello" },
        { input: "Hello World and Mar", filter: ["World", " ", "Mar"], expected: "Helloand" }
    ];

    testCases.forEach(({ input, filter, expected }) => {
        expect(filterText(input, ...filter)).toBe(expected);
    });
});

test("filterText should return the original text if no characters are specified for filtering", () => {
    const input = "Hello World";
    const expectedOutput = "Hello World";
    const actualOutput = filterText(input);
    expect(actualOutput).toBe(expectedOutput);
});

test("filterText should return an empty string if all characters are filtered out", () => {
    const input = "Hello World";
    const filter = ["H", "e", "l", "o", " ", "W", "r", "d"];
    const expectedOutput = "";
    const actualOutput = filterText(input, ...filter);
    expect(actualOutput).toBe(expectedOutput);
});

test("filterText should handle strings with only spaces and filter out spaces", () => {
    const input = "     ";
    const filter = [" "];
    const expectedOutput = "";
    const actualOutput = filterText(input, ...filter);
    expect(actualOutput).toBe(expectedOutput);
});

test("filterText should handle strings with leading and trailing spaces and filter out spaces", () => {
    const input = "  Hello  ";
    const filter = [" "];
    const expectedOutput = "Hello";
    const actualOutput = filterText(input, ...filter);
    expect(actualOutput).toBe(expectedOutput);
});

test("filterText should handle strings with multiple spaces between words and filter out spaces", () => {
    const input = "Hello   World";
    const filter = [" "];
    const expectedOutput = "HelloWorld";
    const actualOutput = filterText(input, ...filter);
    expect(actualOutput).toBe(expectedOutput);
});