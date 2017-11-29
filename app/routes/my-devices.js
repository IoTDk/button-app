import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
const { $ } = Ember;

export default Route.extend({
  session: service(),
  model () {
    return($.post('http://localhost/MyRESTApi/public/devices', {login: this.get('session.apiLogin'), password: this.get('session.apiPassword')}, function(data, status){})
      .done(() => {alert('Send to PHP');})
      .fail(() => {alert('It\'s a fail bro');})
      .always(data => {
        let devices_from_server = JSON.parse(data);
        alert(JSON.stringify(devices_from_server[0]['devices'][0], null, 4));
      }));
  }
});
