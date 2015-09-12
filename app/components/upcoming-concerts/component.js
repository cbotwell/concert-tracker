import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  concerts: [],

  upcomingConcerts: Ember.computed('concerts', 'concert.@each.date', function() {
    return this.get('concerts').reduce((prev, current) => {
      var date = current.get('date');
      if (date > moment()) {
        prev.push(current);
      }
      return prev;
    }, []);
  }),
});
