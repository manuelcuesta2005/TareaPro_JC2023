export function formatDate (date) {
  const fecha = new Date(date)
  let month = '' + fecha.getMonth()
  let day = '' + (fecha.getDate() + 1)
  const year = fecha.getFullYear()

  if (month.length < 2) {
    month = '0' + month
  }
  if (day.length < 2) {
    day = '0' + day
  }
  return [day, month, year].join('/')
}
