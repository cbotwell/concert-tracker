import DS from 'ember-data';

export default DS.Model.extend({
  ticketUrl: DS.attr('string'),
  imageUrl: DS.attr('string'),

  date: DS.attr('string'),

  rsvps: DS.attr('number', {defaultValue: 0}),
  featured: DS.attr('boolean', {defaultValue: false}),

  venue: DS.belongsTo('venue', {async: true}),
  bands: DS.hasMany('band', {async: true}),
  users: DS.hasMany('user', {async: true}),
});
