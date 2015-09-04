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
          }).then((data) => {
            // var user = this.get('currentUser');
            // data.currentUser.set('firstName', firstName);
            // data.currentUser.set('lastName', lastName);

            data.currentUser.save().then(() => {
              this.transitionTo('login');
            });
          });
        });
      },
    },
});
