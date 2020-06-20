/**
 * create by falseLuffy
 **/
const isValidExpression = require('./isValidExpression.js')

const a = '1*2*3'
const b = '1*2*3*#{fdafa} - (2- #{fafa})*#{fasfda}'
const c = '1*2*3*${fdafa} - (2- ${fafa})*${fasfda}'
const e = '$[fafa]*2.3 - 1 + (1+1)/2'
const f = '1*2.3 - 1 + (+1)/2'
const key = '\\#\\{[^#\\{\\}]*?\\}'
const key2 = '\\$\\{[^\\$\\{\\}]*?\\}'
const key3 = '\\$\\[[^\\$\\[\\]]*?\\]'

console.log(isValidExpression(a))
console.log(isValidExpression(b, key))
console.log(isValidExpression(c, key2))
console.log(isValidExpression(c, key2, '${validExpression}'))
console.log(isValidExpression(e, key3, '$[validExpression]'))
console.log(isValidExpression(f, key3, '$[validExpression]'))
