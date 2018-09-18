# validate-methods

> 这是一个常用的验证函数库, 收集了日期, 邮件, 网址, 银行卡, 身份证等验证函数...

## Install And Usega

Using Browser:

```html
<script src="./validate-methods.js"></script>
<script>
  console.log(ValidateMethods.IsEmail('xx@gmail.com') === true);
</script>
```

 Or Using npm:

```sh
npm install --save @validate/validate-methods
```

```js
import { IsEmail } from '@validate/validate-methods';
console.log(IsEmail('xx@gmail.com') === true);
```

## Methods

### 通用验证

- `Required(value: any)`  验证值是否必填
- `MinLength(str: string, min: number, equal: boolean = true)`  验证字符串长度是否小于min
- `MaxLength(str: string, max: number, equal: boolean = true)`  验证字符串长度是否大于max
- `RangeLength(str: string, min: number, max: number, equal: boolean = true)` 验证字符串长度在范围内
- `Min(val: number | string, min: number, equal: boolean = true)` 验证数值是否小于min
- `Max(val: number | string, max: number, equal: boolean = true)` 验证数值是否大于min
- `Range(val: number | string, min: number, max: number, equal: boolean = true)`  验证数值是否在某个范围内
- `Pattern(val: string, regexp: string | RegExp)` 验证字符串是否匹配正则

### 类型验证

- `IsNumber(number: string | number)` 验证数值类型
- `IsFunction(func: Function)`  验证函数类型
- `IsArray(array: any[])` 验证数组类型

### 格式验证

- `IsEmail(email: string)`  验证邮箱格式
- `IsUrl(url: string)`  验证网址格式
- `AcceptSuffix(val: string, suffixs: string[])`  验证合法后缀
- `ZipCode(val: string)`  验证邮政编码格式
- `PhoneNo(val: string)`  验证手机号格式
- `Tel(val: string)`  验证座机号码格式
- `Chinese(val: string)`  验证是否中文字符
- `NotChinese(val: string)` 验证是否不包含中文字符
- `BankCard(card: string)`  验证银行卡号格式
- `IdCardNo(cardNo: string)`  验证身份证格式

### 日期验证

- `IsTime(time: string)`  验证时间字符串格式, 如: 10:32:33
- `IsDateFormat(date: string)`  验证日期字符串格式, 如: 2018-03-26
- `IsDateISO(date: string)`  验证日期字符串格式, 如: 2018-03-26 10:32:33

### 数值验证

- `IsDigits(number: number | string)` 验证整数格式
- `IsStep(val: number | string, step: number)`  验证数值是否为指定倍数
- `Amount(amount: string | number, canBeZero: boolean = false, bits: number = 6)` 验证金额格式



