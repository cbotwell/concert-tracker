import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', params.post_id),
      concerts: this.store.findAll('concert'),
    });
  },

  actions: {
    save: function(post, user) {
      post.setProperties({author: user});
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
