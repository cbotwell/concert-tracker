import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    if (!this.get('session').isAuthenticated) {
      return Ember.RSVP.hash({
        concert: this.store.findRecord('concert', params.concert_id)
      });
    }
    return Ember.RSVP.hash({
      concert: this.store.findRecord('concert', params.concert_id),
      user: this.get('session').getCurrentUser(),
    });
  },
  actions: {
    saveConcert: function(concert) {
      this.get('session').getCurrentUser().then((user) => {
        user.get('savedConcerts').addObject(concert);
        user.save();
        concert.save();
      });
    },
  },
});
