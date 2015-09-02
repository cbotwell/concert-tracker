import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('band');
  },

  actions: {
    save: function(band) {
      band.save().then(() => {
        this.transitionTo('admin.bands');
      });
    },
  },
});
