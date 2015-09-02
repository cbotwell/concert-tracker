import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(band) {
      band.save().then(() => {
        this.transitionTo('admin.bands');
      });
    },
  },
});
