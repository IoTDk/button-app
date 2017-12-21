import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Ember from 'ember';
const { $ } = Ember;

export default Controller.extend({
  session: service(),
  actions: {
    changePass: function () {
      let currpass = this.get('currpass');
      let password = this.get('password');
      let confpass = this.get('confpass');
      let email = this.get('email');

      $.post('http://localhost/MyRESTApi/public/auth',{email: email, password: currpass}, function () {}) //request to /auth endpoint which verifies if email address and password are ok
        .done(() => {})
        .fail(() => {alert('Request issue...');})
        .then(data => {
          let user = JSON.parse(data);
          if (!JSON.stringify(user.Error)) {
            if (password === confpass) {
              $.post('http://localhost/MyRESTApi/public/update', {password: confpass, userid: this.get('session.userId')}, () => {}) //if the preceeding request suceeds and the two given new passwords are same,
                .done(() => {                                                                                                         // if so, database is updated.
                })
                .fail(() => {
                  alert('Request issue..')
                })
                .then(data => {
                  let message = JSON.parse(data);
                  alert(message.notice.text);
                });
            }
          } else {
            alert(JSON.stringify(user.Error));
          }
        });
    }
  }
});
