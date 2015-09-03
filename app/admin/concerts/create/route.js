import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      concert: this.store.createRecord('concert'),
      venues: this.store.findAll('venue'),
      bands: this.store.findAll('band'),
    });
  },

  actions: {
    save: function(concert, bands) {
      var bandsArray = [bands];
      concert.setProperties({bands: bandsArray});
      concert.save().then(() => {
        concert.get('bands').foreach((band) => {
          band.save();
        });

        concert.get('venue').save();

        this.transitionTo('admin.concerts');
      });
    },
  },
});
