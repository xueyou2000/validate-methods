import { 
  IsEmail, 
  IsNumber, 
  IsFunction, 
  IsArray, 
  IsUrl,
  IsTime,
  IsDateFormat,
  IsDateISO,
  IsDigits,
  IsStep,
  MinLength,
  MaxLength,
  RangeLength,
  Min,
  Max,
  Range,
  AcceptSuffix,
  Pattern,
  ZipCode,
  Tel,
  Chinese,
  NotChinese,
  BankCard,
  Amount,
  IdCardNo,
  Required, } from '../src/index';

test('IsEmail', () => {
  expect(IsEmail('123456.com')).toBeFalsy();
  expect(IsEmail('xueyoucd@gmail.com')).toBeTruthy();
});

test('IsNumber', () => {

  expect(IsNumber('55.6')).toBeTruthy();
  expect(IsNumber('123456')).toBeTruthy();
  expect(IsNumber(-55.6)).toBeTruthy();
  expect(IsNumber(-123456)).toBeTruthy();

  expect(IsNumber('a123')).toBeFalsy();
  expect(IsNumber('123a')).toBeFalsy();
});

test('IsFunction', () => {
  expect(IsFunction(IsFunction)).toBeTruthy();
  expect(IsFunction(() => {})).toBeTruthy();
  expect(IsFunction('abc' as any)).toBeFalsy();
  expect(IsFunction(123 as any)).toBeFalsy();
});

test('IsArray', () => {
  expect(IsArray([1, 2, 3])).toBeTruthy();
  expect(IsArray([])).toBeTruthy();
  expect(IsArray(new Array())).toBeTruthy();
  expect(IsArray('abc' as any)).toBeFalsy();
  expect(IsArray(123 as any)).toBeFalsy();
});

test('IsUrl', () => {
  expect(IsUrl('http://www.baidu.com')).toBeTruthy();
  expect(IsUrl('https://www.baidu.com')).toBeTruthy();
  expect(IsUrl('www.baidu.com')).toBeFalsy();
});

test('IsTime', () => {
  expect(IsTime('00:00:00')).toBeTruthy();
  expect(IsTime('10:32:33')).toBeTruthy();
  expect(IsTime('23:59:59')).toBeTruthy();
  expect(IsTime('24:00:00')).toBeFalsy();
});

test('IsDateFormat', () => {
  expect(IsDateFormat('2019-03-26')).toBeTruthy();
  expect(IsDateFormat('2019-00-11')).toBeFalsy();
  expect(IsDateFormat('2019-13-11')).toBeFalsy();
  expect(IsDateFormat('2019-13-11 10:32:33')).toBeFalsy();
});

test('IsDateISO', () => {
  expect(IsDateISO('2019-12-11 10:32:33')).toBeTruthy();
  expect(IsDateISO('2019-03-26 00:32:33')).toBeTruthy();
  expect(IsDateISO('2019-00-11 10:32:33')).toBeFalsy();
  expect(IsDateISO('2019-13-11 10:32:33')).toBeFalsy();
});

test('IsDigits', () => {
  expect(IsDigits(0)).toBeTruthy();
  expect(IsDigits(55)).toBeTruthy();
  expect(IsDigits('33')).toBeTruthy();
  expect(IsDigits(55.33)).toBeFalsy();
  expect(IsDigits('00.55')).toBeFalsy();
});

test('MinLength', () => {
  expect(MinLength('abcdef', 10)).toBeTruthy();
  expect(MinLength('77777', 5, true)).toBeTruthy();
  expect(MinLength('77777', 5)).toBeTruthy();
  expect(MinLength('77777', 5, false)).toBeFalsy();
});

test('MaxLength', () => {
  expect(MaxLength('abcdef', 5)).toBeTruthy();
  expect(MaxLength('77777', 5, true)).toBeTruthy();
  expect(MaxLength('77777', 5)).toBeTruthy();
  expect(MaxLength('77777', 5, false)).toBeFalsy();
});

test('RangeLength', () => {
  expect(RangeLength('abcde', 3, 7)).toBeTruthy();
  expect(RangeLength('abcde', 3, 5)).toBeTruthy();
  expect(RangeLength('abcde', 5, 5)).toBeTruthy();
  expect(RangeLength('abcde', 3, 5, true)).toBeTruthy();
});

test('Min', () => {
  expect(Min(10, 20)).toBeTruthy();
  expect(Min(10, 10)).toBeTruthy();
  expect(Min(10, 10, true)).toBeTruthy();
  expect(Min(10, 10, false)).toBeFalsy();
});

test('Max', () => {
  expect(Max(10, 5)).toBeTruthy();
  expect(Max(10, 10)).toBeTruthy();
  expect(Max(10, 10, true)).toBeTruthy();
  expect(Max(10, 10, false)).toBeFalsy();
});

test('Range', () => {
  expect(Range(5, 1, 10)).toBeTruthy();
  expect(Range(5, 5, 10)).toBeTruthy();
  expect(Range(10, 5, 10, true)).toBeTruthy();
  expect(Range(5, 10, 10, false)).toBeFalsy();
  expect(Range(5, 12, 10)).toBeFalsy();
});

test('IsStep', () => {
  expect(IsStep(4, 2)).toBeTruthy();
  expect(IsStep(16, 8)).toBeTruthy();
  expect(IsStep(3, 2)).toBeFalsy();
});

test('AcceptSuffix', () => {
  expect(AcceptSuffix('~/test/cat.png', ['png', 'jpg'])).toBeTruthy();
  expect(AcceptSuffix('~/test/cat.PNG', ['png', 'jpg'])).toBeTruthy();
  expect(AcceptSuffix('~/test/cat.jpg', ['png', 'jpg'])).toBeTruthy();
  expect(AcceptSuffix('~/test/cat.gif', ['png', 'jpg'])).toBeFalsy();
});

test('Pattern', () => {
  expect(Pattern('abcd', /abcd/)).toBeTruthy()
  expect(Pattern('abcd', /abcde/)).toBeFalsy()
  expect(Pattern('abcd', 'abcd')).toBeTruthy()
});

test('ZipCode', () => {
  expect(ZipCode('430100')).toBeTruthy()
});

test('Tel', () => {
  expect(Tel('0278815412')).toBeTruthy()
  expect(Tel('021-80217000')).toBeTruthy()
  expect(Tel('15527456322a21')).toBeFalsy()
});

test('Chinese', () => {
  expect(Chinese('萨尔士大夫士大夫')).toBeTruthy()
  expect(Chinese('asdasdsad撒地方')).toBeFalsy()
});

test('NotChinese', () => {
  expect(NotChinese('asdsadfsaf')).toBeTruthy()
  expect(NotChinese('萨尔士大夫士大夫')).toBeFalsy()
  expect(NotChinese('asdasdsad撒地方')).toBeFalsy()
});

test('BankCard', () => {
  expect(BankCard('6228480402564890018')).toBeTruthy()
  expect(BankCard('62284804021342564890018')).toBeFalsy()
  expect(BankCard('asdsad')).toBeFalsy()
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

test('IdCardNo', () => {
  expect(IdCardNo('430900199401075987')).toBeTruthy()
  expect(IdCardNo('51130219930609112X')).toBeTruthy()
  expect(IdCardNo('23432432')).toBeFalsy()
});

test('Required', () => {
  expect(Required('')).toBeFalsy()
  expect(Required(0)).toBeTruthy()
  expect(Required([])).toBeFalsy()
});