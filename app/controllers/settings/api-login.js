import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Ember from 'ember';
const { $ } = Ember;

export default Controller.extend({
  session: service(),
  actions: {
    changeApiLog: function () {
      let apilogin = this.get('apilogin');

      $.post('http://localhost/MyRESTApi/public/update', {apiLogin: apilogin, userid: this.get('session.userId')}, () => {})
        .done(() => {})
        .fail(() => {alert('Request issue..')})
        .then(data => { // new notation, it's exactly like --> .then(function(data) {})
          let message = JSON.parse(data);
          alert(message.notice.text);
        });
    }
  }
});
