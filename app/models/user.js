import DS from 'ember-data';

export default DS.Model.extend({
  'fname': DS.attr('string'),
  'lname': DS.attr('string'),
  'cname': DS.attr('string'),
  'email': DS.attr('string'),
  'password': DS.attr('string'),
  'apilogin': DS.attr('string'),
  'apipassword': DS.attr('string')
});
