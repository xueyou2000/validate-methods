import helper from './helper';

/**
 * 判断值是否为空
 * @description 对于数组, 如果长度为0则也算空, 并且会遍历数组中的每个元素进行测试
 * @param value 
 */
export function IsEmpy(value: any): boolean {
  if (value === null || value === undefined || value === '') { return true; }
  if (value instanceof Array) {
    if (value.length === 0) { return true; }
    return value.some((val) => IsEmpy(val));
  }
  return false;
}

/**
 * 验证数值类型
 * @param number 数值
 */
export function IsNumber(number: string | number): boolean {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(number + '');
}

/**
 * 验证函数类型
 * @param func 函数
 */
export function IsFunction(func: Function): boolean {
  if (IsEmpy(func)) { return false; }
  const typeName: string = Object.prototype.toString.call(func);
  return typeName.indexOf('Function') != -1;
}

/**
 * 验证数组类型
 * @param array 数组
 */
export function IsArray(array: any[]): boolean {
  if (!array) { return false; }
  const typeName: string = Object.prototype.toString.call(array);
  return typeName.indexOf('Array') != -1;
}

/**
 * 验证邮箱格式
 * @param email 邮箱
 */
export function IsEmail(email: string): boolean {
  if (IsEmpy(email)) { return false; }
  return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}

/**
 * 验证网址格式
 * @param url 网址
 */
export function IsUrl(url: string): boolean {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url);
}

/**
 * 验证时间字符串格式
 * @description 例如 10:32:33
 * @param time 时间字符串
 */
export function IsTime(time: string): boolean {
  return /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/.test(time + '');
}

/**
 * 验证日期字符串格式
 * @description 例如: 2018-03-26
 * @param date 日期字符串
 */
export function IsDateFormat(date: string): boolean {
  if(IsEmpy(date)) { return false; }
  var status = true;
  var regexp = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
  var matches = regexp.exec(date);
  if (matches == null) { return false; }
  var matches3 = parseInt(matches[3]);
  if (matches3 <= 0 || matches3 > 12) { return false; }
  var matches4 = parseInt(matches[4]);
  if (!matches) { status = false; }
  if (status && matches4 > 31) { status = false; }
  if (status && matches3 == 2 && matches4 > 28) { status = false; }
  if (status && (matches3 == 1 || matches3 == 3 || matches3 == 5 || matches3 == 7 || matches3 == 8 || matches3 == 10 || matches3 == 12) && matches4 > 30) { status = false; }
  return status;
}

/**
 * 验证日期字符串格式
 * @description 例如: 2018-03-26 10:32:33
 * @param date 日期字符串
 */
export function IsDateISO(date: string): boolean {
  if (IsEmpy(date)) { return false; }
  var status = true;
  var regexp = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) ((\d{1,2}):(\d{1,2}):(\d{1,2}))$/;
  var matches = regexp.exec(date);
  if (matches == null) { return false }
  var matches3 = parseInt(matches[3]);
  if (matches3 <= 0 || matches3 > 12) { return false; }
  var matches4 = parseInt(matches[4]);
  if (!matches) { status = false; }
  if (status && matches4 > 31) { status = false; }
  if (status && matches3 == 2 && matches4 > 28) { status = false; }
  if (status && (matches3 == 1 || matches3 == 3 || matches3 == 5 || matches3 == 7 || matches3 == 8 || matches3 == 10 || matches3 == 12) && matches4 > 30) { status = false; }
  if (status && !IsTime(matches[5])) { status = false; }
  return status;
}

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
 * 验证字符串长度是否小于min
 * @param str 字符串
 * @param min 最小长度
 * @param equal 是否等于最小长度
 */
export function MinLength(str: string, min: number, equal: boolean = true): boolean {
  if (IsEmpy([str, min])) { return false; }
  return equal ? str.length <= min : str.length < min;
}

/**
 * 验证字符串长度是否大于max
 * @param str 字符串
 * @param max 最大长度
 * @param equal 是否等于最大长度
 */
export function MaxLength(str: string, max: number, equal: boolean = true): boolean {
  if (IsEmpy([str, max])) { return false; }
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
  if (IsEmpy([str, min, max])) { return false; }
  const length = str.length;
  if (equal) {
    return length >= min && length <= max;
  } else {
    return length > min && length < max;
  }
}

/**
 * 验证数值是否小于min
 * @param val 数值
 * @param min 比较数值
 * @param equal 是否等于比较数值
 */
export function Min(val: number | string, min: number, equal: boolean = true): boolean {
  if (IsEmpy([val, min])) { return false; }
  var _val = parseFloat(val + '');
  var equalVal = parseFloat(min + '');
  return equal ? _val <= equalVal : _val < equalVal;
}

