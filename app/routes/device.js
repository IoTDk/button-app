import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  session: service(),
  model (device) {
    let devices = this.store.peekRecord('device', device.device_id); // retrieve model for particular device (in store)

    let messages = this.store.query('message',
      {login: this.get('session.apiLogin'),
        password: this.get('session.apiPassword'), //retrieves messages for specific device and sets messages property of device to the array of records just retrieved.
        id: device.device_id}).then(() => {devices.set('messages', messages);}); // request to /messages?login={login}&password={password}&id={device_id}

    return devices;
  },
  afterModel (devices) { // Planned to translate the data of messages.
  }
});
