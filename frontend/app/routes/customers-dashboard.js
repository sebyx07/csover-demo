import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  toastr: Ember.inject.service(),

  model(){
    return new Ember.RSVP.Promise((resolve) => {
      this.get('currentUser').getUser().then((user) => {
        const queryOptions = {
          page: {
            number: 1
          },
          filter: {
            'user-id': user.get('id')
          },
          sort: '-createdAt'
        };

        if(!user.get('isCustomer')){
          return resolve(this.redirect());
        }
        resolve({currentUser: user, queryOptions: queryOptions})
      }).catch(() => {
        this.redirect();
      });
    });
  },

  redirect(){
    this.transitionTo('login');
    this.get('toastr').error('You must be logged in as a customer');
  }
});
