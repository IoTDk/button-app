import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Ember from 'ember';
const { $ } = Ember;

export default Controller.extend({
  session: service(),
  actions: {
    changeFirstname: function () {
      let fname = this.get('fname');

      $.post('http://localhost/MyRESTApi/public/update', {fname: fname, userid: this.get('session.userId')}, () => {})
        .done(() => {})
        .fail(() => {alert('Request issue..')})
        .then(data => { // new notation, it's exactly like --> .then(function(data) {})
          let message = JSON.parse(data);
          alert(message.notice.text);
          this.set('session.userName', fname);
        });
      /*this.get('store').findRecord('user', this.get('session.userId')).then(user => {
        user.set('fname', fname);
        alert(user.get('hasDirtyAttributes'));
        user.save();
      });*/  //----- user.save() does not fire to users/{user_id} endpoint. Do not know why. So change to hand-made ajax request.
      // debugging : Create an adapter for the user model.
      // export default ApplicationAdapter.extend({
      // updateRecord() {debugger},
      // createRecord() {debugger}  --> This is JavaScript debugger, not Ember's debugger helper -> ( {{debugger}} in templates (.hbs) ).
      // })
    }
  }
});
