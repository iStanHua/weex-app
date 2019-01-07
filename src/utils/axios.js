// import store from '@/vuex/store'
// import router from '@/router'
const stream = weex.requireModule('stream')
// const modal = weex.requireModule('modal')

/**
 * 请求
 * @param {String} url    地址
 * @param {String} type   类型
 * @param {Object} data   数据
 */
export const fetch = (url, type = 'get', data) => {
  let options = {
    method: type.toUpperCase(),
    url: url,
    type: 'json'
  }
  if (type === 'get') {
    if (typeof data === 'object') {
      let arr = []
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          arr.push(`${key}=${data[key]}`)
        }
      }
      if (arr.length) {
        url.indexOf('?') > -1 ? (options.url = url + arr.join('&')) : (options.url = url + '?' + arr.join('&'))
      }
    }
  } else if (type === 'post') {
    options.headers = { 'Content-Type': 'application/json' }
    options.body = JSON.stringify(data)
  }

  return stream.fetch(options, (res) => {
    console.log(res)
    // modal.toast({
    //   message: '系统异常，请重试',
    //   duration: 0.3
    // })
  })
}
