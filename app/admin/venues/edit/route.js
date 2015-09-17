import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(venue) {
      venue.save().then(() => {
        this.transitionTo('admin.venues');
      });
    },
  },
});
