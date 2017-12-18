import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.replaceWith('login'); // the '/' url directly redirects to login
  }
});
