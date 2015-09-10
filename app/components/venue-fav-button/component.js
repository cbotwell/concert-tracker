import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['fav'],

  faved: Ember.computed('user', 'venue.users', function() {
    var user = this.get('user');

    if (user) {
      user = user;

      return this.get('venue.users').indexOf(user) >= 0;
    }
  }),

  click(ev) {
    ev.preventDefault();
    this.sendAction('onClick', this.get('venue'));
  }
});
