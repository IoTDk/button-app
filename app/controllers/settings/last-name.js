import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Ember from 'ember';
const { $ } = Ember;

export default Controller.extend({
  session: service(),
  actions: {
    changeLastname: function () {
      let lname = this.get('lname');

      $.post('http://localhost/MyRESTApi/public/update', {lname: lname, userid: this.get('session.userId')}, () => {})
        .done(() => {})
        .fail(() => {alert('Request issue..')})
        .then(data => { // new notation, it's exactly like --> .then(function(data) {})
          let message = JSON.parse(data);
          alert(message.notice.text);
        });
    }
  }
});
