/**
 * @author  XueYOu
 * @description 辅助函数
 */

/**
 * 是否6位日期
 * @param sDate
 */
export function IsDate6(sDate: string) {
    if (!/^[0-9]{6}$/.test(sDate)) {
        return false;
    }
    var year, month;
    year = sDate.substring(0, 4);
    month = sDate.substring(4, 6);
    if (parseInt(year) < 1700 || parseInt(year) > 2500) return false;
    if (parseInt(month) < 1 || parseInt(month) > 12) return false;
    return true;
}

/**
 * 是否8位日期
 */
export function IsDate8(sDate: string) {
    if (!/^[0-9]{8}$/.test(sDate)) {
        return false;
    }
    var year, month, day;
    year = parseInt(sDate.substring(0, 4));
    month = parseInt(sDate.substring(4, 6));
    day = parseInt(sDate.substring(6, 8));
    var iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year < 1700 || year > 2500) return false;
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        iaMonthDays[1] = 29;
    }
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > iaMonthDays[month - 1]) return false;
    return true;
}

/**
 * 判断值是否为空
 * @description 对于数组, 如果长度为0则也算空, 并且会遍历数组中的每个元素进行测试
 * @param value
 */
export function IsEmpy(value: any): boolean {
    if (value === null || value === undefined || value === "") {
        return true;
    }
    if (value instanceof Array) {
        if (value.length === 0) {
            return true;
        }
        return value.some((val) => IsEmpy(val));
    }
    return false;
}