/**
 * 验证数值是否大于min
 * @param val 数值
 * @param max 比较数值
 * @param equal 是否等于比较数值
 */
export function Max(val: number | string, max: number, equal: boolean = true): boolean {
  if (IsEmpy([val, max])) { return false; }
  var _val = parseFloat(val + '');
  var equalVal = parseFloat(max + '');
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
  if (IsEmpy([val, min, max])) { return false; }
  var _val = parseFloat(val + '');
  if (equal) {
    console.log(`${_val} >= ${min}`, _val >= min, `${_val} <= ${max}`, _val <= max);
    return _val >= min && _val <= max;
  } else {
    return _val > min && _val < max;
  }
}

/**
 * 验证合法后缀
 * @param val 比较字符串
 * @param suffixs 后缀集合 ['png', 'jpg']
 */
export function AcceptSuffix(val: string, suffixs: string[]): boolean {
  if (IsEmpy([val, suffixs])) { return false; }
  return suffixs.some((suffix: string) => {
    const regexp = new RegExp('\\.' + suffix + '$', 'i');
    return regexp.test(val);
  })
}

/**
 * 验证字符串是否匹配正则
 * @param val 比较字符串
 * @param regexp 正则字符串
 */
export function Pattern(val: string, regexp: string | RegExp): boolean {
  if (IsEmpy([val, regexp])) { return false; }
  if (typeof regexp === 'string') {
    return (new RegExp(regexp)).test(val);
  } else if (regexp instanceof RegExp) {
    return regexp.test(val);
  } else {
    throw new Error('未知正则类型')
  }
}

/**
 * 验证邮政编码格式
 * @param val 证邮政编
 */
export function ZipCode(val: string): boolean {
  return /^[0-9]{6}$/.test(val + '');
}

/**
 * 验证手机号格式
 * @param val 手机号
 */
export function PhoneNo(val: string): boolean {
  if (IsEmpy(val)) { return false; }
  var mobile = /^(13[0-9]|15[0123456789]|17[03678]|18[0-9]|14[57])[0-9]{8}$/;
  return val.length === 11 && mobile.test(val);
}

/**
 * 验证座机号码格式
 * @param val 座机号码
 */
export function Tel(val: string): boolean {
  return /^\d{3,4}-?\d{7,9}$/.test(val + '');
}

/**
 * 验证是否中文字符
 * @param val 比较字符串
 */
export function Chinese(val: string): boolean {
  return /^([\u4e00-\u9fa5]|\u00b7)+$/.test(val + '');
}

/**
 * 验证是否不包含中文字符
 * @param val 比较字符串
 */
export function NotChinese(val: string): boolean {
  return !/([\u4e00-\u9fa5]|\u00b7)+/.test(val + '');
}

/**
 * 验证银行卡号格式(卢恩算法)
 * @param card 银行卡号
 */
export function BankCard(card: string): boolean {
  if (IsEmpy(card)) { return false; }
  var status = true;
  // value为NAN(非法值)或者长度小于12, 则false
  if (isNaN(parseInt(card)))
    status = false;
  if (card.length < 12) {
    status = false;
  }
  // 将 123456字符串卡号,分割成数组 ['1', '2', '3', ...]
  var nums = card.split('');
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
        var t = (tmp + '').split('');
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

/**
 * 验证身份证格式
 * @param cardNo 身份证
 */
export function IdCardNo(cardNo: string): boolean {
  if (IsEmpy(cardNo)) { return false; }
  var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
  var parityBit = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
  var varArray = new Array();
  var lngProduct = 0;
  var intCheckDigit;
  var intStrLen = cardNo.length;
  var idNumber = cardNo;

  // initialize
  if ((intStrLen !== 15) && (intStrLen !== 18)) {
    return false;
  }
  // check and set value
  for (var i = 0; i < intStrLen; i++) {
    varArray[i] = idNumber.charAt(i);
    if ((varArray[i] < '0' || varArray[i] > '9') && (i !== 17)) {
      return false;
    } else if (i < 17) {
      varArray[i] = varArray[i] * factorArr[i];
    }
  }

  if (intStrLen === 18) {
    // check date
    var date8 = idNumber.substring(6, 14);
    if (helper.isDate8(date8) === false) {
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
    if (helper.isDate6(date6) === false) {
      return false;
    }
  }
  return true;
}

/**
 * 验证值是否必填
 * @param value 比较值
 */
export function Required(value: any): boolean {
  if (typeof (value) === 'string') {
    return value !== '';
  } else if (value instanceof Array) {
    return value.every(val => Required(val)) && value.length > 0;
  } else {
    return value !== undefined && value !== null;
  }

}