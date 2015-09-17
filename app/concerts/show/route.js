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
    toggleRsvp: function(concert) {
      this.get('session').getCurrentUser().then((user) => {
        var saved = user.get('savedConcerts');
          if (saved.indexOf(concert) >= 0) {
            saved.removeObject(concert);
          } else {
            saved.addObject(concert);
          }
        user.save();
        concert.save();
      });
    },
  },
});
