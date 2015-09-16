import moment from 'moment';

export function dateBefore(item) {
  var date = item.get('date');
  if (moment(date).isAfter(moment().subtract(1, 'day'))) {
    return true;
  }
}
