import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      concert: this.store.findRecord('concert', params.concert_id),
      user: this.get('session.currentUser'),
    });
  },
  actions: {
    saveConcert: function(concert) {
      var user = this.get('session.currentUser');
      user.savedConcerts.addObject(concert);
      user.save();
      concert.incrementProperty('rsvps', 1);
      concert.save();
    }
  },
});
