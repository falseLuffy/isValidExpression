/**
 * create by falseLuffy
 * 检测表达式是否合法
 * 可传入自定义的变量格式
 * params value 待检测字符串
 * params keywordExp 自定义变量的正则字符串， 默认为数字的正则字符串
 * params example 符合自定义变量正则规则的字符串，可不填默认为1
 **/
(function(name, definition) {
  // 检测上下文环境是否为AMD或CMD
  var hasDefine = typeof define === 'function',
    // 检查上下文环境是否为Node
    hasExports = typeof module !== 'undefined' && module.exports

  if (hasDefine) {
    // AMD环境或CMD环境
    define(definition)
  } else if (hasExports) {
    // 定义为普通Node模块
    module.exports = definition()
  } else {
    // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
    this[name] = definition()
  }
})('isValidExpression', function() {
  function isValidExpression(value, keywordExp = '\\d+(\\.\\d+)?', example = 1) {
    // 去除表达式中的空格
    value = value.replace(/ /g, '')
    const groupExp = /\([^\(\)]*?\)/g
    const NumberExp = '\\d+(\\.\\d+)?'
    const validExpressionString = `^((((${NumberExp})|(${keywordExp}))[+\\-*\\/])+)?((${NumberExp})|(${keywordExp}))$`
    const validExpressionExp = new RegExp(validExpressionString)
    let result = value.match(groupExp)
    if (result) {
      for (let i = 0; i < result.length; i++) {
        const item = result[i]
        if (validExpressionExp.test(quchu(item))) {
          value = value.replace(item, `${example}`)
        } else {
          return false
        }
      }
      result = value.match(groupExp)
      if (result) {
        return isValidExpression(value)
      } else {
        return validExpressionExp.test(quchu(value))
      }
    } else {
      return validExpressionExp.test(quchu(value))
    }

    function quchu(value) {
      if (value.slice(0, 1) === '(') {
        /* eslint-disable */
        value = value.slice(1,)
      }
      if (value.slice(-1) === ')') {
        value = value.slice(0, -1)
      }
      return value
    }
  }
  return isValidExpression
})
