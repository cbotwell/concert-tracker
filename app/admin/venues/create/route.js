import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('venue');
  },

  actions: {
    save: function(venue) {
      venue.save().then(() => {
        this.transitionTo('admin.venues');
      });
    },
  },
});
