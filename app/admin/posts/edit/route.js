import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({

  model: function(params) {
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', params.post_id),
      concerts: this.store.findAll('concert'),
    });
  },

  actions: {
    save: function(post) {
      post.setProperties({date: moment(), author: this.get('session').getCurrentUser()});
      post.save().then(() => {
        this.transitionTo('admin.posts');
      });
    },
  },
});
