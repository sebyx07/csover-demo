import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  role: DS.attr('string'),

  isCustomer: Ember.computed('role', function () {
    return this.get('role') === 'customer';
  }),

  isAgent: Ember.computed('role', function () {
    return this.get('role') === 'agent';
  }),

  isAdmin: Ember.computed('role', function () {
    return this.get('role') === 'admin';
  })
});
