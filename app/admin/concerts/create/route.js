import Ember from 'ember';
import moment from 'moment';

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
      var date = concert.get('date');
      concert.setProperties({bands: bandsArray, date: moment(date)});
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
