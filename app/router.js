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
    this.route('show', {path: '/:venue_id'});
  });

  this.route('concerts', function() {
    this.route('index', {path: '/'});
    this.route('show', {path: '/:concert_id'});
  });

  this.route('dashboard');
  this.route('profile' , {path: '/:uid'});

  this.route('post', {path: '/post/:post_id'});

  this.route('admin', function() {
    this.route('venues', function() {
      this.route('index', {path: '/'});
      this.route('create', {path: '/new'});
      this.route('edit', {path: '/:venue_id/edit'});
    });
    this.route('concerts', function() {
      this.route('index', {path: '/'});
      this.route('create', {path: '/new'});
      this.route('edit', {path: '/:concert_id/edit'});
    });
    this.route('bands', function() {
      this.route('index', {path: '/'});
      this.route('create', {path: '/new'});
      this.route('edit', {path: '/:band_id/edit'});
    });
  });
});

export default Router;
