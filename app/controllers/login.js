import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Ember from 'ember';
const { $ } = Ember;

export default Controller.extend({
  session: service(),
  actions: {
    authenticate: function () {
       let {email, password} = this.getProperties('email', 'password');

       $.post('http://localhost/MyRESTApi/public/auth',{email: email, password: password}, function (data, status) {
       })
         .done(() => {})
         .fail(() => {alert('Request issue...' . status);})
         .always(data => { //IF WRONG VALUES (REQUEST FAIL?)
           let user = JSON.parse(data);
           this.set('session.userName', user.fname);
           this.set('session.userId', user.id);
           this.set('session.apiLogin', user.apiLogin);
           this.set('session.apiPassword', user.apiPassword);
           this.set('session.isAuthenticated', true);
           this.setProperties({
             email: '',
             password: ''
           });

           this.transitionToRoute('my-devices');
         });
    },
  }
});
