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
          sort: '-createdAt,closedAt'
        };

        resolve({currentUser: user, queryOptions: queryOptions});
      }).catch(() => {
        this.transitionTo('login');
        this.get('toastr').error('You must be logged in as a customer');
      });
    });
  }
});
