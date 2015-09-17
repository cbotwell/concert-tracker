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
    save: function(post, user) {
      post.setProperties({date: moment(), author: user});
      post.save().then(() => {
        post.get('author').then((user) => {
          user.save();
        });
        post.get('concert').then((concert) => {
          concert.save();
        });
        this.transitionTo('admin.posts');
      });
    },
  },
});
