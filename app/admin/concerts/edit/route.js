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
        // concert.get('bands').foreach((band) => {
        //   band.save();
        // });
        // concert.get('venue').save();
        this.transitionTo('admin.concerts');
      });
    },
  },
});
