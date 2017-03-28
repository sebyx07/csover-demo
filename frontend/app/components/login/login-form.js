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
        const user = this.get('currentUser').pushUserData(data);
        this.redirectUser(user);
        this.get('toastr').success('Welcome');
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

  redirectUser(user){
    const router = this.get('router');
    if(user.get('isAdmin')){
      window.location.href= 'admin';
    }else if(user.get('isAgent')){
      router.transitionTo('agents-dashboard');
    }else if(user.get('isCustomer')){
      router.transitionTo('customers-dashboard');
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
