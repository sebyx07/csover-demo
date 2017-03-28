import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  router: Ember.inject.service('-routing'),
  currentUser: Ember.inject.service(),
  toastr: Ember.inject.service(),
  classNames: ['login--login-form'],
  disabledBtn: Ember.computed.not('isValid'),

  actions: {
    submit(){
      const params = this.getProperties(['username', 'password']);
      params['g-recaptcha-response'] = this.get('recaptcha');
      Ember.$.post('/api/v1/sessions/login', params).done((data) => {
        this.get('toastr').success('Welcome');
        this.get('currentUser').pushUserData(data);
      }).fail(() => {
        this.get('toastr').error('Invalid Credentials');
        this.get('recaptchaInput').send('reset');
        this.setProperties({
          password: '',
          recaptcha: undefined
        });
      })
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
