import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  concerts: [],

  thisWeek: Ember.computed.filter('concerts', function(concert) {
    var date = concert.get('date');
    if (date > moment() && date < moment().add(7, 'days')) {
        return concert;
    }
  }),

});
