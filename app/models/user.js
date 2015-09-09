import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  uid: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  joinDate: DS.attr('date', {
          defaultValue() { return moment(); }
      }),

  savedConcerts: DS.hasMany('concert', {async: true}),
  favoriteVenues: DS.hasMany('venue', {async: true}),
  // favoriteBands: DS.hasMany('band', {async: true}),
});
