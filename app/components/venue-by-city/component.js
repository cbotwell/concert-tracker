import Ember from 'ember';
import ToggleFav from 'concert-tracker/mixins/toggle-fav';


export default Ember.Component.extend(ToggleFav, {
  venues: [],

  venuesByCity: Ember.computed('venues', 'venues.@each.city', 'venues.@each.name', function() {
    return this.get('venues').reduce((prev, current) => {
      var cities = prev.findBy('name', current.get('city'));
      if (cities) {
        cities.venues.push(current);
      } else {
        cities = {
          name: current.get('city'),
          venues: [current]
        };
        prev.push(cities);
      }
      return prev;
    }, []);
  }),
});
