import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  concerts: [],

  upcomingConcerts: Ember.computed.filter('concerts', function(concert) {
    var date = concert.get('date');
    if (date > moment()) {
      return concert;
    }
  }),

  pastConcerts: Ember.computed.filter('concerts', function(concert) {
    var date = concert.get('date');
    if (date < moment()) {
      return concert;
    }
  }),

});
