/**
 * @author  XueYou
 * @description 格式验证函数
 */

import { IsEmpy, IsDate8, IsDate6 } from "./helper";

/**
 * 验证邮箱格式
 * @param email 邮箱
 */
export function IsEmail(email: string): boolean {
    if (IsEmpy(email)) {
        return false;
    }
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}

/**
 * 验证网址格式
 * @param url 网址
 */
export function IsUrl(url: string): boolean {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
        url
    );
}

/**
 * 验证合法后缀
 * @param val 比较字符串
 * @param suffixs 后缀集合 ['png', 'jpg']
 */
export function AcceptSuffix(val: string, suffixs: string[]): boolean {
    if (IsEmpy([val, suffixs])) {
        return false;
    }
    return suffixs.some((suffix: string) => {
        const regexp = new RegExp("\\." + suffix + "$", "i");
        return regexp.test(val);
    });
}

/**
 * 验证邮政编码格式
 * @param val 证邮政编
 */
export function ZipCode(val: string): boolean {
    return /^[0-9]{6}$/.test(val + "");
}

/**
 * 验证手机号格式
 * @param val 手机号
 */
export function PhoneNo(val: string): boolean {
    if (IsEmpy(val)) {
        return false;
    }
    var mobile = /^(13[0-9]|15[0123456789]|17[03678]|18[0-9]|14[57])[0-9]{8}$/;
    return val.length === 11 && mobile.test(val);
}

/**
 * 验证座机号码格式
 * @param val 座机号码
 */
export function Tel(val: string): boolean {
    return /^\d{3,4}-?\d{7,9}$/.test(val + "");
}

/**
 * 验证是否中文字符
 * @param val 比较字符串
 */
export function Chinese(val: string): boolean {
    return /^([\u4e00-\u9fa5]|\u00b7)+$/.test(val + "");
}

/**
 * 验证是否不包含中文字符
 * @param val 比较字符串
 */
export function NotChinese(val: string): boolean {
    return !/([\u4e00-\u9fa5]|\u00b7)+/.test(val + "");
}

/**
 * 验证银行卡号格式(卢恩算法)
 * @param card 银行卡号
 */
export function BankCard(card: string): boolean {
    if (IsEmpy(card)) {
        return false;
    }
    var status = true;
    // value为NAN(非法值)或者长度小于12, 则false
    if (isNaN(parseInt(card))) status = false;
    if (card.length < 12) {
        status = false;
    }
    // 将 123456字符串卡号,分割成数组 ['1', '2', '3', ...]
    var nums = card.split("");
    // 合计
    var sum = 0;
    // 索引
    var index = 1;
    for (var i = 0; i < nums.length; i++) {
        // 当前索引是否为偶数
        if ((i + 1) % 2 === 0) {
            // 当前数组倒index的数字 * 2, 转数值
            var tmp = Number(nums[nums.length - index]) * 2;
            if (tmp >= 10) {
                // 将大于等于10的值转字符串
                var t = (tmp + "").split("");
                // tmp 值等于 字符串[0] + 字符串[1],  '16' 就是 1+6=7
                tmp = Number(t[0]) + Number(t[1]);
            }
            // 累加值
            sum += tmp;
        } else {
            // sum 累加当前数组倒index的数字
            sum += Number(nums[nums.length - index]);
        }
        // 累加索引
        index++;
    }
    // 如果值不是10的倍数, 则不是一个合法的银行卡号
    if (sum % 10 !== 0) {
        status = false;
    }
    return status;
}

/**
 * 验证身份证格式
 * @param cardNo 身份证
 */
export function IdCardNo(cardNo: string): boolean {
    if (IsEmpy(cardNo)) {
        return false;
    }
    var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
    var parityBit = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
    var varArray = new Array();
    var lngProduct = 0;
    var intCheckDigit;
    var intStrLen = cardNo.length;
    var idNumber = cardNo;

    // initialize
    if (intStrLen !== 15 && intStrLen !== 18) {
        return false;
    }
    // check and set value
    for (var i = 0; i < intStrLen; i++) {
        varArray[i] = idNumber.charAt(i);
        if ((varArray[i] < "0" || varArray[i] > "9") && i !== 17) {
            return false;
        } else if (i < 17) {
            varArray[i] = varArray[i] * factorArr[i];
        }
    }

    if (intStrLen === 18) {
        // check date
        var date8 = idNumber.substring(6, 14);
        if (IsDate8(date8) === false) {
            return false;
        }
        // calculate the sum of the products
        for (i = 0; i < 17; i++) {
            lngProduct = lngProduct + varArray[i];
        }
        // calculate the check digit
        intCheckDigit = parityBit[lngProduct % 11];
        // check last digit
        if (varArray[17] !== intCheckDigit) {
            return false;
        }
    } else {
        var date6 = idNumber.substring(6, 12);
        if (IsDate6(date6) === false) {
            return false;
        }
    }
    return true;
}
