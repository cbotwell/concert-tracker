import Ember from 'ember';
import ToggleFav from 'concert-tracker/mixins/toggle-fav';

export default Ember.Route.extend(ToggleFav, {
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
});
