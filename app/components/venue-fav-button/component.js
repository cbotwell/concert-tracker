import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',

  faved: Ember.computed('user', 'venue.users', function() {
    var user = this.get('user');
    if (user) {
      user = user.content;

      return this.get('venue.users').indexOf(user) >= 0;
    }
  }),

  click() {
    this.sendAction('onClick', this.get('venue'));
  }
});
