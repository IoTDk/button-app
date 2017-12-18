import DS from 'ember-data';

// The adapter determines how ember-data does requests.
// The host represents Localhost (127.0.0.1)
// Namespace determines where the request is going to : So here, on the php server located on 127.0.0.1 inside the MyRESTAPI/, inside the public/ folder.
// the headers precise which type of data is transmitted. So here, JSON.

export default DS.JSONAPIAdapter.extend({
  host: 'http://127.0.0.1',
  namespace: 'MyRESTApi/public',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
