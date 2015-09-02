import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      venues: this.store.findAll('venue'),
      bands: this.store.findAll('band'),
      concert: this.store.findRecord('concert', params.concert_id),
    });
  },
});
