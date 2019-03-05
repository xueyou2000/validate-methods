import { IsTime, IsDateFormat, IsDateISO } from "../src";

test("IsTime", () => {
    expect(IsTime("00:00:00")).toBeTruthy();
    expect(IsTime("10:32:33")).toBeTruthy();
    expect(IsTime("23:59:59")).toBeTruthy();
    expect(IsTime("24:00:00")).toBeFalsy();
});

test("IsDateFormat", () => {
    expect(IsDateFormat("2019-03-26")).toBeTruthy();
    expect(IsDateFormat("2019-00-11")).toBeFalsy();
    expect(IsDateFormat("2019-13-11")).toBeFalsy();
    expect(IsDateFormat("2019-01-31")).toBeTruthy();
    expect(IsDateFormat("2019-01-32")).toBeFalsy();
    expect(IsDateFormat("2019-13-11 10:32:33")).toBeFalsy();
});

test("IsDateISO", () => {
    expect(IsDateISO("2019-12-11 10:32:33")).toBeTruthy();
    expect(IsDateISO("2019-03-26 00:32:33")).toBeTruthy();
    expect(IsDateISO("2019-00-11 10:32:33")).toBeFalsy();
    expect(IsDateISO("2019-13-11 10:32:33")).toBeFalsy();
    expect(IsDateISO("2019-01-31 10:32:33")).toBeTruthy();
    expect(IsDateISO("2019-01-32 10:32:33")).toBeFalsy();
});
