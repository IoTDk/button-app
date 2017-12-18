import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  session: service(),
  model () {
   return this.store.query('device', { // request to /devices?login={login}&password={password}
     login: this.get('session.apiLogin'),
     password: this.get('session.apiPassword')}); // get all devices associated to Sigfox Backend group. (using credentials that the user gave when he signed up).
    }
});
