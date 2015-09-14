import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('user', {async: true}),
  date: DS.attr('moment-utc'),

  title: DS.attr('string', {defaultValue: ''}),
  content: DS.attr('string', {defaultValue: ''}),
  tags: DS.attr('string', {defaultValue: ''}),

  concert: DS.belongsTo('concert', {async: true}),

});
