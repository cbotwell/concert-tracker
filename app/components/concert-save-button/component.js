import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',

  saved: Ember.computed('user', 'concert.users', function() {
    var user = this.get('user');
    if (user) {
      user = user;

      return this.get('concert.users').indexOf(user) >= 0;
    }
  }),

  click() {
    this.sendAction('onClick', this.get('concert'));
  }
});
