import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

//nothing but session inject in order to redirect to login page or not.

export default Controller.extend({
  session: service()
});
