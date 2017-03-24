import Ember from 'ember';
import EmberValidations, { validator } from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  classNames: ['login--register-form'],
  disabledBtn: Ember.computed.not('isValid'),

  actions: {
    submit(){

    }
  },

  validations: {
    username: {
      presence: true,
    },
    password: {
      presence: true,
      format:
        { with: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9-_]{6,})$/,
          allowBlank: true,
          message: 'Only letters characters and underscore, minimum of 6'
        }
    },
    passwordConfirmation:{
      inline: validator(function() {
        const password = this.get('password'),
          passwordConfirmation = this.get('passwordConfirmation');

        if(!passwordConfirmation || passwordConfirmation !== password){
          return "Passwords don't match"
        }
      })
    },
    recaptcha: {
      presence: true
    }
  }
});
