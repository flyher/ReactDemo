
module.exports = function (date, format) {
  date = new Date(date);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var millisecond = date.getMilliseconds();
  // yyyy-MM-dd HH:mm:ss
  var str = '';
  // yyyy  yy
  if (new RegExp('y{4}').test(format) && new RegExp('y{2}').test(format)) {
    str = str + year.toString();
  }
  if (!new RegExp('y{4}').test(format) && new RegExp('y{2}').test(format)) {
    str = str + year.toString().substr(2, 3);
  }
  if (new RegExp('M{2}').test(format)) {
    str = str + '-' + (month < 10 ? ('0' + month.toString()) : month.toString());
  }
  if (new RegExp('d{2}').test(format)) {
    str = str + '-' + (day < 10 ? ('0' + day.toString()) : day.toString());
  }
  if (new RegExp('H{2}').test(format)) {
    str = str + ' ' + (hour < 10 ? ('0' + hour.toString()) : hour.toString());
  }
  if (new RegExp('m{2}').test(format)) {
    str = str + ':' + (minute < 10 ? ('0' + minute.toString()) : minute.toString());
  }
  if (new RegExp('s{2}').test(format)) {
    str = str + ':' + (second < 10 ? ('0' + second.toString()) : second.toString());
  }
  return str;
}