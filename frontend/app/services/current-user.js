import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  getUser(){
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (this.get('user')) {
        return resolve(this.get('user'));
      }
      Ember.$.getJSON('/api/v1/sessions/current')
        .then((data) => {
          resolve(this.pushUserData(data));
        })
        .fail((err) => {
          reject(err);
        });
    });
  },

  pushUserData(data){
    const store = this.get('store');
    const id = data.data.id;
    store.pushPayload(data);
    const user = store.peekRecord('user', id);
    this.set('user', user);
    return user;
  }
});
