import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    toggleFav: function(venue) {
      this.get('session').getCurrentUser().then((user) => {
        var faved = user.get('favoriteVenues');
          if (faved.indexOf(venue) >= 0) {
            faved.removeObject(venue);
          } else {
            faved.addObject(venue);
          }
        user.save();
        venue.save();
      });
    },
  },
});
