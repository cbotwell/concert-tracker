import moment from 'moment';

export function dateBefore(item) {
  var date = item.get('date');
  if (date > moment()) {
    return true;
  }
}
