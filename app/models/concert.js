import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  ticketUrl: DS.attr('string'),
  imageUrl: DS.attr('string'),
  date: DS.attr('string'),
  time: DS.attr('string'),

  featured: DS.attr('boolean', {defaultValue: false}),

  venue: DS.belongsTo('venue', {async: true}),
  bands: DS.hasMany('band', {async: true}),

  users: DS.hasMany('user', {async: true}),
  rsvps: Ember.computed.alias('users.length'),
});
