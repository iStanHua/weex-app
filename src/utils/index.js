/**
 * Duff装置
 * @param {Array}    values   数组
 * @param {Function} process  回调函数
 */
export function duffPrompt (values, process) {
  let _len = values.length
  let iterations = Math.floor(_len / 8)
  let leftover = _len % 8
  let i = 0
  if (leftover > 0) {
    do {
      if (typeof process === 'function') {
        process(values[i++], i)
      }
    } while (--leftover > 0)
  }
  do {
    if (typeof process === 'function') {
      process(values[i++], i)
      process(values[i++], i)
      process(values[i++], i)
      process(values[i++], i)
      process(values[i++], i)
      process(values[i++], i)
      process(values[i++], i)
      process(values[i++], i)
    }
  } while (--iterations > 0)
}
