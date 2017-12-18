import DS from 'ember-data';

export default DS.Model.extend({
  devicetypename: DS.attr(),
  devicetypeid: DS.attr(),
  devicetypegroup: DS.attr(),
  deviceid: DS.attr(),
  name: DS.attr(),
  typeofdevice: DS.attr(),
  last: DS.attr('time'),
  state: DS.attr(),
  lat: DS.attr(),
  lng: DS.attr(),
  messages: DS.hasMany('message')
});
