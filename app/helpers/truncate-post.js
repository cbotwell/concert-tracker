import Ember from 'ember';

export function truncatePost(params) {
  var arr = params[0].split(/\s/);
  return arr.slice(0,30).join(' ');
}

export default Ember.Helper.helper(truncatePost);
