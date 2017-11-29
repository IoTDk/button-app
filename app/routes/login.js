import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  session: service(),
  model() {
    let auth = this.get('session.isAuthenticated');
    if (auth) {
      this.transitionTo('my-devices');
    }
}
});
