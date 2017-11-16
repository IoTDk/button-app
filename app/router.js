import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('my-devices');
  this.route('event-log');
  this.route('callbacks');
  this.route('analytics');
  this.route('settings');
  this.route('help', function() {
    this.route('this');
    this.route('sigfox');
  });
  this.route('signup');
  this.route('login');
});

export default Router;
