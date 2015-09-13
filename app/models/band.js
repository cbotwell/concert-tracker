import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  url: DS.attr('string'),
  imageUrl: DS.attr('string'),

  facebookUrl: DS.attr('string'),
  twitterUrl: DS.attr('string'),
  instagramUrl: DS.attr('string'),
  soundcloudUrl: DS.attr('string'),
  spotifyUrl: DS.attr('string'),

  description: DS.attr('string'),
  genre: DS.attr('string'),
  forFansOf: DS.attr('string'),

  concerts: DS.hasMany('concert', {async: true}),
});
