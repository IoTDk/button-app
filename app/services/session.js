import Service from '@ember/service';

// This acts as a session, Just holds some "global" values that you can access by injecting this service in each route or w/ever you need it.
// Do this import at top of JS file:  import { inject as service } from '@ember/service'
// Inject service by doing
// service: session(),

export default Service.extend({
  userName: null,
  userId: null,
  apiLogin: null,
  apiPassword: null,
  isAuthenticated: false
});
