import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('connection');
  this.route('my-devices');
  this.route('event-log');
  this.route('callbacks');
  this.route('analytics');
  this.route('settings');
  this.resource('help', function() {
    this.route('this');
    this.route('sigfox');
  });
});

export default Router;
