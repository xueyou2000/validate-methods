/**
 * @author  XueYou
 * @description 数值验证函数
 */

import { IsEmpy } from './helper';


/**
 * 验证整数格式
 * @param number 整数
 */
export function IsDigits(number: number | string): boolean {
  return /^\d+$/.test(number + '');
}

/**
 * 验证数值是否为指定倍数
 * @param val 数值
 * @param step 倍数
 */
export function IsStep(val: number | string, step: number) {
  if (IsEmpy([val, step])) { return false; }
  var _val = parseFloat(val + '');
  return (_val % step) === 0;
}

/**
 * 验证金额格式
 * @param amount 金额
 * @param canBeZero 金额是否能为0
 * @param bits 金额小数范围
 */
export function Amount(amount: string | number, canBeZero: boolean = false, bits: number = 6): boolean {
  if (IsEmpy(amount)) { return false; }
  amount = parseFloat(amount + '');
  if (amount == 0 && canBeZero == false) return false;
  var regexp = new RegExp('^([1-9][\\d]{0,7}|0)(\\.[\\d]{1,' + bits + '})?$');
  return regexp.test(amount + '');
}