import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});

  this.route('login');
  this.route('signup');

  this.route('venues', function() {
    this.route('index', {path: '/'});
    this.route('show');
  });

  this.route('concerts', function() {
    this.route('index', {path: '/'});
    this.route('show');
  });

  this.route('dashboard');
  this.route('profile');

  this.route('post', {path: 'post/:id'});
});

export default Router;
