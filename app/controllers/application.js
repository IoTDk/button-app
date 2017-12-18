import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  session: service('session'),
  actions: {
    logout: function () { // This "logs out", -> all session variables set to null -> redirect to login page.
      this.set('session.userName', null);
      this.set('session.userId', null);
      this.set('session.isAuthenticated', false);
      this.set('session.apiLogin', null);
      this.set('session.apiPassword', null);
      this.transitionToRoute('login');
    }
  }
});
