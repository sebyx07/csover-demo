import Ember from 'ember';
import EmberValidations, { validator } from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  router: Ember.inject.service('-routing'),
  currentUser: Ember.inject.service(),
  toastr: Ember.inject.service(),
  classNames: ['login--register-form'],
  disabledBtn: Ember.computed.not('isValid'),

  actions: {
    submit(){
      const params = this.getProperties(['username', 'password']);
      params['g-recaptcha-response'] = this.get('recaptcha');

      Ember.$.post('/api/v1/sessions/register', params).done((data) => {
        this.get('currentUser').pushUserData(data);
        this.set('activeRecordErrors', undefined);
        this.get('toastr').transitionTo('customers-dashboard');
        this.get('toastr').succes('Welcome');
      }).fail((error) => {
        this.set('activeRecordErrors', error.responseJSON);
        console.log(error.responseJSON);
        this.get('recaptchaInput').send('reset');
        this.setProperties({password: '', passwordConfirmation: '', recaptcha: undefined});
      });
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
