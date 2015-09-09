import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    if (!this.get('session').isAuthenticated) {
      return Ember.RSVP.hash({
        venue: this.store.findRecord('venue', params.venue_id)
      });
    }
    return Ember.RSVP.hash({
      venue: this.store.findRecord('venue', params.venue_id),
      user: this.get('session').getCurrentUser(),
    });
  },
  actions: {
    toggleFav: function(venue) {
      this.get('session').getCurrentUser().then((user) => {
        var faved = user.get('favoriteVenues');
          if (faved.indexOf(venue) >= 0) {
            faved.removeObject(venue);
          } else {
            faved.addObject(venue);
          }
        user.save();
        venue.save();
      });
    },
  },
});
