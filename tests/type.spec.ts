import { IsNumber, IsFunction, IsArray } from "../src";

test("IsNumber", () => {
    expect(IsNumber("55.6")).toBeTruthy();
    expect(IsNumber("123456")).toBeTruthy();
    expect(IsNumber(-55.6)).toBeTruthy();
    expect(IsNumber(-123456)).toBeTruthy();

    expect(IsNumber("a123")).toBeFalsy();
    expect(IsNumber("123a")).toBeFalsy();
});

test("IsFunction", () => {
    expect(IsFunction(IsFunction)).toBeTruthy();
    expect(IsFunction(() => {})).toBeTruthy();
    expect(IsFunction("abc" as any)).toBeFalsy();
    expect(IsFunction(123 as any)).toBeFalsy();
});

test("IsArray", () => {
    expect(IsArray([1, 2, 3])).toBeTruthy();
    expect(IsArray([])).toBeTruthy();
    expect(IsArray(new Array())).toBeTruthy();
    expect(IsArray("abc" as any)).toBeFalsy();
    expect(IsArray(123 as any)).toBeFalsy();
});
