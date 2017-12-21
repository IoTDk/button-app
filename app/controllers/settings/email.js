import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Ember from 'ember';
const { $ } = Ember;

export default Controller.extend({
  session: service(),
  actions: {
    changeEmail: function () {
      let email = this.get('email');

      $.post('http://localhost/MyRESTApi/public/update', {email: email, userid: this.get('session.userId')}, () => {})
        .done(() => {})
        .fail(() => {alert('Request issue..')})
        .then(data => { // new notation, it's exactly like --> .then(function(data) {})
          let message = JSON.parse(data);
          alert(message.notice.text);
        });
    }
  }
});
