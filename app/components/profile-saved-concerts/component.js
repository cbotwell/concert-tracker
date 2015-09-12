import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  concerts: [],

  savedConcertsByTime: Ember.computed('concerts', 'concerts.@each.date', function() {
    return this.get('concerts').reduce((prev, current) => {
        var upcoming = prev.findBy('name', 'Upcoming');
        var past = prev.findBy('name', 'Past');
        var date = current.get('date');
        debugger;
        if (date > moment()) {
          upcoming.concerts.push(current);
        } else {
          past.concerts.push(current);
        }
        return prev;
      }, [{
            name: 'Upcoming',
            concerts: []
          },
          {
            name: 'Past',
            concerts: []
          }]);
  }),
});
