import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  uid: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function() {
      return this.get('firstName') + ' ' + this.get('lastName');
  }),
  joinDate: DS.attr('date', {
          defaultValue() { return moment(); }
      }),

  savedConcerts: DS.hasMany('concert', {async: true}),
  favoriteVenues: DS.hasMany('venue', {async: true}),
  // favoriteBands: DS.hasMany('band', {async: true}),

  posts: DS.hasMany('post', {async: true}),
});
