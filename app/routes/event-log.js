import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    this.store.findAll('user');
  }
});
