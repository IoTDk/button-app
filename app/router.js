import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

//determines accessible routes, which are nested into another and specific paths.

Router.map(function() {
  this.route('my-devices');
  this.route('event-log');
  this.route('analytics');
  this.route('settings');
  this.route('help', function() {
    this.route('this');
    this.route('sigfox');
  });
  this.route('signup');
  this.route('login');
  this.route('device', { path: 'my-devices/:device_id'});
  this.route('export');
});

export default Router;
