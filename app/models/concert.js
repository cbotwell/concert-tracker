import DS from 'ember-data';

export default DS.Model.extend({
  ticketUrl: DS.attr('string'),
  imageUrl: DS.attr('string'),

  rsvps: DS.attr('number'),

  bands: DS.hasMany('band'),
  venue: DS.belongsTo('venue'),
});
