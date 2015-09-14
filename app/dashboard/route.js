import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post', {
        orderBy: 'date',
        limitToLast: 6
      }),
      concerts: this.store.findAll('concert', {
        orderBy: 'date'
      }),
      user: this.get('session').getCurrentUser(),
    });
  },
});
