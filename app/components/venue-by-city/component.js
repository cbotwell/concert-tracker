import Ember from 'ember';

export default Ember.Component.extend({
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
