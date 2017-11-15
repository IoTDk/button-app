import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://127.0.0.1',
  namespace: 'MyRESTApi/public',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
