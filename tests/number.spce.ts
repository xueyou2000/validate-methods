import { IsDigits, IsStep, Amount } from "../src";

test('IsDigits', () => {
  expect(IsDigits(0)).toBeTruthy();
  expect(IsDigits(55)).toBeTruthy();
  expect(IsDigits('33')).toBeTruthy();
  expect(IsDigits(55.33)).toBeFalsy();
  expect(IsDigits('00.55')).toBeFalsy();
});

test('IsStep', () => {
  expect(IsStep(4, 2)).toBeTruthy();
  expect(IsStep(16, 8)).toBeTruthy();
  expect(IsStep(3, 2)).toBeFalsy();
});

test('Amount', () => {
  expect(Amount(2134321.3345)).toBeTruthy()
  expect(Amount(0, true)).toBeTruthy()
  expect(Amount(0)).toBeFalsy()
  expect(Amount(2131321.3345, false, 4)).toBeTruthy()
  expect(Amount(2134221.33453, false, 4)).toBeFalsy()

  expect(Amount("2134221.3345")).toBeTruthy()
  expect(Amount("0", true)).toBeTruthy()
  expect(Amount("0")).toBeFalsy()
  expect(Amount("2134321.3345", false, 4)).toBeTruthy()
  expect(Amount("2134221.33453", false, 4)).toBeFalsy()
});