import DS from 'ember-data';

export default DS.Model.extend({
  time: DS.attr('time'),
  transmitted: DS.attr(),
  device: DS.belongsTo('device')
});
