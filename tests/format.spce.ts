import {
  IsEmail,
  IsUrl,
  AcceptSuffix,
  ZipCode,
  Tel,
  Chinese,
  NotChinese,
  BankCard,
  IdCardNo,
  PhoneNo,
} from '../src';

test('IsEmail', () => {
  expect(IsEmail('123456.com')).toBeFalsy();
  expect(IsEmail('xueyoucd@gmail.com')).toBeTruthy();
});

test('IsUrl', () => {
  expect(IsUrl('http://www.baidu.com')).toBeTruthy();
  expect(IsUrl('https://www.baidu.com')).toBeTruthy();
  expect(IsUrl('www.baidu.com')).toBeFalsy();
});

test('AcceptSuffix', () => {
  expect(AcceptSuffix('~/test/cat.png', ['png', 'jpg'])).toBeTruthy();
  expect(AcceptSuffix('~/test/cat.PNG', ['png', 'jpg'])).toBeTruthy();
  expect(AcceptSuffix('~/test/cat.jpg', ['png', 'jpg'])).toBeTruthy();
  expect(AcceptSuffix('~/test/cat.gif', ['png', 'jpg'])).toBeFalsy();
});

test('ZipCode', () => {
  expect(ZipCode('430100')).toBeTruthy()
});

test('PhoneNo', () => {
  expect(PhoneNo('15527456321')).toBeTruthy();
  expect(PhoneNo('155274563212')).toBeFalsy();
  expect(PhoneNo('021-80217000')).toBeFalsy();
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


test('IdCardNo', () => {
  expect(IdCardNo('430900199401075987')).toBeTruthy()
  expect(IdCardNo('51130219930609112X')).toBeTruthy()
  expect(IdCardNo('23432432')).toBeFalsy()
});