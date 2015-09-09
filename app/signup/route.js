import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  firebase: Ember.inject.service('firebase'),

  actions: {
      signup(email, password, firstName, lastName) {
        var firebase = this.get('firebase');

        firebase.createUser({email, password}, (err, data) => {
          if (err) {
            return console.log(err);
          }

          this.get('session').authenticate('authenticator:firebase', {
            provider: 'password',
            email,
            password
          }).then(() => {
            this.get('session').getCurrentUser().then((user) => {
              user.set('firstName', firstName);
              user.set('lastName', lastName);
              user.set('email', email);

              user.save().then(() => {
                this.transitionTo('login');
              });
            });
          });
        });
      },
    },
});
