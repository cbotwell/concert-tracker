import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  url: DS.attr('string'),
  imageUrl: DS.attr('string'),

  facebookUrl: DS.attr('string'),
  twitterUrl: DS.attr('string'),
  instagramUrl: DS.attr('string'),

  phoneNumber: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zipcode: DS.attr('number'),

  concerts: DS.hasMany('concert', {async: true}),
  users: DS.hasMany('user', {async: true}),
});
