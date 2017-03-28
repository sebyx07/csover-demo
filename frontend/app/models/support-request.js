import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  title: DS.attr('string'),
  message: DS.attr('string'),
  closedAt: DS.attr('date'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
