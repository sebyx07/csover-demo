import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  classNames: ['login--login-form'],
  disabledBtn: Ember.computed.not('isValid'),

  actions: {
    submit(){
      debugger;
    }
  },

  validations: {
    username: {
      presence: true,
    },
    password: {
      presence: true
    },
    recaptcha: {
      presence: true
    }
  }
});
