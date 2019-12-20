/**
 * @author  XueYou
 * @description 常用验证函数
 */

import { IsEmpy } from "./helper";

/**
 * 验证值是否必填
 * @param value 比较值
 */
export function Required(value: any): boolean {
    if (typeof value === "string") {
        return value !== "";
    } else if (value instanceof Array) {
        return value.every((val) => Required(val)) && value.length > 0;
    } else {
        return value !== undefined && value !== null;
    }
}

/**
 * 验证字符串长度是否小于min
 * @param str 字符串
 * @param min 最小长度
 * @param equal 是否等于最小长度
 */
export function MinLength(str: string, min: number, equal: boolean = true): boolean {
    if (IsEmpy([str, min])) {
        return false;
    }
    return equal ? str.length <= min : str.length < min;
}

/**
 * 验证字符串长度是否大于max
 * @param str 字符串
 * @param max 最大长度
 * @param equal 是否等于最大长度
 */
export function MaxLength(str: string, max: number, equal: boolean = true): boolean {
    if (IsEmpy([str, max])) {
        return false;
    }
    return equal ? str.length >= max : str.length > max;
}

/**
 * 验证字符串长度在范围内
 * @param str 字符串
 * @param min 最小范围
 * @param max 最大范围
 * @param equal 是否等于最小/最大范围
 */
export function RangeLength(str: string, min: number, max: number, equal: boolean = true): boolean {
    if (IsEmpy([str, min, max])) {
        return false;
    }
    const length = str.length;
    if (equal) {
        return length >= min && length <= max;
    } else {
        return length > min && length < max;
    }
}

/**
 * 字符串长度是否等于 length
 * @param str
 * @param length
 */
export function EqualLength(str: string, length: number): boolean {
    if (IsEmpy([str, length])) {
        return false;
    }
    return str.length === length;
}

/**
 * 验证数值是否小于min
 * @param val 数值
 * @param min 比较数值
 * @param equal 是否等于比较数值
 */
export function Min(val: number | string, min: number, equal: boolean = true): boolean {
    if (IsEmpy([val, min])) {
        return false;
    }
    var _val = parseFloat(val + "");
    var equalVal = parseFloat(min + "");
    return equal ? _val <= equalVal : _val < equalVal;
}

/**
 * 验证数值是否大于min
 * @param val 数值
 * @param max 比较数值
 * @param equal 是否等于比较数值
 */
export function Max(val: number | string, max: number, equal: boolean = true): boolean {
    if (IsEmpy([val, max])) {
        return false;
    }
    var _val = parseFloat(val + "");
    var equalVal = parseFloat(max + "");
    return equal ? _val >= equalVal : _val > equalVal;
}

/**
 * 验证数值是否在某个范围内
 * @param val 数值
 * @param min 最小范围
 * @param max 最大范围
 * @param equal 是否等于最小/最大范围
 */
export function Range(val: number | string, min: number, max: number, equal: boolean = true): boolean {
    if (IsEmpy([val, min, max])) {
        return false;
    }
    var _val = parseFloat(val + "");
    if (equal) {
        return _val >= min && _val <= max;
    } else {
        return _val > min && _val < max;
    }
}

/**
 * 验证字符串是否匹配正则
 * @param val 比较字符串
 * @param regexp 正则字符串
 */
export function Pattern(val: string, regexp: string | RegExp): boolean {
    if (IsEmpy([val, regexp])) {
        return false;
    }
    if (typeof regexp === "string") {
        return new RegExp(regexp).test(val);
    } else if (regexp instanceof RegExp) {
        return regexp.test(val);
    } else {
        throw new Error("未知正则类型");
    }
}
