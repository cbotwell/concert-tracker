import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
      post: this.store.createRecord('post'),
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
