// 导出变量
export const x = 100
export const y = 200

// 导出函数
export function add (x, y) {
  return x + y
}

// 导出类
export class importDom {
  constructor (x, y) {
    console.log('x, y => ', x, y)
  }
}

// 导出对象
export default {
  domain: 'www.meta.com'
}