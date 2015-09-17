import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  concerts: [],

  concertsSorting: ['date'],
  sortedConcerts: Ember.computed.sort('concerts', 'concertsSorting'),

  thisWeek: Ember.computed.filter('sortedConcerts', function(concert) {
    var date = concert.get('date');
    if (moment(date).isAfter(moment().subtract(1, 'days')) && moment(date).isBefore(moment().add(6, 'days'))) {
        return concert;
    }
  }),

});
