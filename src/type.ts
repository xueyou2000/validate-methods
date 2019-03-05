/**
 * @author  XueYou
 * @description 类型验证函数
 */

import { IsEmpy } from "./helper";

/**
 * 验证数值类型
 * @param number 数值
 */
export function IsNumber(number: string | number): boolean {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(number + "");
}

/**
 * 验证函数类型
 * @param func 函数
 */
export function IsFunction(func: any): boolean {
    if (IsEmpy(func)) {
        return false;
    }
    const typeName: string = Object.prototype.toString.call(func);
    return typeName.indexOf("Function") != -1;
}

/**
 * 验证数组类型
 * @param array 数组
 */
export function IsArray(array: any): boolean {
    if (!array) {
        return false;
    }
    const typeName: string = Object.prototype.toString.call(array);
    return typeName.indexOf("Array") != -1;
}
