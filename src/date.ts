/**
 * @author  XueYou
 * @description 日期/时间验证函数
 */

import { IsEmpy } from "./helper";

/**
 * 验证时间字符串格式
 * @description 例如 10:32:33
 * @param time 时间字符串
 */
export function IsTime(time: string): boolean {
    return /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/.test(time + "");
}

/**
 * 验证日期字符串格式
 * @description 例如: 2018-03-26
 * @param date 日期字符串
 */
export function IsDateFormat(date: string): boolean {
    if (IsEmpy(date)) {
        return false;
    }
    var status = true;
    var regexp = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
    var matches = regexp.exec(date);
    if (matches == null) {
        return false;
    }
    var matches3 = parseInt(matches[3]);
    if (matches3 <= 0 || matches3 > 12) {
        return false;
    }
    var matches4 = parseInt(matches[4]);
    if (!matches) {
        status = false;
    }
    if (status && matches4 > 31) {
        status = false;
    }
    if (status && matches3 == 2 && matches4 > 28) {
        status = false;
    }
    if (status && (matches3 == 1 || matches3 == 3 || matches3 == 5 || matches3 == 7 || matches3 == 8 || matches3 == 10 || matches3 == 12) && matches4 > 31) {
        status = false;
    }
    return status;
}

/**
 * 验证日期字符串格式
 * @description 例如: 2018-03-26 10:32:33
 * @param date 日期字符串
 */
export function IsDateISO(date: string): boolean {
    if (IsEmpy(date)) {
        return false;
    }
    var status = true;
    var regexp = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) ((\d{1,2}):(\d{1,2}):(\d{1,2}))$/;
    var matches = regexp.exec(date);
    if (matches == null) {
        return false;
    }
    var matches3 = parseInt(matches[3]);
    if (matches3 <= 0 || matches3 > 12) {
        return false;
    }
    var matches4 = parseInt(matches[4]);
    if (!matches) {
        status = false;
    }
    if (status && matches4 > 31) {
        status = false;
    }
    if (status && matches3 == 2 && matches4 > 28) {
        status = false;
    }
    if (status && (matches3 == 1 || matches3 == 3 || matches3 == 5 || matches3 == 7 || matches3 == 8 || matches3 == 10 || matches3 == 12) && matches4 > 31) {
        status = false;
    }
    if (status && !IsTime(matches[5])) {
        status = false;
    }
    return status;
}
