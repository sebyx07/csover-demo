import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  classNames: ['support-requests--new'],
  store: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  actions: {
    submit(){
      this.get('currentUser').getUser().then((user) => {
        const supportRequest = this.get('store').createRecord('support-request',{
          message: this.get('message'),
          title: this.get('title'),
          user: user
        });

        this.get('list').send('newRequests', supportRequest, this);
      });
    },
    new(){
      this.set('new', true);
    },
    cancel(){
      this.set('new', false);
    }
  },

  disabledBtn: Ember.computed.not('isValid'),

  validations: {
    title: {
      presence: true,
      length: {
        maximum: 40, minimum: 10
      }
    },
    message: {
      presence: true,
      length: {
        maximum: 10000, minimum: 40
      }
    }
  }
});
