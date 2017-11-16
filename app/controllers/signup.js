import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addUser: function() {
      let fname = this.get('fname');
      let lname = this.get('lname');
      let cname = this.get('cname');
      let email = this.get('newemail');
      let password = this.get('newpass');
      let apiLogin = this.get('apiLogin');
      let apiPassword = this.get('apiPass');

      function isBlank(str) {
        return (!str || 0 === str.length);
      }

      if (!isBlank(fname) && !isBlank(lname) && !isBlank(cname) && !isBlank(email) && !isBlank(password) && !isBlank(apiLogin) && !isBlank(apiPassword)) {
      let User = this.store.createRecord('user', {
        fname: fname,
        lname: lname,
        cname: cname,
        email: email,
        password: password,
        apilogin: apiLogin,
        apipassword: apiPassword
      });

      User.save();

      this.setProperties({
        fname: '',
        lname: '',
        cname: '',
        newemail: '',
        newpass: '',
        apiLogin: '',
        apiPass: ''
      });

      this.transitionToRoute('login');
      } else {
        this.transitionToRoute('signup');
        document.getElementById("changethis").value = 'Fill all fields pls!!';
      }
    }
  }
});
