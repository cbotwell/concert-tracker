import Ember from 'ember';
import ToggleFav from 'concert-tracker/mixins/toggle-fav';


export default Ember.Route.extend(ToggleFav, {
  model: function() {
    return this.store.findAll('venue');
  }
});
