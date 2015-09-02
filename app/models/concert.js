import DS from 'ember-data';

export default DS.Model.extend({
  ticketUrl: DS.attr('string'),
  imageUrl: DS.attr('string'),

  date: DS.attr('string'),

  rsvps: DS.attr('number', {defaultValue: 0}),

  bands: DS.hasMany('band', {async: true}),
  venue: DS.belongsTo('venue', {async: true}),
});
