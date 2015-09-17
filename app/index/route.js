import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post', {
        orderBy: 'date',
        limitToLast: 6
      }),
      concerts: this.store.findAll('concert', {
        orderBy: 'date'
      }),
    });
  }
});
