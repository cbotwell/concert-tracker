import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      venues: this.store.findAll('venue'),
      bands: this.store.findAll('band'),
      concert: this.store.findRecord('concert', params.concert_id),
    });
  },

  actions: {
    save: function(concert, bands) {
      var bandsArray = [bands];
      concert.setProperties({bands: bandsArray});
      concert.save().then(() => {
        concert.get('venue').then((venue) => {
          venue.save();
        });
        concert.get('bands').forEach((band) => {
          band.save();
        });
        this.transitionTo('admin.concerts');
      });
    },
  },
});
