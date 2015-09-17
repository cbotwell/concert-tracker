import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  concerts: [],

  concertsSorting: ['date'],
  sortedConcerts: Ember.computed.sort('concerts', 'concertsSorting'),

  concertsSortingDesc: ['date:desc'],
  sortedConcertsDesc: Ember.computed.sort('concerts', 'concertsSortingDesc'),

  upcomingConcerts: Ember.computed.filter('sortedConcerts', function(concert) {
    var date = concert.get('date');
    if (moment(date).isAfter(moment().subtract(1, 'day'))) {
      return concert;
    }
  }),

  pastConcerts: Ember.computed.filter('sortedConcertsDesc', function(concert) {
    var date = concert.get('date');
    if (moment(date).isBefore(moment().subtract(1, 'day'))) {
      return concert;
    }
  }),

});
