import { MinLength, MaxLength, RangeLength, Min, Max, Range, Pattern, Required, EqualLength } from "../src";

test("Required", () => {
    expect(Required("")).toBeFalsy();
    expect(Required(0)).toBeTruthy();
    expect(Required([])).toBeFalsy();
});

test("MinLength", () => {
    expect(MinLength("abcdef", 10)).toBeTruthy();
    expect(MinLength("77777", 5, true)).toBeTruthy();
    expect(MinLength("77777", 5)).toBeTruthy();
    expect(MinLength("77777", 5, false)).toBeFalsy();
});

test("MaxLength", () => {
    expect(MaxLength("abcdef", 5)).toBeTruthy();
    expect(MaxLength("77777", 5, true)).toBeTruthy();
    expect(MaxLength("77777", 5)).toBeTruthy();
    expect(MaxLength("77777", 5, false)).toBeFalsy();
});

test("RangeLength", () => {
    expect(RangeLength("abcde", 3, 7)).toBeTruthy();
    expect(RangeLength("abcde", 3, 5)).toBeTruthy();
    expect(RangeLength("abcde", 5, 5)).toBeTruthy();
    expect(RangeLength("abcde", 3, 5, true)).toBeTruthy();
});

test("EqualLength", () => {
    expect(EqualLength("abcde", 3)).toBeFalsy();
    expect(EqualLength("123456", 6)).toBeTruthy();
    // 不允许传入空字符串
    expect(EqualLength("", 0)).toBeFalsy();
});

test("Min", () => {
    expect(Min(10, 20)).toBeTruthy();
    expect(Min(10, 10)).toBeTruthy();
    expect(Min(10, 10, true)).toBeTruthy();
    expect(Min(10, 10, false)).toBeFalsy();
});

test("Max", () => {
    expect(Max(10, 5)).toBeTruthy();
    expect(Max(10, 10)).toBeTruthy();
    expect(Max(10, 10, true)).toBeTruthy();
    expect(Max(10, 10, false)).toBeFalsy();
});

test("Range", () => {
    expect(Range(5, 1, 10)).toBeTruthy();
    expect(Range(5, 5, 10)).toBeTruthy();
    expect(Range(10, 5, 10, true)).toBeTruthy();
    expect(Range(5, 10, 10, false)).toBeFalsy();
    expect(Range(5, 12, 10)).toBeFalsy();
});

test("Pattern", () => {
    expect(Pattern("abcd", /abcd/)).toBeTruthy();
    expect(Pattern("abcd", /abcde/)).toBeFalsy();
    expect(Pattern("abcd", "abcd")).toBeTruthy();
});
