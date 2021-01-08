// 解决ios 时间格式不兼容问题
export const DateFn = (date) => {
  return date ? new Date(date.replace(/-/g, '/')) : new Date()
}

/**
 * @param getNowTime
 * 获取时间对象 的属性
 */
export const getNowTime = (d) => {
  let date = {}
  switch(typeof d) {
    case 'number':
      date = new Date(d)
      break
    case 'string':
      date =  DateFn(d)
      break
    default:
      date = DateFn()
  }

  const week = ['日', '一', '二', '三', '四', '五', '六']

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    week: date.getDay(),
    mm: date.getMinutes(),
    hh: date.getHours(),
    weekText: week[date.getDay()]
  }
}