import DS from 'ember-data';

export default DS.Model.extend({
  supportRequests: DS.hasMany('support-request'),
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
