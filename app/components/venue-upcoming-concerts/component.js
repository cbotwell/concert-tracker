import Ember from 'ember';
import {dateBefore} from 'concert-tracker/helper-functions';

export default Ember.Component.extend({
  tagName: 'ul',

  concerts: null,

  upcomingConcerts: Ember.computed('concerts', 'concerts.@each.date', function() {
    console.log('run');
    return this.get('concerts').filter(dateBefore);
  }),

});
