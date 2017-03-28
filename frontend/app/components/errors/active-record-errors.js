import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['errors--active-record-errors'],

  isRecaptcha: Ember.computed('data.recaptcha', function () {
    return this.get('data.recaptcha');
  })
});
