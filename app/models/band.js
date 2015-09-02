import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  url: DS.attr('string'),
  imageUrl: DS.attr('string'),

  facebookUrl: DS.attr('string'),
  twitterUrl: DS.attr('string'),
  instagramUrl: DS.attr('string'),

  description: DS.attr('string'),
  genres: DS.attr('concert'),
  forFansOf: DS.attr('concert'),

  concerts: DS.hasMany('concert'),
});
