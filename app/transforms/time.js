import DS from 'ember-data';

// this transforms a received timestamp i.e "1524365787" to human readable date i.e "15/12/2017 at 20:45:57"
// directly inside of a model.

export default DS.Transform.extend({
  deserialize(serialized) {
    let pad = function (input) {return input < 10 ? "0" + input : input;};
    let date = serialized ? new Date(serialized * 1000) : new Date();
    let right_date = [
      pad(date.getDate()),
      pad(date.getMonth()),
      pad(date.getFullYear())
    ].join('/');
    let right_hour = [
      pad(date.getHours()),
      pad(date.getMinutes() + 1),
      pad(date.getSeconds() + 1)
    ].join(':');
    return [
      right_date,
      right_hour
    ].join(' at ');
  },

  serialize(deserialized) {
    return deserialized;
  }
});
