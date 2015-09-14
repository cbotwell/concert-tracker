import Ember from 'ember';
import {dateBefore} from 'concert-tracker/helper-functions';

export default Ember.Component.extend({
  concerts: [],

  upcomingConcerts: Ember.computed.filter('concerts', dateBefore),

});
