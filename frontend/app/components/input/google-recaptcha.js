import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['input--google-recaptcha'],

  didInsertElement(){
    Ember.run.later(() => {
      this.set('ref', this);
    });
  },

  actions: {
    onCaptchaResolved(recaptcha){
      this.set('value', recaptcha);
    },
    onCaptchaExpired(){
      this.set('value', false);
    },
    reset(){
      this.get('gRecaptcha').resetReCaptcha();
    }
  }
});
