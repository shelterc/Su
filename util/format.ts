import dayjs from 'dayjs'

/**
 * @author: 
 * @description:
 * @param {number} time
 * @return {*}
 */

export const formatDate = (time: number | string | Date) => {
  return dayjs(time).format('YYYY-MM-DD HH:mm')
}

export const formatDateEng = (time: number | string | Date) => {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',]
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const date = new Date(time)
  const monthIndex = date.getUTCMonth()
  const dayIndex = date.getUTCDay()
  const formattedDate = `${days[dayIndex]}  ${
    months[monthIndex]
  }  ${date.getUTCDate()}  ${date.getUTCFullYear()}`
  return formattedDate
}
