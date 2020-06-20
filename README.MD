## 功能：

检测表达式是否符合算术运算的规则

## 引入
```
import isValidExpression from 'is-valid-expression'

const isValidExpression = require('is-valid-expression')

<script src="./src/is-valid-expression.js"></script>  

```

## 使用

### 可选参数

* value 待检测字符串
* keywordExp 自定义变量的正则字符串， 默认为数字的正则字符串
* example 符合自定义变量正则规则的字符串，可不填,默认为1

### 1.纯数字算术运算
```$xslt
const str1 = '1*2*3'
const str2 = '1*2*'

isValidExpression(str1)  //true
isValidExpression(str2)  //false
```

### 2.带有自定义格式关键字的字符串

例如 '1*2*3*#{keyword1} - (2- #{keyword2})*#{keyword3}'

```$xslt
const str = '1*2*3*#{keyword1} - (2- #{keyword2})*#{keyword3}'
const keywordExp = '\\#\\{[^#\\{\\}]*?\\}'
isValidExpression(srt, keywordExp)  // true
```



## 使用示例 

```
const a = '1*2*3'

console.log(isValidExpression(a))  true
```
```
const b = '1*2*3*#{fdafa} - (2- #{fafa})*#{fasfda}'
const key = '\\#\\{[^#\\{\\}]*?\\}'

console.log(isValidExpression(b, key)) true
```

```
const c = '1*2*3*${fdafa} - (2- ${fafa})*${fasfda}'
const key2 = '\\$\\{[^\\$\\{\\}]*?\\}'

console.log(isValidExpression(c, key2)) true
console.log(isValidExpression(c, key2, '${validExpression}'))  true
```
 ```$xslt
const e = '$[fafa]*2.3 - 1 + (1+1)/2'
const key3 = '\\$\\[[^\\$\\[\\]]*?\\]'

console.log(isValidExpression(e, key3, '$[validExpression]'))  true

```
