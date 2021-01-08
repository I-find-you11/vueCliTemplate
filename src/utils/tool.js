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
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const monthDays = new Date(year, month, 0).getDate()
  return {
    year,
    month,
    day: date.getDate(),
    week: date.getDay(),
    mm: date.getMinutes(),
    hh: date.getHours(),
    ss: date.getSeconds(),
    monthDays,
    weekText: week[date.getDay()],
    date,
    timeStamp: +date
  }
}

// 字符串往前补0
export const fillInStr = (str, num = 2) => {
  let s
  switch (typeof str) {
    case 'string':
      s = str
      break
    default:
      s = str.toString()
      break
  }
  const length = s.length
  for(let i = length; i < num; i++) {
    s = '0' + s
  }
  return s
}