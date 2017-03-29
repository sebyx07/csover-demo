import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service('-routing'),
  toastr: Ember.inject.service(),

  actions: {
    logout(){
      Ember.$.post('/api/v1/sessions/logout').then(() => {
        this.get('router').transitionTo('login');
        this.get('toastr').success('Logged Out!');
      });
    }
  }
});
