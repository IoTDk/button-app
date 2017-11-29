import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  session: service('session'),
  actions: {
    logout: function () {
      this.set('session.userName', null);
      this.set('session.userId', null);
      this.set('session.isAuthenticated', false);
      this.transitionToRoute('login');
    }
  }
});
